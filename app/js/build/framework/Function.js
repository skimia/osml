/// <reference path="../osml.ts"/>
var osml;
(function (osml) {
    var framework;
    (function (framework) {
        'use strict';
        var FunctionClass = (function () {
            function FunctionClass() {
            }
            FunctionClass.prototype.apply = function (thisArg, argArray) {
                return undefined;
            };
            FunctionClass.prototype.call = function (thisArg, argArray) {
                return undefined;
            };
            FunctionClass.prototype.bind = function (thisArg, argArray) {
                return undefined;
            };
            FunctionClass.prototype.toMethod = function (newHome) {
                return undefined;
            };
            return FunctionClass;
        })();
        framework.FunctionClass = FunctionClass;
    })(framework = osml.framework || (osml.framework = {}));
})(osml || (osml = {}));
