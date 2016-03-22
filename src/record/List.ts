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

export class List extends Observable<IList> implements IList{

    private _deepstream:any;
    private _dsList:any;

    name:string;
    usages:number;
    isReady:boolean;

    constructor(deepstream: any, dsList: any) {
        super();
        this._deepstream = deepstream;
        this._dsList = dsList;
    }

    isEmpty():boolean {
        return undefined;
    }

    getEntries(): Observable<Array<any>> {
        //let entries = this._dsList.getEntries();
        console.log("GET ENTRIES OF LIST: ", this._dsList);
        let entries = this._dsList.getEntries();
        return this.map(list => Observable.fromEvent(entries, "ready")).map(r=> entries);
    }
    
    on(event: string) {
        return Observable.fromEvent(this._dsList, event);
    }

    setEntries(entries:Array<any>):void {
    }

    addEntry(entry: string, index?: number): void {
        this._dsList.addEntry(entry, index);
    }

    removeEntry(entry:string, index?:number):void {
    }

    discard():void {
    }

    delete():void {
    }


}