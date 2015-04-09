/// <reference path="services/DataSources.ts"/>
/// <reference path="directives/osInput.ts"/>

module OSML{
    'use strict';

    var osml = angular.module('OSML', [])
        .service('DataSourceService', Services.DataSources)
        .directive('osInput', Directives.osInput.factory());



}

