import {List} from "./List";
import {Record} from "./Record";
import {Observable, Subject } from "rxjs/Rx";

export interface IClientRecord {
    getRecord(name:string):Observable<Record>;
    getList(name:string):Observable<List>;
    //getAnonymousRecord():Record; //TODO Implement Anonymous Record
    listen(pattern:string):Observable<any>;
    unlisten(pattern:string):void;
}

export class ClientRecord implements IClientRecord {

    private _deepstream:any;
    /* track lists to bypass bug in the ds client lib -> https://github.com/deepstreamIO/deepstream.io-client-js/issues/85*/
    private _lists:any;

    constructor(deepstream:any) {
        this._deepstream = deepstream;
        this._lists = {};
    }

    getRecord(name:string):Observable<Record> {
        let dsRecord = this._deepstream.record.getRecord(name);
        return Observable.fromEvent(dsRecord, "ready").map(r => dsRecord);
    }

    getList(name:string):Observable<List> {
        let obs$: Observable<List>;

        if (this._lists.hasOwnProperty(name)) {
            obs$ = Observable.of(this._lists[name]);
        } else {
            let dsList = this._deepstream.record.getList(name);
            this._lists[name] = new List(this._deepstream, dsList);

            obs$ = Observable.fromEvent(dsList, "ready")
                .map(r => this._lists[name]);
        }

        (obs$ as any).getEntries = () => {
            return obs$.flatMap(list => {
                return list.getEntries();
            });
        };
        return obs$;
    }

    listen(pattern:string):Observable<any> {
        let subject$ = new Subject();

        let callback = (error:any, response:any) => {
            if(error) subject$.error(error);
            subject$.next(response);
            subject$.complete();
        };

        this._deepstream.record.listen(pattern, callback);

        return subject$;
    }

    unlisten(pattern:string):void {
        this._deepstream.record.unlisten(pattern);
    }

}