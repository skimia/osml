/// <reference path="../osml.ts"/>

module osml.directives{
    'use strict';

    interface IContainerScope{
        direction:string;
    }

    export class osContainer {
        public scope:IContainerScope = {
            direction: '@'
        }

        public link($scope:IContainerScope, element:JQuery, attributes:ng.IAttributes) {
            element.addClass('os-container');

            switch ($scope.direction){
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
    }
}

osml.registerDirective('osContainer', []);