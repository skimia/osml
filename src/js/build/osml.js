/// <reference path="lib/jquery.d.ts"/>
/// <reference path="lib/angular.d.ts"/>
/// <reference path="services/DataSources.ts"/>
'use strict';
var osml;
(function (osml) {
    var app = angular.module('osml', []);
    app.factory('DataSources', osml.services.DataSources);
})(osml || (osml = {}));
