
module osml.framework{
    'use strict';

    export class Directive{

        public $inject:string[] = [];

        constructor() {}

        public link($scope:ng.IScope, element:JQuery, attrs:any):void {}

        public static factory():ng.IDirectiveFactory {
            return () => {
                return new osml.directives[this.name]();
            }
        }

    }
}