/// <reference path="../osml.ts"/>

module osml.directives{
    'use strict';

    /**
     * Interfaces
     */
    export interface IDirectiveScope{

    }

    export interface IDirectiveAttrs{

    }

    /**
     *  AngularJS Base directive
     */
    export class osDirective{

        /**
         * AngularJS Directive members
         */
        public templateUrl:string;
        public transclude:boolean = false;
        public scope:any = {}

        /**
         * Constructor
         */
        constructor($timer){
            this.link = this.link.bind(this);
        }

        /**
         * Link
         */
        public link($scope:IDirectiveScope, element:JQuery, attributes:IDirectiveAttrs):void {

        }

    }
}