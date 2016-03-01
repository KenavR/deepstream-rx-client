import {List} from "./List";
import {Record} from "./Record";
import {Observable} from "rxjs/Observable";

interface IClientRecord {
    getRecord(name:string):Record;
    getList(name:string):Observable<List>;
    getListWithEntries(name:string):Observable<List>;
    getAnonymousRecord():Record; //TODO Implement Anonymous Record
    listen(pattern:string):Observable<any>;
    unlisten(pattern:string):void;
}

export class ClientRecord implements IClientRecord {

    private _deepstream:any;

    constructor(deepstream:any) {
        this._deepstream = deepstream;
    }

    getRecord(name:string):Record {
        return undefined;
    }

    getList(name:string):Observable<List> {
        let dsList = this._deepstream.record.getList(name);
        return Observable.fromEvent(dsList, "ready");
    }

    getListWithEntries(name:string):Observable<List> {
        return this.getList(name)
            .flatMap(id => this.getRecord(id))
            .map(record => record.get());

    }

    getAnonymousRecord():Record {
        return undefined;
    }

    listen(pattern:string):Observable<any> {
        return undefined;
    }

    unlisten(pattern:string):void {
    }

}