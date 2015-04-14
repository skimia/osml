/// <reference path="../osml.ts"/>


module osml.framework{
    'use strict';

    export class Directive extends FunctionClass{

        public $inject:string[] = [];

        constructor() {
            super();
        }

        public link($scope:ng.IScope, element:JQuery, attrs:any):void {}

        public static factory():ng.IDirectiveFactory {
            return () => {
                return new osml.directives[this.name]();
            }
        }

    }
}