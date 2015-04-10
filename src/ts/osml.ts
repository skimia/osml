/// <reference path="lib/jquery.d.ts"/>
/// <reference path="lib/angular.d.ts"/>

/// <reference path="services/DataSources.ts"/>

'use strict';

module osml {
    var app = angular.module('osml', []);

    app.factory('DataSources', services.DataSources);


}
