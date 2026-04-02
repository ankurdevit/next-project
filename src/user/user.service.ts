import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDto } from 'src/dto/registerUser.dto';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async createUser(RegisterUserDto: RegisterUserDto): Promise<User> {
    console.log('Creating user with the following details:', RegisterUserDto);
    const newUser = this.userRepository.create(RegisterUserDto);
    return await this.userRepository.save(newUser);
  }

  async getLogin(LoginUserDto: any): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email: LoginUserDto.email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    console.log('Comparing provided password with stored hashed password for user:', user.email);
    const isPasswordValid = bcrypt.compareSync(LoginUserDto.password, user.password);
    console.log('Comparing passwords for user:', user.email, LoginUserDto.password, user.password, isPasswordValid);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
