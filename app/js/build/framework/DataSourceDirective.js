/// <reference path="Directive.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var osml;
(function (osml) {
    (function (framework) {
        'use strict';

        var DataSourceDirective = (function (_super) {
            __extends(DataSourceDirective, _super);
            function DataSourceDirective(datasource) {
                _super.call(this);
                this.datasource = datasource;
            }
            DataSourceDirective.factory = function () {
                var _this = this;
                var dir = function (datasource) {
                    return new directives[_this.name](datasource);
                };

                dir['$inject'] = ['DataSource'];
                return dir;
            };
            return DataSourceDirective;
        })(osml.framework.Directive);
        framework.DataSourceDirective = DataSourceDirective;
    })(osml.framework || (osml.framework = {}));
    var framework = osml.framework;
})(osml || (osml = {}));
