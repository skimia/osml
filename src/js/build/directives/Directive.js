/// <reference path="../lib/jquery.d.ts"/>
/// <reference path="../lib/angular.d.ts"/>
var OSML;
(function (OSML) {
    var Directives;
    (function (Directives) {
        var Directive = (function () {
            function Directive() {
            }
            Directive.prototype.factory = function () {
                return function () {
                    return new Directive();
                };
            };
            return Directive;
        })();
        Directives.Directive = Directive;
    })(Directives = OSML.Directives || (OSML.Directives = {}));
})(OSML || (OSML = {}));
