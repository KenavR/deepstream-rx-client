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

    describe("getListWithEntries", () => {
        let list$;
        before("initialize observable", () => {
           list$ = client.record.getListWithEntries("test");
        });

        it("should return an Observable", () => {
            expect(list$).to.be.not.null;
            expect(list$).to.be.instanceOf(Observable);
        });

        it("should return an array of entities", (done) => {
            console.log("data:: ");
            list$.subscribe(
                data => {
                    console.log("data:: ", data);
                    expect(data).to.be.not.null.and.to.be.a("Array");
                    expect(data).to.be.not.empty;
                    expect(data[0]).to.have.property("message");
                    done();
                }
            )
        });
    });
});