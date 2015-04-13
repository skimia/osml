// require './framework/*'
// require './services/*'
// require './directives/*'
var osml;
(function (osml) {
    'use strict';
    var app = angular.module('osml', []);
    for (var directive in osml.directives) {
        var name = directive[0].toLowerCase() + directive.slice(1);
        app.directive(name, osml.directives[directive].factory());
    }
    app.factory('DataSources', osml.services.DataSources);
})(osml || (osml = {}));
