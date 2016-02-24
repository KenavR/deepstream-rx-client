(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./client/DeepstreamRxClient", "./record/Record", "./record/List"], factory);
    }
})(function (require, exports) {
    "use strict";
    var DeepstreamRxClient_1 = require("./client/DeepstreamRxClient");
    exports.DeepstreamRxClient = DeepstreamRxClient_1.DeepstreamRxClient;
    var Record_1 = require("./record/Record");
    exports.Record = Record_1.Record;
    var List_1 = require("./record/List");
    exports.List = List_1.List;
});
