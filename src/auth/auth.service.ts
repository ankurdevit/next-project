import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterUserDto } from 'src/dto/registerUser.dto';
import { UserService } from 'src/user/user.service';
import bcrypt from 'bcrypt';
import { User } from 'src/user/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/user/dto/loginUser.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}
  
  async getRegister(RegisterUserDto: RegisterUserDto): Promise<User> {

    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(RegisterUserDto.password, saltRounds);
    RegisterUserDto.password = hashedPassword;
    return this.userService.createUser(RegisterUserDto);
  }

  async getLogin( LoginUserDto: LoginUserDto ): Promise<{ access_token: string }> {
    const user: User = await this.userService.getLogin(LoginUserDto);
    const payload = { id: user.id, email: user.email };
    return { access_token: this.jwtService.sign(payload) };
  }
}
