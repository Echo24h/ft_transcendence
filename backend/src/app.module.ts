import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { Chat } from './chat/chat.entity';
import { ChatService } from './chat/chat.service';
import { ChatController } from './chat/chat.controller';
import { Message } from './message/message.entity';
import { MessageService } from './message/message.service';
import { MessageController } from './message/message.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'echo24h',
      password: '123456',
      database: 'ft_transcendence',
      entities: [User, Chat, Message],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Chat, Message]),
  ],
  controllers: [UserController, ChatController, MessageController],
  providers: [UserService, ChatService, MessageService],
})
export class AppModule {}
