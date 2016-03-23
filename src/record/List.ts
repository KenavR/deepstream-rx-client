import {Observable} from "rxjs/Rx";
import * as deepstream from "deepstream.io-client-js/dist/deepstream";
import {Record} from "./Record";

export interface IList {
    name:string;
    usages:number;
    isReady:boolean;

    isEmpty():boolean;
    getEntries(): Observable<any>;
    on(event:string): Observable<any>;
    setEntries(entries: Array<any>):void;
    addEntry(entry:string, index?:number):void;
    removeEntry(entry:string, index?:number):void;
    //TODO subscribe/unsubscribe
    discard():void;
    delete():void;
}

export class List implements IList{

    private _deepstream:any;
    private _dsList:any;

    name:string;
    usages:number;
    isReady:boolean;

    constructor(deepstream: any, dsList: any) {
        this._deepstream = deepstream;
        this._dsList = dsList;
    }

    isEmpty():boolean {
        return this._dsList.isEmpty();
    }

    getEntries(): Observable<Array<any>> {
        return Observable.of(this._dsList.getEntries());
    }
    
    on(event: string) {
        return Observable.fromEvent(this._dsList, event);
    }

    setEntries(entries:Array<any>):void {
        this._dsList.setEntries(entries);
    }

    addEntry(entry: string, index?: number): void {
        this._dsList.addEntry(entry, index);
    }

    removeEntry(entry:string, index?:number):void {
        this._dsList.removeEntry(entry, index);
    }

    discard():void {
    }

    delete():void {
    }


}