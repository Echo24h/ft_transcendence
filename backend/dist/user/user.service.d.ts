import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    create(newUser: User): Promise<User>;
    update(id: number, updateUser: User): Promise<User>;
    findById(id: number): Promise<User>;
    delete(id: number): Promise<void>;
}
