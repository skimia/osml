// require '../osml.js'
var osml;
(function (osml) {
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

        registerService('DataSource');
    })(osml.services || (osml.services = {}));
    var services = osml.services;
})(osml || (osml = {}));
