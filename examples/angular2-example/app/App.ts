import {Component} from 'angular2/core';
import {Client} from "deepstream-rx-client";

@Component({
    selector: 'app',
    template: `
        <h1>Deepstream API</h1>
    `
})
export class App {
    private _ds;

    constructor(private _dsRxClient: Client) {      
        this._ds = _dsRxClient.getClient();
        this._dsRxClient.login();
    }
    
    ngOnInit() {
        
        console.log("GET LIST -------------------------");        
        let dsList = this._ds.record.getList("dsList");
        let rxList$ = this._dsRxClient.record.getList("webdev/messages");
        //console.log("RXLIST: ", rxList$.subscribe(list => {list.getEntries().subscribe(list => console.log)}));
        dsList.whenReady(() => console.log("dsList: ", dsList));
        rxList$.subscribe((list) => console.log("rxList: ", list.getEntries()));
        
        console.log("Create Record -------------------------");
        let dsRecord = this._ds.record.getRecord("dsTest");
        let rxRecord = this._dsRxClient.record.getRecord("rxTest");
    }
 }  