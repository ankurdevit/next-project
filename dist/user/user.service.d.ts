import { RegisterUserDto } from 'src/dto/registerUser.dto';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(RegisterUserDto: RegisterUserDto): Promise<User>;
    getLogin(LoginUserDto: any): Promise<User>;
}
