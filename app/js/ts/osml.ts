/// <reference path="def/_all.d.ts"/>

module osml {
    'use strict';

    var app = angular.module('osml', []);

    //app.factory('DataSources', services.DataSources);

    export var registerDirective = (directive:string) => {
        var name = directive[0].toLowerCase() + directive.slice(1);
        app.directive(name, directives[directive].factory());
    }

    export var registerService = (service:string) => {
        var name = service[0].toLowerCase() + service.slice(1);
        app.factory(name, services[service]);
    }

}
