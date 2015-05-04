/// <reference path="../osml.ts"/>
/// <reference path="../services/DataSources.ts"/>

module osml.controllers {
    export class MainController {
        public test:string;
        public static $inject:string[] = [];

        constructor (private $scope, private ds:services.DataSources) {
            $scope.message = 'test';
            $scope.selectOptions = {
                1: 'zero',
                2: 'un'
            };
            $scope.input = {val: 'Test'};

            $scope.actualize = () => {
                $scope.selectOptions['3'] = 'deux';
            }
        }
    }
}

osml.registerController('MainController', ['$scope', 'dataSources']);