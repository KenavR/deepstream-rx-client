import { Observable } from "../../node_modules/rxjs/Rx";
export declare class Record {
    private _deepstream;
    constructor(deepstream: any);
    getList(name: string): Observable<any>;
    getListWithEntries(name: string): Observable<any>;
    getRecord(name: string): Observable<any>;
    get(path: any): void;
    set(path: any, value: any): void;
    subscribe(): void;
    unsubscribe(): void;
    discard(): void;
    delete(): void;
}
