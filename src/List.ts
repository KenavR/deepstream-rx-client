import {Observable} from "rxjs/Rx";
import Record from "./Record";

export default class List {
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