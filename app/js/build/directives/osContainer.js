// require '../osml.js'
// require '../framework/DataSourceDirective.js'
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../osml.ts"/>
var osml;
(function (osml) {
    var directives;
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
        osml.registerDirective('OsContainer');
    })(directives = osml.directives || (osml.directives = {}));
})(osml || (osml = {}));
