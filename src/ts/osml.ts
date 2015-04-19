/// <reference path="vendors/angular.d.ts"/>

module osml {
    'use strict';

    export var app = angular.module('osml', []);

    export function registerDirective(className: string, services = []) {
        var directive = className[0].toLowerCase() + className.slice(1);
        services.push(() => new directives[className]());
        app.directive(directive, services);
    }

    export function registerController (className: string, services = []) {
        services.push(controllers[className]);
        app.controller(className, services);
    }

    export function registerService (className: string, services = []) {
        var service = className[0].toLowerCase() + className.slice(1);
        services.push(() => new services[className]());
        app.factory(service, services);
    }

    /*export function registerFilter (className: string, services = []) {
        var filter = className.toLowerCase();
        services.push(() => (new filters[className]()).filter);
        app.filter(filter, services);
    }*/

}
