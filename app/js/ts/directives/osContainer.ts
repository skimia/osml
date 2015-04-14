// require '../osml.js'
// require '../framework/DataSourceDirective.js'

/// <reference path="../osml.ts"/>

module osml.directives{
    'use strict';

    export class OsContainer extends framework.DataSourceDirective{

        constructor(datasource:services.DataSources) {
            super(datasource);
        }

        public link($scope:ng.IScope, element:JQuery, attrs:any):void {
            element.addClass('os-container');
        }

    }

    registerDirective('OsContainer');
}