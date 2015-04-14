// require '../osml.js'
var osml;
(function (osml) {
    var services;
    (function (services) {
        var DataSources = (function () {
            function DataSources() {
                this.datasources = {
                    test: 'test'
                };
            }
            DataSources.prototype.add = function (name, datasource) {
            };
            DataSources.prototype.delete = function (name) {
            };
            DataSources.prototype.get = function (name) {
                return this.datasources[name];
            };
            return DataSources;
        })();
        services.DataSources = DataSources;
        osml.registerService('DataSource');
    })(services = osml.services || (osml.services = {}));
})(osml || (osml = {}));
