import { Controller, Get, Post, Put, Body, Delete, Param } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from '../message/message.entity';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService,) {}

  @Post()
  async create(@Body() newMessage: Message): Promise<Message> {
    return this.messageService.create(newMessage);
  }

  @Get(':id')
  async findById(@Param('id') chatId: number): Promise<Message> {
    return this.messageService.findById(chatId);
  }
}