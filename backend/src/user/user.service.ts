import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(newUser: User): Promise<User> {
    const user = this.userRepository.create(newUser);
    return this.userRepository.save(user);
  }

  async update(id: number, updateUser: User): Promise<User> {
    const options: FindOneOptions<User> = {
        where: { id },
      };
    const user = await this.userRepository.findOne(options);
    if (user) {
      Object.assign(user, updateUser);
      return this.userRepository.save(user);
    }
    return null;
  }

  async findById(id: number): Promise<User> {

    const options: FindOneOptions<User> = {
      where: { id },
    };

    const user = await this.userRepository.findOne(options);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

}