"use strict";
var deepstream = require("deepstream.io-client-js");
var Record_1 = require("./Record");
var List_1 = require("./List");
var DeepStreamRx = (function () {
    function DeepStreamRx(path, options) {
        this._deepstream = deepstream(path, options);
        this.record = new Record_1.default(this._deepstream);
        this.list = new List_1.default(this._deepstream);
    }
    DeepStreamRx.prototype.login = function (authParams) {
        this._deepstream.login(authParams);
    };
    DeepStreamRx.prototype.close = function () {
    };
    DeepStreamRx.prototype.getConnectionState = function () {
    };
    DeepStreamRx.prototype.getUid = function () {
        return this._deepstream.getUid();
    };
    DeepStreamRx.prototype.getClient = function () {
        return this._deepstream;
    };
    return DeepStreamRx;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeepStreamRx;
