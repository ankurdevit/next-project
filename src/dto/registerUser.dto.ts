import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty()
  @MinLength(2)
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @MinLength(2)
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}