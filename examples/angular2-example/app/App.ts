import {Component} from 'angular2/core';
import {Client} from "deepstream-rx-client";
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'app',
    styles: [`
        .col { width: 48%; display: inline-block; float: left; padding: 1%;}
        .col ul { padding: 0 15px }
        .dslist {background-color: red}
        .rxlist {background-color: blue}
    `],
    template: `
        <h1>Deepstream API</h1>
        <div class="col dslist">
            <h2>DS List</h2>
            <ul>
                <li *ngFor="#id of dslist | async">
                    {{id}}
                </li>
            </ul>
        </div>
         <div class="col rxlist">
            <h2>RX List</h2>
            <ul>
                <li *ngFor="#id of rxlist | async">
                    {{id}}
                </li>
            </ul>
        </div>

    `
})
export class App {
    private _ds;
    public dslist:Promise<Array>;
    public rxlist;

    constructor(private _dsRxClient:Client) {
        this._ds = _dsRxClient.getClient();
        this._dsRxClient.login();
        this.dslist = [];
    }

    ngOnInit() {
        let rxList$ = this._dsRxClient.record.getList("webdev/messages");
        dsList = this._ds.record.getList("webdev/messages");

        this.dslist = new Promise((resolve, reject) => {
            dsList.whenReady(() => {
                let list = [];
                dsList.getEntries().forEach(id => {
                   list.push(id);
                });
                resolve(list);
            });
        });


        this.rxlist = rxList$.getEntries();

        /*console.log("Create Record -------------------------");
        let dsRecord = this._ds.record.getRecord("dsTest");
        let rxRecord = this._dsRxClient.record.getRecord("rxTest");*/
    }

    ngAfterContentInit() {

    }
}