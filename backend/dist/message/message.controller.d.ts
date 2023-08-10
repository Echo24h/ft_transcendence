import { MessageService } from './message.service';
import { Message } from '../message/message.entity';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    create(newMessage: Message): Promise<Message>;
    findById(chatId: number): Promise<Message>;
}
