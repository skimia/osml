/// <reference path="../osml.ts"/>
/// <reference path="osDirective.ts"/>

module osml.directives{
    'use strict';

    /**
     * Interfaces
     */
    interface InputScope extends IDirectiveScope{
        attributes:string;
        model:any;
        name:string;
        placeholder:string;
        type:string;
    }

    interface InputAttrs extends IDirectiveAttrs{
        attributes:string;
        model:any;
        name:string;
        placeholder:string;
        type:string;
    }

    /**
     *  osInput Directive
     */
    export class osInput extends osDirective{

        /**
         * AngularJS Directive members
         */
        public templateUrl:string = __osml_config.base_path + 'components/osInput.html';
        public transclude:boolean = true;
        public scope = {
            name: '@',
            type: '@',
            placeholder: '@',
            attributes: '@',
            model: '=ngModel'
        };

        /**
         * Constructor
         */
        constructor($q, $timer){
            super($q, $timer);
        }

        /**
         * Link
         */
        public link($scope:InputScope, element:JQuery, attributes:InputAttrs):void {
            super.link($scope, element, attributes);
            if(!attributes.type) $scope.type = 'text';

            this.services.$q.all([
                this.loadData('name')
            ]).then();

            this.services.$timer(() => {
                $(element).addClass('os-input');

                if($scope.placeholder == undefined)
                    $(element).children('input').removeAttr('placeholder');
                else
                    $(element).children('label').addClass('active');

                if($scope.model == undefined)
                    $(element).children('input').removeAttr('ng-model');
                else if($scope.model != '')
                    $(element).children('label').addClass('active');
            }, 0);
        }
    }
}

osml.registerDirective('osInput', (q, timer) => new osml.directives.osInput(q, timer), ['$q', '$timeout']);