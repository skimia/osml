var OSML;
(function (OSML) {
    var Directives;
    (function (Directives) {
        var osInput = (function () {
            function osInput() {
            }
            osInput.prototype.link = function (scope, element, attrs) {
                console.log('test');
                $(element).html('Test');
            };
            osInput.factory = function () {
                return function () {
                    return new osInput();
                };
            };
            return osInput;
        })();
        Directives.osInput = osInput;
    })(Directives = OSML.Directives || (OSML.Directives = {}));
})(OSML || (OSML = {}));
