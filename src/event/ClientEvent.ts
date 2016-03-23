import {Observable, Subject} from "rxjs/Rx";

export interface IClientEvent {
    on(event:string):Observable<any>;
    emit(event:string, data?:any):void;
}

export class ClientEvent implements IClientEvent{

    private _deepstream:any;

    constructor(deepstream:any) {
        this._deepstream = deepstream;
    }

    on(event:string):Observable<any> {
        let subject$ = new Subject();

        let callback = (error:any, response:any) => {
            if(error) subject$.error(error);
            subject$.next(response);
            subject$.complete();
        };

        this._deepstream.event.subscribe(event, callback);

        return subject$;
    }

    emit(event:string, data?:any):void {
        this._deepstream.event.emit(event, data);
    }


}