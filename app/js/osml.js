var osml;
(function (osml) {
    (function (services) {
        var DataSources = (function () {
            function DataSources() {
                this.datasources = {
                    test: 'test'
                };
            }
            DataSources.prototype.add = function (name, datasource) {
            };

            DataSources.prototype.delete = function (name) {
            };

            DataSources.prototype.get = function (name) {
                return this.datasources[name];
            };
            return DataSources;
        })();
        services.DataSources = DataSources;
    })(osml.services || (osml.services = {}));
    var services = osml.services;
})(osml || (osml = {}));

var osml;
(function (osml) {
    (function (directives) {
        'use strict';

        function osContainer() {
            return {
                scope: {
                    direction: '@'
                },
                link: function ($scope, element, attributes) {
                    element.addClass('os-container');

                    switch ($scope.direction) {
                        case 'row':
                            element.addClass('row');
                            break;
                        case 'row-reverse':
                            element.addClass('row-reverse');
                            break;
                        case 'column':
                            element.addClass('column');
                            break;
                        case 'column-reverse':
                            element.addClass('column-reverse');
                            break;
                        default:
                            console.error('os-container: invalid direction');
                            break;
                    }
                }
            };
        }
        directives.osContainer = osContainer;
    })(osml.directives || (osml.directives = {}));
    var directives = osml.directives;
})(osml || (osml = {}));

var osml;
(function (osml) {
    (function (directives) {
        'use strict';

        function osInput() {
            return {
                link: function ($scope, element, attributes) {
                    element.addClass('os-input');
                }
            };
        }
        directives.osInput = osInput;
    })(osml.directives || (osml.directives = {}));
    var directives = osml.directives;
})(osml || (osml = {}));

var osml;
(function (osml) {
    (function (directives) {
        'use strict';

        function osSelect($timer) {
            return {
                scope: true,
                link: function ($scope, element, attributes) {
                    element.addClass('os-select');
                    $(element).children('select').material_select();
                }
            };
        }
        directives.osSelect = osSelect;
    })(osml.directives || (osml.directives = {}));
    var directives = osml.directives;
})(osml || (osml = {}));

/// <reference path="def/_all.d.ts"/>
/// <reference path="services/DataSources.ts"/>
/// <reference path="directives/osContainer.ts"/>
/// <reference path="directives/osInput.ts"/>
/// <reference path="directives/osSelect.ts"/>
var osml;
(function (osml) {
    'use strict';

    var app = angular.module('osml', []);

    app.factory('DataSources', osml.services.DataSources);
    app.directive('osContainer', [osml.directives.osContainer]);
    app.directive('osInput', [osml.directives.osInput]);
    app.directive('osSelect', [osml.directives.osSelect]);
})(osml || (osml = {}));
