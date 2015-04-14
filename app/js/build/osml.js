/// <reference path="def/_all.d.ts"/>
var osml;
(function (osml) {
    'use strict';
    var app = angular.module('osml', []);
    //app.factory('DataSources', services.DataSources);
    osml.registerDirective = function (directive) {
        var name = directive[0].toLowerCase() + directive.slice(1);
        app.directive(name, osml.directives[directive].factory());
    };
    osml.registerService = function (service) {
        var name = service[0].toLowerCase() + service.slice(1);
        app.factory(name, osml.services[service]);
    };
})(osml || (osml = {}));
