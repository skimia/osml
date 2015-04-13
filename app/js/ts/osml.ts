// require './framework/*'
// require './services/*'
// require './directives/*'

module osml {
    'use strict';

    var app = angular.module('osml', []);

    for(var directive in directives){
        var name = directive[0].toLowerCase() + directive.slice(1);
        app.directive(name, osml.directives[directive].factory());
    }

    app.factory('DataSources', services.DataSources);


}
