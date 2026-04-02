import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from 'src/dto/registerUser.dto';
import { LoginUserDto } from 'src/user/dto/loginUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/register')
  async register(@Body() RegisterUserDto: RegisterUserDto): Promise<{ message: string }> {
    /**
      Handles user registration logic
      check if email already exists
      hash the password
      save the user to the database
      generate a JWT token for the user
      send the token back in the response
     */
    await this.authService.getRegister(RegisterUserDto);
    return { message: 'User created successfully' };
  }

  @Post('/login')
  async login(@Body() LoginUserDto: LoginUserDto): Promise<{ access_token: string }> {
    /**
     * Handles user login logic
     */
    const result = await this.authService.getLogin(LoginUserDto);
    return result;
  }
}
