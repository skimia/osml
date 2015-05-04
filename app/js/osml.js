var osml;
(function (osml) {
    'use strict';
    osml.app = angular.module('osml', []);
    function registerDirective(className, factory, services) {
        if (factory === void 0) { factory = null; }
        if (services === void 0) { services = []; }
        var directive = className[0].toLowerCase() + className.slice(1);
        osml.app.directive(directive, services);
    }
    osml.registerDirective = registerDirective;
    function registerDirective(directiveClass) {
        var directive = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return directiveClass.constructor;
        };
    }
    osml.registerDirective = registerDirective;
    function registerController(className, services) {
        if (services === void 0) { services = []; }
        osml.controllers[className].$inject = services;
        osml.app.controller(className, osml.controllers[className]);
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
                $scope.selectOptions = {
                    1: 'zero',
                    2: 'un'
                };
                $scope.input = { val: 'Test' };
                $scope.actualize = function () {
                    $scope.selectOptions['3'] = 'deux';
                };
            }
            MainController.$inject = [];
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
        var osDirective = (function () {
            function osDirective($q, $timer) {
                this.transclude = false;
                this.scope = {};
                this.link = this.link.bind(this);
                this.services = {
                    $q: $q,
                    $timer: $timer
                };
            }
            osDirective.prototype.link = function ($scope, element, attributes) {
                this.$scope = $scope;
            };
            osDirective.prototype.loadData = function (scopeAttr) {
                var loading = this.services.$q.defer();
                if (this.$scope[scopeAttr]) {
                    loading.resolve(this.$scope[scopeAttr]);
                }
                else {
                    this.$scope.$watch(scopeAttr, function (newValue, oldValue) {
                        if (newValue !== undefined)
                            loading.resolve(newValue);
                    });
                }
                return loading.promise;
            };
            osDirective.prototype.register = function (name) {
                osml.registerDirective(name);
            };
            return osDirective;
        })();
        directives.osDirective = osDirective;
    })(directives = osml.directives || (osml.directives = {}));
})(osml || (osml = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var osml;
(function (osml) {
    var directives;
    (function (directives) {
        'use strict';
        var osInput = (function (_super) {
            __extends(osInput, _super);
            function osInput($q, $timer) {
                _super.call(this, $q, $timer);
                this.templateUrl = __osml_config.base_path + 'components/osInput.html';
                this.transclude = true;
                this.scope = {
                    name: '@',
                    type: '@',
                    placeholder: '@',
                    attributes: '@',
                    model: '=ngModel'
                };
            }
            osInput.prototype.link = function ($scope, element, attributes) {
                _super.prototype.link.call(this, $scope, element, attributes);
                if (!attributes.type)
                    $scope.type = 'text';
                this.services.$q.all([
                    this.loadData('name')
                ]).then(function () {
                });
                this.services.$timer(function () {
                    $(element).addClass('os-input');
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
        })(directives.osDirective);
        directives.osInput = osInput;
    })(directives = osml.directives || (osml.directives = {}));
})(osml || (osml = {}));
osml.registerDirective('osInput', function (q, timer) { return new osml.directives.osInput(q, timer); }, ['$q', '$timeout']);
var osml;
(function (osml) {
    var directives;
    (function (directives) {
        'use strict';
        var osSelect = (function () {
            function osSelect($timer) {
                this.$timer = $timer;
                this.templateUrl = __osml_config.base_path + 'components/osSelect.html';
                this.transclude = true;
                this.scope = {
                    name: '@',
                    placeholder: '@',
                    options: '=',
                    model: '@',
                    optionsVars: '@'
                };
                this.link = this.link.bind(this);
            }
            osSelect.prototype.link = function ($scope, element, attributes) {
                var _this = this;
                $(element).addClass('os-select');
                $scope.ngModel = $scope['model'];
                if ($scope.placeholder == undefined || $scope.placeholder == '')
                    $scope.placeholder = 'Choisissez une option';
                $scope.$watch('model', function (value) {
                    _this.$timer(function () {
                        if (value)
                            $(element).children('select').material_select();
                    });
                });
                this.$timer(function () {
                    $(element).find('select option[value="? undefined:undefined ?"]').remove();
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
