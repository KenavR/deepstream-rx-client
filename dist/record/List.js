(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./Record"], factory);
    }
})(function (require, exports) {
    "use strict";
    var Record_1 = require("./Record");
    var List = (function () {
        function List(deepstream) {
            this._deepstream = deepstream;
            this._record = new Record_1.Record(deepstream);
        }
        List.prototype.isEmpty = function () {
        };
        List.prototype.getEntries = function () {
        };
        List.prototype.setEntries = function (entries) {
        };
        List.prototype.addEntry = function (entry, index) {
        };
        List.prototype.discard = function () {
        };
        List.prototype.delete = function () {
        };
        return List;
    }());
    exports.List = List;
});
