var osml;
(function (osml) {
    var framework;
    (function (framework) {
        'use strict';
        var Directive = (function () {
            function Directive() {
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
        })();
        framework.Directive = Directive;
    })(framework = osml.framework || (osml.framework = {}));
})(osml || (osml = {}));
