(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "../../node_modules/rxjs/Rx"], factory);
    }
})(function (require, exports) {
    "use strict";
    var Rx_1 = require("../../node_modules/rxjs/Rx");
    var Record = (function () {
        function Record(deepstream) {
            this._deepstream = deepstream;
        }
        Record.prototype.getList = function (name) {
            var dsList = this._deepstream.record.getList(name);
            return Rx_1.Observable.fromEvent(dsList, "ready");
        };
        Record.prototype.getListWithEntries = function (name) {
            var _this = this;
            return this.getList(name)
                .flatMap(function (id) { return _this.getRecord(id); })
                .map(function (record) { return record.get(); });
        };
        Record.prototype.getRecord = function (name) {
            return Rx_1.Observable.from(this._deepstream.getRecord(name));
        };
        Record.prototype.get = function (path) {
        };
        Record.prototype.set = function (path, value) {
        };
        Record.prototype.subscribe = function () {
        };
        Record.prototype.unsubscribe = function () {
        };
        Record.prototype.discard = function () {
        };
        Record.prototype.delete = function () {
        };
        return Record;
    }());
    exports.Record = Record;
});
