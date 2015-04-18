var osml;
(function (osml) {
    (function (framework) {
        'use strict';

        var Directive = (function () {
            function Directive() {
                this.$inject = [];
                _super.call(this);
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
    })(osml.framework || (osml.framework = {}));
    var framework = osml.framework;
})(osml || (osml = {}));
