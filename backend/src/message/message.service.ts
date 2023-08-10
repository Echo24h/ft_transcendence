import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Message } from '../message/message.entity';

@Injectable()
export class MessageService {
    
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async create(newMessage: Message): Promise<Message> {
    const message = this.messageRepository.create(newMessage);
    return this.messageRepository.save(message);
  }

  async findById(id: number): Promise<Message> {

    const options: FindOneOptions<Message> = {
        where: { id },
    };

    const message = await this.messageRepository.findOne(options);

    if (!message) {
      throw new NotFoundException(`Message with ID ${id} not found`);
    }

    return message;
  }
}