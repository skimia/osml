// require './Directive.js'
// require '../services/DataSources.js'
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
        var DataSourceDirective = (function (_super) {
            __extends(DataSourceDirective, _super);
            function DataSourceDirective(datasource) {
                _super.call(this);
                this.datasource = datasource;
            }
            DataSourceDirective.factory = function () {
                var _this = this;
                var dir = function (datasource) {
                    return new osml.directives[_this.name](datasource);
                };
                dir['$inject'] = ['DataSource'];
                return dir;
            };
            return DataSourceDirective;
        })(framework.Directive);
        framework.DataSourceDirective = DataSourceDirective;
    })(framework = osml.framework || (osml.framework = {}));
})(osml || (osml = {}));
