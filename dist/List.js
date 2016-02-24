"use strict";
var Record_1 = require("./Record");
var List = (function () {
    function List(deepstream) {
        this._deepstream = deepstream;
        this._record = new Record_1.default(deepstream);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = List;
