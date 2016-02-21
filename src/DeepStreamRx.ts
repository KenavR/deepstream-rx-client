import {Observable} from "rxjs/Observable";
import * as deepstream from "deepstream.io-client-js";

import Record from "./Record";
import List from "./List";

export default class DeepStreamRx {
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