var osml;
(function (osml) {
    'use strict';
    osml.app = angular.module('osml', []);
    function registerDirective(className, services) {
        if (services === void 0) { services = []; }
        var directive = className[0].toLowerCase() + className.slice(1);
        services.push(function () { return new osml.directives[className](); });
        osml.app.directive(directive, services);
    }
    osml.registerDirective = registerDirective;
    function registerController(className, services) {
        if (services === void 0) { services = []; }
        services.push(osml.controllers[className]);
        osml.app.controller(className, services);
    }
    osml.registerController = registerController;
    function registerService(className, services) {
        if (services === void 0) { services = []; }
        var service = className[0].toLowerCase() + className.slice(1);
        services.push(function () { return new services[className](); });
        osml.app.factory(service, services);
    }
    osml.registerService = registerService;
})(osml || (osml = {}));
var osml;
(function (osml) {
    var controllers;
    (function (controllers) {
        var MainController = (function () {
            function MainController($scope) {
                this.$scope = $scope;
                $scope.message = 'Hello';
            }
            return MainController;
        })();
        controllers.MainController = MainController;
    })(controllers = osml.controllers || (osml.controllers = {}));
})(osml || (osml = {}));
osml.registerController('MainController', ['$scope']);
var osml;
(function (osml) {
    var directives;
    (function (directives) {
        'use strict';
        var osContainer = (function () {
            function osContainer() {
                this.scope = {
                    direction: '@'
                };
            }
            osContainer.prototype.link = function ($scope, element, attributes) {
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
            };
            return osContainer;
        })();
        directives.osContainer = osContainer;
    })(directives = osml.directives || (osml.directives = {}));
})(osml || (osml = {}));
osml.registerDirective('osContainer', []);
var osml;
(function (osml) {
    var directives;
    (function (directives) {
        'use strict';
        var osInput = (function () {
            function osInput() {
                this.templateUrl = 'app/components/osInput.html';
                this.scope = {
                    placeholder: '@'
                };
            }
            osInput.prototype.link = function ($scope, element, attributes) {
                element.addClass('os-input');
            };
            return osInput;
        })();
        directives.osInput = osInput;
    })(directives = osml.directives || (osml.directives = {}));
})(osml || (osml = {}));
osml.registerDirective('osInput', []);
var osml;
(function (osml) {
    var directives;
    (function (directives) {
        'use strict';
        osml.app.directive('osSelect', function ($timeout) {
            return {
                templateUrl: 'app/components/osSelect.html',
                scope: {
                    options: '='
                },
                link: function ($scope, element, attributes) {
                    element.addClass('os-select');
                    $timeout(function () {
                        $(element).children('select').material_select();
                    }, 0);
                }
            };
        });
    })(directives = osml.directives || (osml.directives = {}));
})(osml || (osml = {}));
var osml;
(function (osml) {
    var services;
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
    })(services = osml.services || (osml.services = {}));
})(osml || (osml = {}));
