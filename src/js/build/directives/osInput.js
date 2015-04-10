var OSML;
(function (OSML) {
    var Directives;
    (function (Directives) {
        var osInput = (function () {
            function osInput($datasources) {
                console.log('osInput');
            }
            osInput.prototype.link = function (scope, element, attrs) {
                console.log('test');
                $(element).addClass('Test');
            };
            osInput.$inject = [];
            return osInput;
        })();
        Directives.osInput = osInput;
    })(Directives = OSML.Directives || (OSML.Directives = {}));
})(OSML || (OSML = {}));
