import { create, Message, Whatsapp } from '../Shared/ChatBotLib';
import { DataContent } from "../Templates/types/DataContent";
import { ISendContentStrategy } from "./types/ISendContentStategy";

export class ContentTextImage implements ISendContentStrategy {

    constructor(private whats: Whatsapp, private message: Message) {}

    public async send(data: DataContent): Promise<void> {
        await this.whats.sendImage(
            this.message.from,
            data.imageUrl as string,
            data.imageDescription as string,
            ` Olá, ${this.message.sender.pushname} ` + data.textContent 
        );
    }
    
}