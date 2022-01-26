import { create, Whatsapp } from './Shared/ChatBotLib';
import Chat from './Chat';
import { chatManagerSingleton } from './ChatManager';
import { whatsClientConfig } from './Config/whatsapp.config';
import { Message } from 'venom-bot';

function main(whats: Whatsapp) {
    whats.onMessage(async (message: Message) => {
        if (!message.body || message.isGroupMsg) return;

        if (!chatManagerSingleton.contains(message.from)) {
            chatManagerSingleton.addChat(new Chat(whats, message.from));
            chatManagerSingleton
                .getChat(message.from)
                .getState() // getting current state
                .handleOptions(message);

            return;
        }

        chatManagerSingleton
            .getChat(message.from)
            .getState()
            .handleOptions(message);
    })
}

//starting the service
create(whatsClientConfig)
    .then(main)
    .catch((err: any) => console.log('An error occurred on starting bot: ', err));


