import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/shared/database/prisma.service';
export declare class UsersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        name: string;
        email: string;
    }>;
}
