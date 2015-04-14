// require './Directive.js'
// require '../services/DataSources.js'


module osml.framework{
    'use strict';

    export class DataSourceDirective extends Directive{

        public datasource:services.DataSources;

        constructor(datasource:services.DataSources) {
            super();
            this.datasource = datasource;
        }

        public static factory():ng.IDirectiveFactory {
            var dir = (datasource:services.DataSources) => {
                return new directives[this.name](datasource);
            }

            dir['$inject'] = ['DataSource'];
            return dir;
        }

    }
}