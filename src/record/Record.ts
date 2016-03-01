import {Observable} from "rxjs/Observable";

interface IRecord {
    name:string;
    usages:number;
    isReady:boolean;
    isDestroyed:boolean;

    get(path?:string):Observable<any>;
    set(path:string, value:any):void;
    //TODO subscribe/unsubscribe?
    discard():void;
    delete():void;
}

export class Record implements IRecord{

    private _deepstream:any;

    name:string;
    usages:number;
    isReady:boolean;
    isDestroyed:boolean;

    constructor(deepstream:any) {
        this._deepstream = deepstream;
    }

    get(path?:string):Observable<any> {
        return undefined;
    }

    set(path:string, value:any):void {
    }

    discard():void {
    }

    delete():void {
    }


}