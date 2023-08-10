import { Controller, Get, Post, Put, Body, Delete, Param } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat } from '../chat/chat.entity';
import { Message } from '../message/message.entity';

@Controller('chats')
export class ChatController {
    
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async createChat(@Body() newChat: Chat): Promise<Chat> {
    return this.chatService.create(newChat);
  }

  @Get(':id')
  async getChat(@Param('id') id: number): Promise<Chat> {
    return this.chatService.findById(id);
  }
}