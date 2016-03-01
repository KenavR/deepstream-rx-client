import {Observable} from "rxjs/Observable";
import * as deepstream from "deepstream.io-client-js/dist/deepstream";
import {Record} from "./record";

interface IList {
    name:string;
    usages:number;
    isReady:boolean;

    isEmpty():boolean;
    getEntries():Observable<any>;
    setEntries(entries: Array<any>):void;
    addEntry(entry:string, index?:number):void;
    removeEntry(entry:string, index?:number):void;
    //TODO subscribe/unsubscribe
    discard():void;
    delete():void;
}

export class List implements IList{

    private _deepstream:any;
    private _record:Record;

    name:string;
    usages:number;
    isReady:boolean;

    constructor(deepstream:any) {
        this._deepstream = deepstream;
        this._record = new Record(deepstream);
    }

    isEmpty():boolean {
        return undefined;
    }

    getEntries():Observable<any> {
        return undefined;
    }

    setEntries(entries:Array<any>):void {
    }

    addEntry(entry:string, index?:number):void {
    }

    removeEntry(entry:string, index?:number):void {
    }

    discard():void {
    }

    delete():void {
    }


}