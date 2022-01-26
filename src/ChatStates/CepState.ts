import { Whatsapp, Message } from '../Shared/ChatBotLib';
import Chat from "../Chat";
import IChatState from "./IChatState";
import { CepService } from '../Services/Cep.Service'
import { ContentHandler } from '../Services/ContentHandler';
import { ContentText } from '../Services/ContentText';
import { messages } from '../Templates/Messages';
import { isNumeric } from '../Helpers/helpers.isNumeric';
import { TrackerOptionsState } from './CepOptionsState';
import { foundCepMessage } from '../Templates/FounCep';


export class CepState implements IChatState {

    private _cepService: CepService;

    constructor(readonly chat: Chat, private readonly whats: Whatsapp) {
        this._cepService = new CepService();
    }

    async handleOptions(message: Message): Promise<void> {
        const contentHandler = new ContentHandler(
            new ContentText(this.whats, message)
        );

        if (isNumeric(message.body)) {
            const orderStatus: any = await this._cepService.CepStatus(Number(message.body));

            if (typeof orderStatus === 'string') {
                await this.chat.setState(new TrackerOptionsState(this.chat, this.whats)); 
                return contentHandler.handler(messages.notFoundOptions);    
            }

            const messageToSend = foundCepMessage(orderStatus);
            
            contentHandler.handler({ textContent: messageToSend + `\n\n ${messages.Options.textContent}` });
            return await this.chat.setState(new TrackerOptionsState(this.chat, this.whats)); 
        }

        await this.chat.setState(new TrackerOptionsState(this.chat, this.whats)); 
        return contentHandler.handler(messages.notFoundOptions);
    }

}
