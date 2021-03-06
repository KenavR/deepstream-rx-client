/// <reference path="models/ConnectionState.ts" />
/// <reference path="models/ClientOptions.ts" />

import {Observable} from "rxjs/Observable";
import * as deepstream from "deepstream.io-client-js/dist/deepstream";

import {IClientOptions} from "./models/ClientOptions";
import {ConnectionState} from "./models/ConnectionState";

import {ClientRecord} from "./record/ClientRecord";
import {ClientEvent} from "./event/ClientEvent";
import {ClientRPC} from "./rpc/ClientRPC";

export interface IClient {
    record:ClientRecord;
    rpc:ClientRPC;
    event:ClientEvent;

    login(authParams?:Object): Observable<any>;
    close():void;
    getConnectionState():ConnectionState;
    getUid():string;
    getClient():any;
}

export class Client implements IClient{

    private _deepstream:any;
    public record:ClientRecord;
    public rpc:ClientRPC;
    public event:ClientEvent;

    constructor(url:string, options?:IClientOptions) {
        this._deepstream = deepstream(url, options);
        this.record = new ClientRecord(this._deepstream);
        this.rpc = new ClientRPC(this._deepstream);
        this.event = new ClientEvent(this._deepstream);
    }

    login(authParams?:Object):Observable<any> {
        return this._deepstream.login(authParams);
    }

    close():void {
        this._deepstream.close();
    }

    getConnectionState():ConnectionState {
        return this._deepstream.getConnectionState();
    }

    getUid():string {
        return this._deepstream.getUid();
    }

    getClient():any {
        return this._deepstream;
    }
}