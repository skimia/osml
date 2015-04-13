
module osml.directives{
    'use strict';

    export class OsContainer extends framework.Directive{

        constructor() {
            super()
        }

        public link($scope:ng.IScope, element:JQuery, attrs:any):void {
            element.addClass('os-container');
        }

    }
}