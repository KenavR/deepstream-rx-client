import {Observable} from "rxjs/Observable";
import * as deepstream from "deepstream.io-client-js/dist/deepstream";
import {Record} from "./record";


export class List {
    private _deepstream;
    private _record:Record;

    constructor(deepstream) {
        this._deepstream = deepstream;
        this._record = new Record(deepstream);
    }


    isEmpty() {

    }

    getEntries() {

    }

    setEntries(entries:Array<any>) {

    }

    addEntry(entry:string, index?:number) {

    }

    discard() {

    }

    delete() {

    }
}