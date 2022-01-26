import { Whatsapp, Message } from '../Shared/ChatBotLib';
import Chat from "../Chat";
import IChatState from "./IChatState";
import { ContentHandler } from '../Services/ContentHandler';
import { ContentTextImage } from '../Services/ContentTextImage';
import PrincipalMenu from '../Templates/PrincipalMenu';
import { CepState } from './CepState';

export default class PrincipalMenuState implements IChatState {
    
    constructor(readonly chat: Chat, private readonly whats: Whatsapp) {

    }

    async handleOptions(message: Message): Promise<void> {
        
            const contentHandler = new ContentHandler(
                new ContentTextImage(this.whats, message)
            );
            
            contentHandler.handler(PrincipalMenu);

            await this.chat.setState(new CepState(this.chat, this.whats));       
    }

}