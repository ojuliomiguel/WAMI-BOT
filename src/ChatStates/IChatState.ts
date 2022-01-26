import { Message } from '../Shared/ChatBotLib';


export default interface IChatState {
    handleOptions(message: Message): void;
}