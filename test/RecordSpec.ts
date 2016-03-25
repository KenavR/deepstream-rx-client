/// <reference path="../typings/main/ambient/mocha/index.d.ts" />
/// <reference path="../typings/main/ambient/chai/index.d.ts" />

import {Client} from "../dist/deepstream-rx-client";
import {Observable} from "rxjs/Rx";
import {expect} from "chai";

describe("Deepstream List", () => {

    let client:Client;

    before("initialize DeepstreamRxClient", () => {
        client = new Client("localhost:6020");
        client.login();
    });

    describe("getList", () => {
        it("should return an Observable", () => {
            let list$ = client.record.getList("test");

            expect(list$).to.be.not.null;
            expect(list$).to.be.instanceOf(Observable);

            list$.subscribe(
                data => {
                    expect(data).to.be.not.null.and.instanceOf(Array);
                }
            );
        });
    });

});