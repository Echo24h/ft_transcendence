import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Chat } from '../chat/chat.entity';

@Injectable()
export class ChatService {

  constructor(
    @InjectRepository(Chat)
    private readonly chatRepository: Repository<Chat>,
  ) {}

  async create(newChat: Chat): Promise<Chat> {
    const chat = this.chatRepository.create(newChat);
    return this.chatRepository.save(chat);
  }

  async findById(id: number): Promise<Chat> {

    const options: FindOneOptions<Chat> = {
        where: { id },
      };

    const chat = await this.chatRepository.findOne(options);

    if (!chat) {
      throw new NotFoundException(`Chat with ID ${id} not found`);
    }

    return chat;
  }
}