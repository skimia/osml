
module osml.directives{
    'use strict';

    export function osInput():ng.IDirective {
        return {
            link: ($scope:ng.IScope, element:JQuery, attributes:ng.IAttributes) => {
                element.addClass('os-input');
            }
        }
    }
}