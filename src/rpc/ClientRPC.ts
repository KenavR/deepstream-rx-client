import {Observable,Subject} from "rxjs/Rx";

export interface IClientRPC {
    provide(name:string):Observable<any>;
    unprovide(name:string):void;
    make(name:string, data:any):Observable<any>;
}

export class ClientRPC implements IClientRPC {

    private _deepstream:any;

    constructor(deepstream:any) {
        this._deepstream = deepstream;
    }

    provide(name:string):Observable<any> {
        return this._deepstream.provide(name);
    }

    unprovide(name:string):void {

    }

    make(name:string, data:any):Observable<any> {
        let subject$ = new Subject();

        let callback = (error:any, response:any) => {
            if(error) subject$.error(error);
            subject$.next(response);
            subject$.complete();
        };

        this._deepstream.rpc.make(name, data, callback);

        return subject$;
    }
}