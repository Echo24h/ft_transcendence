import { ChatService } from './chat.service';
import { Chat } from '../chat/chat.entity';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    createChat(newChat: Chat): Promise<Chat>;
    getChat(id: number): Promise<Chat>;
}
