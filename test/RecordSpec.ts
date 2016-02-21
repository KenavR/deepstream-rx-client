/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

import DeepStreamRx from "../src/DeepStreamRx";
import {Observable} from "rxjs/Observable";
import {expect} from "chai";

describe("Deepstream List", () => {

    let client;

    before("initialize DeepStreamRx client", () => {
        client = new DeepStreamRx("localhost:8080");
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