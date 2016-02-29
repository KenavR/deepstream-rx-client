/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

import {Record} from "record.ts";
import {List} from "list.ts";
import {DeepStreamRx} from "../src/deepstream-rx-client";
import {expect} from "chai";

describe("deepstream rx client", () => {
    var _client;

    it("should return a client object", () => {
        _client = new DeepStreamRx("localhost:8080");
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