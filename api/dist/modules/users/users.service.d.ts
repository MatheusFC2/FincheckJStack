import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
export declare class UsersService {
    private readonly userRepo;
    constructor(userRepo: UsersRepository);
    create(createUserDto: CreateUserDto): Promise<{
        name: string;
        email: string;
    }>;
}
