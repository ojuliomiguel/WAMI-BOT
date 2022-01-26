import { Whatsapp } from './Shared/ChatBotLib';
import PrincipalMenuState from "./ChatStates/PrincipalMenuState";
import IChatState from "./ChatStates/IChatState";

export default class Chat {
    
    private principalMenuSate: IChatState;
    private currentState!: IChatState;
    
    constructor( private readonly whats: Whatsapp, private id: string) {
        this.principalMenuSate = new PrincipalMenuState(this, whats);
        this.whats = whats; 
        this.id = id;
        
        this.setState(this.principalMenuSate);
    }

    public setState(state: IChatState) {
        this.currentState = state;
    }

    public getState(): IChatState {
        return this.currentState;
    }

    public getID(): string {
        return this.id;
    }

}