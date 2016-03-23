/// <reference path="../typings/main/ambient/mocha/index.d.ts" />
/// <reference path="../typings/main/ambient/chai/index.d.ts" />

import {Client} from "../dist/deepstream-rx-client";
import {expect} from "chai";

describe("deepstream rx client", () => {
    var _client;

    it("should return a client object", () => {
        _client = new Client("localhost:6020");
        expect(_client.record).to.be.not.null;
        expect(_client.record).to.be.instanceOf(Record);
        expect(_client.list).to.be.not.null;
        expect(_client.list).to.be.instanceOf(List);
    });

    /*it("should work with path after port", () => {
        _client = new DeepStreamRx("localhost:8080/ds");
        expect(_client.record).to.be.not.null;
        expect(_client.record).to.be.instanceOf(Record);
        expect(_client.list).to.be.not.null;
        expect(_client.list).to.be.instanceOf(List);
    });*/
});