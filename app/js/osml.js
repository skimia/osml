var osml;
(function (osml) {
    'use strict';
    osml.app = angular.module('osml', []);
    function registerDirective(className, factory, services) {
        if (factory === void 0) { factory = null; }
        if (services === void 0) { services = []; }
        var directive = className[0].toLowerCase() + className.slice(1);
        if (factory)
            services.push(factory);
        else
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
    function registerService(className, factory, services) {
        if (factory === void 0) { factory = null; }
        if (services === void 0) { services = []; }
        var service = className[0].toLowerCase() + className.slice(1);
        if (factory)
            services.push(factory);
        else
            services.push(function () { return new osml.services[className](); });
        osml.app.factory(service, services);
    }
    osml.registerService = registerService;
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
osml.registerService('DataSources');
var osml;
(function (osml) {
    var controllers;
    (function (controllers) {
        var MainController = (function () {
            function MainController($scope, ds) {
                this.$scope = $scope;
                this.ds = ds;
                $scope.message = 'test';
                $scope.selectOptions = [{ text: 'test', value: '12' }, { text: 'test', value: '12' }];
            }
            return MainController;
        })();
        controllers.MainController = MainController;
    })(controllers = osml.controllers || (osml.controllers = {}));
})(osml || (osml = {}));
osml.registerController('MainController', ['$scope', 'dataSources']);
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
osml.registerDirective('osContainer');
var osml;
(function (osml) {
    var directives;
    (function (directives) {
        'use strict';
        var osInput = (function () {
            function osInput($timer) {
                this.$timer = $timer;
                this.templateUrl = 'app/components/osInput.html';
                this.transclude = true;
                this.scope = {
                    name: '@',
                    type: '@',
                    placeholder: '@',
                    model: '='
                };
                this.link = this.link.bind(this);
            }
            osInput.prototype.link = function ($scope, element, attributes) {
                if (!attributes.type)
                    attributes.type = 'text';
                element.addClass('os-input');
                this.$timer(function () {
                    if ($scope.placeholder == undefined)
                        $(element).children('input').removeAttr('placeholder');
                    else
                        $(element).children('label').addClass('active');
                    if ($scope.model == undefined)
                        $(element).children('input').removeAttr('ng-model');
                    else if ($scope.model != '')
                        $(element).children('label').addClass('active');
                }, 0);
            };
            return osInput;
        })();
        directives.osInput = osInput;
    })(directives = osml.directives || (osml.directives = {}));
})(osml || (osml = {}));
osml.registerDirective('osInput', function (timer) { return new osml.directives.osInput(timer); }, ['$timeout']);
var osml;
(function (osml) {
    var directives;
    (function (directives) {
        'use strict';
        var osSelect = (function () {
            function osSelect($timer) {
                this.$timer = $timer;
                this.templateUrl = 'app/components/osSelect.html';
                this.transclude = true;
                this.scope = {
                    name: '@',
                    placeholder: '@',
                    options: '=',
                    model: '=',
                    optionsVars: '@'
                };
                this.link = this.link.bind(this);
            }
            osSelect.prototype.link = function ($scope, element, attributes) {
                $(element).addClass('os-select');
                this.provideOptionsVars($scope.optionsVars, $scope);
                if ($scope.placeholder == undefined || $scope.placeholder == '')
                    $scope.placeholder = 'Choisissez une option';
                this.$timer(function () {
                    $(element).children('select').material_select();
                    if ($scope.model == undefined)
                        $(element).children('input').removeAttr('ng-model');
                }, 0);
            };
            osSelect.prototype.provideOptionsVars = function (optionsVars, $scope) {
                var vars = optionsVars.split(',');
                $scope.valueVar = vars[0];
                if (vars.length > 1)
                    $scope.textVar = vars[1];
                else
                    $scope.textVar = vars[0];
            };
            return osSelect;
        })();
        directives.osSelect = osSelect;
        ;
    })(directives = osml.directives || (osml.directives = {}));
})(osml || (osml = {}));
osml.registerDirective('osSelect', function (timer) { return new osml.directives.osSelect(timer); }, ['$timeout']);
