
module osml.directives{
    'use strict';

    osml.app.directive('osSelect', ($timeout) => {
        return {
            templateUrl: 'app/components/osSelect.html',
            scope: {
                options: '='
            },
            link: ($scope:ng.IScope, element:JQuery, attributes:ng.IAttributes) => {
                element.addClass('os-select');

                $timeout(() => {
                    $(element).children('select').material_select();
                }, 0);
            }
        }
    });
}
