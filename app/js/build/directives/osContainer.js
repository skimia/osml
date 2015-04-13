var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var osml;
(function (osml) {
    var directives;
    (function (directives) {
        'use strict';
        var OsContainer = (function (_super) {
            __extends(OsContainer, _super);
            function OsContainer() {
                _super.call(this);
            }
            OsContainer.prototype.link = function ($scope, element, attrs) {
                element.addClass('os-container');
            };
            return OsContainer;
        })(osml.framework.Directive);
        directives.OsContainer = OsContainer;
    })(directives = osml.directives || (osml.directives = {}));
})(osml || (osml = {}));
