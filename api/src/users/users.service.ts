import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { hash } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;

    const emailTaken = await this.prismaService.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (emailTaken) {
      throw new ConflictException('User alreadyja tem carai');
    }

    const hashedPassword = await hash(password, 12);

    const user = await this.prismaService.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        categories: {
          createMany: {
            data: [
              // Income
              { name: 'Salário', icon: 'salary', type: 'INCOME' },
              { name: 'Freelance', icon: 'freelance', type: 'INCOME' },
              { name: 'Outro', icon: 'other', type: 'INCOME' },
              // Expense
              { name: 'Casa', icon: 'home', type: 'EXPENSE' },
              { name: 'Alimentação', icon: 'food', type: 'EXPENSE' },
              { name: 'Educação', icon: 'education', type: 'EXPENSE' },
              { name: 'Lazer', icon: 'fun', type: 'EXPENSE' },
              { name: 'Mercado', icon: 'grocery', type: 'EXPENSE' },
              { name: 'Roupas', icon: 'clothes', type: 'EXPENSE' },
              { name: 'Transporte', icon: 'transport', type: 'EXPENSE' },
              { name: 'Viagem', icon: 'travel', type: 'EXPENSE' },
              { name: 'Outro', icon: 'other', type: 'EXPENSE' },
            ],
          },
        },
      },
    });

    // await this.prismaService.category.createMany({
    //   data: [
    //     // Income
    //     { userId: user.id, name: 'Salário', icon: 'salary', type: 'INCOME' },
    //     {
    //       userId: user.id,
    //       name: 'Freelance',
    //       icon: 'freelance',
    //       type: 'INCOME',
    //     },
    //     { userId: user.id, name: 'Outro', icon: 'other', type: 'INCOME' },
    //     // Expense
    //     { userId: user.id, name: 'Casa', icon: 'home', type: 'EXPENSE' },
    //     { userId: user.id, name: 'Alimentação', icon: 'food', type: 'EXPENSE' },
    //     {
    //       userId: user.id,
    //       name: 'Educação',
    //       icon: 'education',
    //       type: 'EXPENSE',
    //     },
    //     { userId: user.id, name: 'Lazer', icon: 'fun', type: 'EXPENSE' },
    //     { userId: user.id, name: 'Mercado', icon: 'grocery', type: 'EXPENSE' },
    //     { userId: user.id, name: 'Roupas', icon: 'clothes', type: 'EXPENSE' },
    //     {
    //       userId: user.id,
    //       name: 'Transporte',
    //       icon: 'transport',
    //       type: 'EXPENSE',
    //     },
    //     { userId: user.id, name: 'Viagem', icon: 'travel', type: 'EXPENSE' },
    //     { userId: user.id, name: 'Outro', icon: 'other', type: 'EXPENSE' },
    //   ],
    // });

    return {
      name: user.name,
      email: user.email,
    };
  }
}
