import {Observable} from "../../node_modules/rxjs/Rx";
import * as deepstream from "../../node_modules/deepstream.io-client-js/dist/deepstream";

import {Record} from "../record/Record";
import {List} from "../record/List";

export class DeepstreamRxClient {
    private _deepstream;
    public record:Record;
    public list:List;

    constructor(path:string, options?:Object) {
        this._deepstream = deepstream(path, options);
        this.record = new Record(this._deepstream);
        this.list = new List(this._deepstream);
    }

    login(authParams:Object) {
        this._deepstream.login(authParams);
    }

    close() {

    }

    getConnectionState() {

    }

    getUid():string {
        return this._deepstream.getUid();
    }

    getClient() {
        return this._deepstream;
    }
}