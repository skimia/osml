/// <reference path="../lib/jquery.d.ts"/>
/// <reference path="../lib/angular.d.ts"/>

module OSML.Directives{
    export class Directive{
        public factory():ng.IDirective{
            return () => {
                return new Directive();
            }
        }
    }
}

