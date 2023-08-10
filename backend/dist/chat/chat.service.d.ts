import { Repository } from 'typeorm';
import { Chat } from '../chat/chat.entity';
export declare class ChatService {
    private readonly chatRepository;
    constructor(chatRepository: Repository<Chat>);
    create(newChat: Chat): Promise<Chat>;
    findById(id: number): Promise<Chat>;
}
