var osml;
(function (osml) {
    var services;
    (function (services) {
        var DataSources = (function () {
            function DataSources() {
                this.datasources = {};
            }
            DataSources.prototype.add = function (name, datasource) {
            };
            DataSources.prototype.delete = function (name) {
            };
            DataSources.prototype.get = function (name) {
            };
            return DataSources;
        })();
        services.DataSources = DataSources;
    })(services = osml.services || (osml.services = {}));
})(osml || (osml = {}));
