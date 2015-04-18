
module osml.directives{
    'use strict';

    export function osContainer():ng.IDirective {
        return {
            scope: {
                direction: '@'
            },
            link: ($scope:ng.IScope, element:JQuery, attributes:ng.IAttributes) => {
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
}