/// <reference path="services/DataSources.ts"/>
/// <reference path="directives/osInput.ts"/>
var OSML;
(function (OSML) {
    'use strict';
    var osml = angular.module('OSML', []).service('DataSourceService', OSML.Services.DataSources).directive('osInput', OSML.Directives.osInput.factory());
})(OSML || (OSML = {}));
