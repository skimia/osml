/// <reference path="vendors/angular.d.ts"/>


module osml {
    'use strict';

    export var app = angular.module('osml', []);

    export function registerDirective(className:string, factory:Function = null, services = []) {
        var directive = className[0].toLowerCase() + className.slice(1);

        if(factory) services.push(factory);
        else services.push(() => new osml.directives[className]());

        app.directive(directive, services);
    }

    export function registerController (className:string, services = []) {
        services.push(osml.controllers[className]);
        app.controller(className, services);
    }

    export function registerService (className:string, factory:Function = null, services = []) {
        var service = className[0].toLowerCase() + className.slice(1);

        if(factory) services.push(factory);
        else services.push(() => new osml.services[className]());

        app.factory(service, services);
    }

    /*export function registerFilter (className: string, services = []) {
        var filter = className.toLowerCase();
        services.push(() => (new filters[className]()).filter);
        app.filter(filter, services);
    }*/

}
