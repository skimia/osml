/// <reference path="../osml.ts"/>
/// <reference path="../services/DataSources.ts"/>

module osml.controllers {
    export class MainController {
        public test:string;

        constructor (private $scope, private ds:services.DataSources) {
            $scope.message = 'test';
            $scope.selectOptions = [{text:'test', value:'12'}, {text:'test', value:'12'}];
        }
    }
}

osml.registerController('MainController', ['$scope', 'dataSources']);