/// <reference path="def/_all.d.ts"/>
/// <reference path="services/DataSources.ts"/>
/// <reference path="directives/osContainer.ts"/>
/// <reference path="directives/osInput.ts"/>
/// <reference path="directives/osSelect.ts"/>

module osml {
    'use strict';

    var app = angular.module('osml', []);

    app.factory('DataSources', osml.services.DataSources);
    app.directive('osContainer', [osml.directives.osContainer]);
    app.directive('osInput', [osml.directives.osInput]);
    app.directive('osSelect', [osml.directives.osSelect]);

}
