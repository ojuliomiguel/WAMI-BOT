import { Whatsapp, Message } from '../Shared/ChatBotLib';
import Chat from "../Chat";
import PrincipalMenuState from "./PrincipalMenuState";
import IChatState from "./IChatState";
import { ContentHandler } from '../Services/ContentHandler';
import { messages } from '../Templates/Messages';
import { ISendContentStrategy } from '../Services/types/ISendContentStategy';
import { ContentText } from '../Services/ContentText';
import { chatManagerSingleton } from '../ChatManager';
import { CepState } from './CepState';


export class TrackerOptionsState implements IChatState {
   
    constructor(readonly chat: Chat, private readonly whats: Whatsapp) {

    }

    async handleOptions(message: Message): Promise<void> {
        
        const sendContentText: ISendContentStrategy = new ContentText(this.whats, message);
        const contentHandlerText = new ContentHandler(sendContentText);
        
        switch (message.body.toLocaleLowerCase()) {
            case "1": { 
                contentHandlerText.handler(messages.searchNewOrder);
                this.chat.setState(new CepState(this.chat, this.whats));
                break;
            }
            case "2": {
                contentHandlerText.handler(messages.thanks);
                chatManagerSingleton.removeChat(this.chat);
                break;
            }
            default: {
                contentHandlerText.handler(messages.invalidOption);
                break;
            }
        
        }
    }

}