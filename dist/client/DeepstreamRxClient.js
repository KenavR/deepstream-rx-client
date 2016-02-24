(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "../../node_modules/deepstream.io-client-js/dist/deepstream", "../record/Record", "../record/List"], factory);
    }
})(function (require, exports) {
    "use strict";
    var deepstream = require("../../node_modules/deepstream.io-client-js/dist/deepstream");
    var Record_1 = require("../record/Record");
    var List_1 = require("../record/List");
    var DeepstreamRxClient = (function () {
        function DeepstreamRxClient(path, options) {
            this._deepstream = deepstream(path, options);
            this.record = new Record_1.Record(this._deepstream);
            this.list = new List_1.List(this._deepstream);
        }
        DeepstreamRxClient.prototype.login = function (authParams) {
            this._deepstream.login(authParams);
        };
        DeepstreamRxClient.prototype.close = function () {
        };
        DeepstreamRxClient.prototype.getConnectionState = function () {
        };
        DeepstreamRxClient.prototype.getUid = function () {
            return this._deepstream.getUid();
        };
        DeepstreamRxClient.prototype.getClient = function () {
            return this._deepstream;
        };
        return DeepstreamRxClient;
    }());
    exports.DeepstreamRxClient = DeepstreamRxClient;
});
