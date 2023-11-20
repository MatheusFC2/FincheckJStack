import { AuthService } from './auth.service';
import { AuthenticateDto } from './dto/authenticate.dto';
import { SignupDto } from './dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    authenticate(authenticateDto: AuthenticateDto): Promise<{
        accessToken: string;
    }>;
    craete(signupDto: SignupDto): Promise<{
        name: string;
        email: string;
    }>;
}
