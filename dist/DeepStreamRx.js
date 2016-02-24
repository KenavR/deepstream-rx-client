System.register(["deepstream.io-client-js", "./Record", "./List"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var deepstream, Record_1, List_1;
    var DeepStreamRx;
    return {
        setters:[
            function (deepstream_1) {
                deepstream = deepstream_1;
            },
            function (Record_1_1) {
                Record_1 = Record_1_1;
            },
            function (List_1_1) {
                List_1 = List_1_1;
            }],
        execute: function() {
            DeepStreamRx = (function () {
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
            exports_1("default", DeepStreamRx);
        }
    }
});
