/// <reference path="../osml.ts"/>

module osml.directives{
    'use strict';

    /**
     * Interfaces
     */
    export interface IDirectiveScope{}
    export interface IDirectiveAttrs{}
    export interface IDirectiveServices{
        $q:any;
        $timer:any;
    }

    /**
     *  AngularJS Base directive
     */
    export class osDirective implements ng.IDirective{

        /**
         * AngularJS Directive members
         */
        public templateUrl:string;
        public transclude:boolean = false;
        public scope:any = {} // Scope directive parameter != $scope

        /**
         * Services
         */
        public services:IDirectiveServices;
        public $scope:any;

        /**
         * Constructor
         */
        constructor($q, $timer){
            this.link = this.link.bind(this);

            this.services = {
                $q: $q,
                $timer: $timer
            }
        }

        /**
         * Link
         */
        public link($scope:IDirectiveScope, element:JQuery, attributes:IDirectiveAttrs):void {
            this.$scope = $scope;
        }

        public loadData(scopeAttr):ng.IPromise<any> {
            var loading = this.services.$q.defer();
            if(this.$scope[scopeAttr]) {
                loading.resolve(this.$scope[scopeAttr]);
            } else {
                this.$scope.$watch(scopeAttr, function(newValue, oldValue) {
                    if(newValue !== undefined)
                        loading.resolve(newValue);
                });
            }
            return loading.promise;
        }

    }
}