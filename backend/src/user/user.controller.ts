import { Controller, Get, Post, Put, Body, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() newUser: User): Promise<User> {
    return this.userService.create(newUser);
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<User> {
    return this.userService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUser: User): Promise<User> {
    return this.userService.update(id, updateUser);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}