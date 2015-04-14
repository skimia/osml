// require '../osml.js'

module osml.services{
    export class DataSources{
        private datasources:any;

        constructor(){
            this.datasources = {
                test: 'test'
            };
        }

        public add(name:string, datasource:any):void {

        }

        public delete(name:string):void {

        }

        public get(name:string):any {
            return this.datasources[name];
        }
    }

    registerService('DataSource');
}