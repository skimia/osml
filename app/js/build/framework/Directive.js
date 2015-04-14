/// <reference path="../osml.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var osml;
(function (osml) {
    var framework;
    (function (framework) {
        'use strict';
        var Directive = (function (_super) {
            __extends(Directive, _super);
            function Directive() {
                _super.call(this);
                this.$inject = [];
            }
            Directive.prototype.link = function ($scope, element, attrs) {
            };
            Directive.factory = function () {
                var _this = this;
                return function () {
                    return new osml.directives[_this.name]();
                };
            };
            return Directive;
        })(framework.FunctionClass);
        framework.Directive = Directive;
    })(framework = osml.framework || (osml.framework = {}));
})(osml || (osml = {}));
