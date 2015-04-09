module OSML.Directives{
    export class osInput{

        public link(scope:ng.IScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes):void {
            console.log('test');
            $(element).html('Test');
        }

        public static factory():ng.IDirectiveFactory{
            return () => {
                return new osInput();
            }
        }
    }
}