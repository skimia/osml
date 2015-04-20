/// <reference path="../osml.ts"/>
/// <reference path="../services/DataSources.ts"/>

module osml.directives{
    'use strict';

    interface ISelectScope{
        options:any;
        placeholder:string;
    }

    export class osSelect{
        public templateUrl = 'app/components/osSelect.html';

        public scope:ISelectScope = {
            options: '=',
            placeholder: '@'
        };

        constructor(private $timer){
            this.link = this.link.bind(this);
        }

        public link($scope:ISelectScope, element:JQuery, attributes:ng.IAttributes):void {
            element.addClass('os-select');

            if($scope.placeholder == undefined) $scope.placeholder = 'Choisissez une option';

            this.$timer(() => {
                $(element).children('select').material_select();
            }, 0);
        }
    };
}

osml.registerDirective('osSelect', (timer) => new osml.directives.osSelect(timer), ['$timeout']);
