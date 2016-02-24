System.register(["./Record"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Record_1;
    var List;
    return {
        setters:[
            function (Record_1_1) {
                Record_1 = Record_1_1;
            }],
        execute: function() {
            List = (function () {
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
            exports_1("default", List);
        }
    }
});
