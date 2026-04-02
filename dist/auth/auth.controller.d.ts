import { AuthService } from './auth.service';
import { RegisterUserDto } from 'src/dto/registerUser.dto';
import { LoginUserDto } from 'src/user/dto/loginUser.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(RegisterUserDto: RegisterUserDto): Promise<{
        message: string;
    }>;
    login(LoginUserDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
