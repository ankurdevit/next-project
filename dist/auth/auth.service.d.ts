import { RegisterUserDto } from 'src/dto/registerUser.dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/user/dto/loginUser.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    getRegister(RegisterUserDto: RegisterUserDto): Promise<User>;
    getLogin(LoginUserDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
