import { UserService } from './user.service';
import { User } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<User[]>;
    create(newUser: User): Promise<User>;
    findById(id: number): Promise<User>;
    update(id: number, updateUser: User): Promise<User>;
    delete(id: number): Promise<void>;
}
