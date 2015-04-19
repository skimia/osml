/// <reference path="../osml.ts"/>

module osml.controllers {
    export class MainController {
        constructor (private $scope) {
            $scope.message = 'Hello';
        }
    }
}

osml.registerController('MainController', ['$scope']);