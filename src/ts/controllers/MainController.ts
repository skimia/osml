/// <reference path="../osml.ts"/>
/// <reference path="../services/DataSources.ts"/>

module osml.controllers {
    export class MainController {
        public test:string;

        constructor (private $scope, private ds:services.DataSources) {
            $scope.message = 'test';
        }
    }
}

osml.registerController('MainController', ['$scope', 'dataSources']);