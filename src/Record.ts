import {Observable} from "rxjs/Rx";

export default class Record {
    private _deepstream;

    constructor(deepstream) {
        this._deepstream = deepstream;
    }

    getList(name:string):Observable<any> {
        let dsList = this._deepstream.record.getList(name);
        return Observable.fromEvent(dsList, "ready");
    }

    getListWithEntries(name:string):Observable<any> {
        return this.getList(name)
            .flatMap(id => this.getRecord(id))
            .map(record => record.get());

    }

    getRecord(name:string):Observable<any> {
        return Observable.from(this._deepstream.getRecord(name));
    }

    get(path) {

    }

    set(path, value) {

    }

    subscribe() {

    }

    unsubscribe() {

    }

    discard() {

    }

    delete() {

    }
}