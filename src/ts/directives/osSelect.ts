/// <reference path="../osml.ts"/>
/// <reference path="../vendors/materializecss.d.ts"/>

module osml.directives{
    'use strict';

    interface SelectScope{
        name:string;
        placeholder:string;
        options:any;
        model:any;
        optionsVars:string;
        valueVar?:string;
        textVar?:string;
    }

    export class osSelect{
        public templateUrl = __osml_config.base_path + 'components/osSelect.html';
        public transclude:boolean = true;

        public scope:SelectScope = {
            name: '@',
            placeholder: '@',
            options: '=',
            model: '@',
            optionsVars: '@'
        };

        constructor(private $timer){
            this.link = this.link.bind(this);

        }

        public link($scope:SelectScope, element:JQuery, attributes:ng.IAttributes):void {
            $(element).addClass('os-select');

            $scope.ngModel = $scope['model'];

            if($scope.placeholder == undefined || $scope.placeholder == '') $scope.placeholder = 'Choisissez une option';

            $scope.$watch('model', (value) => {
                this.$timer(() => {
                    if(value) $(element).children('select').material_select();
                })
            });

            this.$timer(() => {

                $(element).find('select option[value="? undefined:undefined ?"]').remove();
                $(element).children('select').material_select();

                if($scope.model == undefined) $(element).children('input').removeAttr('ng-model');
            }, 0);
        }

        public provideOptionsVars(optionsVars:string, $scope:SelectScope):void {
            var vars = optionsVars.split(',');
            $scope.valueVar = vars[0];

            if(vars.length > 1) $scope.textVar = vars[1];
            else $scope.textVar = vars[0];
        }
    };
}

osml.registerDirective('osSelect', (timer) => new osml.directives.osSelect(timer), ['$timeout']);
