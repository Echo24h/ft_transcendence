import { Repository } from 'typeorm';
import { Message } from '../message/message.entity';
export declare class MessageService {
    private readonly messageRepository;
    constructor(messageRepository: Repository<Message>);
    create(newMessage: Message): Promise<Message>;
    findById(id: number): Promise<Message>;
}
