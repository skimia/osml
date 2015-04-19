/// <reference path="../osml.ts"/>

module osml.directives{
    'use strict';

    export class osInput {

        public templateUrl:string = 'app/components/osInput.html';

        public scope = {
            placeholder: '@'
        }

        public link($scope:ng.IScope, element:JQuery, attributes:ng.IAttributes):void {
                element.addClass('os-input');
        }
    }
}

osml.registerDirective('osInput', []);