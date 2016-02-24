import { Record } from "../record/Record";
import { List } from "../record/List";
export declare class DeepstreamRxClient {
    private _deepstream;
    record: Record;
    list: List;
    constructor(path: string, options?: Object);
    login(authParams: Object): void;
    close(): void;
    getConnectionState(): void;
    getUid(): string;
    getClient(): any;
}
