/// <reference path="../osml.ts"/>
/// <reference path="../framework/DataSourceDirective.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var osml;
(function (osml) {
    (function (directives) {
        'use strict';

        var OsContainer = (function (_super) {
            __extends(OsContainer, _super);
            function OsContainer(datasource) {
                _super.call(this, datasource);
            }
            OsContainer.prototype.link = function ($scope, element, attrs) {
                element.addClass('os-container');
            };
            return OsContainer;
        })(osml.framework.DataSourceDirective);
        directives.OsContainer = OsContainer;

        registerDirective('OsContainer');
    })(osml.directives || (osml.directives = {}));
    var directives = osml.directives;
})(osml || (osml = {}));
