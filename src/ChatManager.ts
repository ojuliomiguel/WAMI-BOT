import Chat from "./Chat";

class ChatManager {

    private chats: Array<Chat> = [];

    public addChat(chat: Chat) {
        this.chats.push(chat);
    }

    public contains(chatID: string): boolean {
        if (this.chats.length === 0) return false;

        if (this.chats.find(chat => chat.getID() === chatID)) return true;

        return false;
        
    }

    public getChat(chatID: string): Chat {
        
        return this.chats.find(chat => chat.getID() === chatID) as Chat;

    }

    public removeChat(chat: Chat) {
        let index = this.chats.indexOf(chat);
        this.chats.splice(index, 1);
        
    }

}

const chatManagerSingleton = new ChatManager;

export {chatManagerSingleton};