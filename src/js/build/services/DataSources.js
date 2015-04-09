var OSML;
(function (OSML) {
    var Services;
    (function (Services) {
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
        Services.DataSources = DataSources;
    })(Services = OSML.Services || (OSML.Services = {}));
})(OSML || (OSML = {}));
