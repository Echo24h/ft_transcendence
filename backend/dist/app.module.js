"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user/user.entity");
const user_service_1 = require("./user/user.service");
const user_controller_1 = require("./user/user.controller");
const chat_entity_1 = require("./chat/chat.entity");
const chat_service_1 = require("./chat/chat.service");
const chat_controller_1 = require("./chat/chat.controller");
const message_entity_1 = require("./message/message.entity");
const message_service_1 = require("./message/message.service");
const message_controller_1 = require("./message/message.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'echo24h',
                password: '123456',
                database: 'ft_transcendence',
                entities: [user_entity_1.User, chat_entity_1.Chat, message_entity_1.Message],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, chat_entity_1.Chat, message_entity_1.Message]),
        ],
        controllers: [user_controller_1.UserController, chat_controller_1.ChatController, message_controller_1.MessageController],
        providers: [user_service_1.UserService, chat_service_1.ChatService, message_service_1.MessageService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map