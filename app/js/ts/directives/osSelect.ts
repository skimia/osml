
module osml.directives{
    'use strict';

    export function osSelect($timer):ng.IDirective {
        return {
            scope: true,
            link: ($scope:ng.IScope, element:JQuery, attributes:ng.IAttributes) => {
                element.addClass('os-select');
                $(element).children('select').material_select();
            }
        }
    }
}