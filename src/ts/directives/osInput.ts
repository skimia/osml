/// <reference path="../osml.ts"/>
/// <reference path="osDirective.ts"/>

module osml.directives{
    'use strict';

    /**
     * Interfaces
     */
    interface InputScope extends IDirectiveScope{
        name:string;
        type:string;
        placeholder:string;
        model:any;
        attributes?:string;
    }

    interface InputAttrs extends IDirectiveAttrs{
        name:string;
        type:string;
        attributes:string;
        placeholder:string;
        model:any;
    }

    /**
     *  osInput Directive
     */
    export class osInput extends osDirective{

        /**
         * AngularJS Directive members
         */
        public templateUrl:string = config.basepath + 'app/components/osInput.html';
        public transclude:boolean = true;
        public scope = true;

        /**
         * Constructor
         */
        constructor(private $timer){
            super($timer);
        }

        /**
         * Link
         */
        public link($scope:InputScope, element:JQuery, attributes:InputAttrs):void {
            this.bindAttrs(attributes, $scope);

            element.addClass('os-input');

            this.$timer(() => {
                //if($scope.placeholder == undefined) $(element).children('input').removeAttr('placeholder');
                //else $(element).children('label').addClass('active');
//
                //if($scope.model == undefined) $(element).children('input').removeAttr('ng-model');
                //else if($scope.model != '') $(element).children('label').addClass('active');
            }, 0);
        }

        public bindAttrs(attrs:InputAttrs, $scope:InputScope):void {
            if(attrs.name) $scope.name = attrs.name;
            if(attrs.type) $scope.type = attrs.type; else $scope.type = 'text';
            if(attrs.placeholder) $scope.placeholder = attrs.placeholder;
            if(attrs.attributes) $scope.attributes = attrs.attributes;
            if(attrs.model) $scope.model = $scope[attrs.model];
        }
    }
}

osml.registerDirective('osInput', (timer) => new osml.directives.osInput(timer), ['$timeout']);