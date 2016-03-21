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
        let rxList = this._dsRxClient.record.getList("rxList");
        dsList.whenReady(() => console.log("dsList: ", dsList));
        rxList.subscribe((list) => console.log("rxList: ", list));
        
        console.log("Create Record -------------------------");
        let dsRecord = this._ds.record.getRecord("dsTest");
        let rxRecord = this._dsRxClient.record.getRecord("rxTest");
    }
 }  