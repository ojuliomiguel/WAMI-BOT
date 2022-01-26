import { DataContent } from "../Templates/types/DataContent";
import { ISendContentStrategy } from "./types/ISendContentStategy";

export class ContentHandler {

    constructor(
        private sendContent: ISendContentStrategy,

    ) {
        this.setSender(sendContent);
    }

    public handler(data: DataContent) {
        this.sendContent.send(data as DataContent);
    }

    private setSender(sendContent: ISendContentStrategy) {
        this.sendContent = sendContent;
    }
}