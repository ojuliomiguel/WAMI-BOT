import { DataContent } from "../../Templates/types/DataContent";

export interface ISendContentStrategy {
    send(data: DataContent): Promise<void>;
}