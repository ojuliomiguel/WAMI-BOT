import { Message, Whatsapp } from '../Shared/ChatBotLib';

import { DataContent } from "../Templates/types/DataContent";
import { ISendContentStrategy } from "./types/ISendContentStategy";

export class ContentText implements ISendContentStrategy {

    constructor(private whats: Whatsapp, private message: Message) {}

    public async send(data: DataContent): Promise<void> {
        await this.whats.sendText(
            this.message.from,
            data.textContent   
        );
    } 
}