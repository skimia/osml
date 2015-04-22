/// <reference path="../osml.ts"/>

module osml.directives{
    'use strict';

    interface InputScope extends ng.IScope{
        name:string;
        type:string;
        placeholder:string;
        model:any;
    }

    interface InputAttrs extends ng.IAttributes{
        type:string;
    }

    export class osInput {

        public templateUrl:string = 'app/components/osInput.html';
        public transclude:boolean = true;

        public scope = {
            name: '@',
            type: '@',
            placeholder: '@',
            model: '='
        }

        constructor(private $timer){
            this.link = this.link.bind(this);
        }

        public link($scope:InputScope, element:JQuery, attributes:InputAttrs):void {
            if(!attributes.type) attributes.type = 'text';

            element.addClass('os-input');
            this.$timer(() => {
                if($scope.placeholder == undefined) $(element).children('input').removeAttr('placeholder');
                else $(element).children('label').addClass('active');

                if($scope.model == undefined) $(element).children('input').removeAttr('ng-model');
                else if($scope.model != '') $(element).children('label').addClass('active');
            }, 0);


        }
    }
}

osml.registerDirective('osInput', (timer) => new osml.directives.osInput(timer), ['$timeout']);