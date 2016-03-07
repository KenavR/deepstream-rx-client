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

    getRecord(name?:string):Record {
        return this._deepstream.record.getRecord(name);
    }

    getList(name:string):Observable<List> {
        let dsList = this._deepstream.record.getList(name);
        return Observable.fromEvent(dsList, "ready")
                .map(r => dsList);
    }

    getListWithEntries(name:string):Observable<List> {
        return this.getList(name)
            .map(list => list.getEntries())
            .flatMap(list => Observable.from(list.map(id => new Record(id)))
            .flatMap(list => list.map(record => Observable.fromEvent(record.get(), "ready"))));
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