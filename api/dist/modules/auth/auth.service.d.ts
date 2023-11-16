import { AuthenticateDto } from './dto/authenticate.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
export declare class AuthService {
    private readonly usersRepo;
    constructor(usersRepo: UsersRepository);
    authenticate(authenticateDto: AuthenticateDto): Promise<{
        isPasswordValid: true;
    }>;
}
