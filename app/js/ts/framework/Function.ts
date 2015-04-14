/// <reference path="../osml.ts"/>

module osml.framework{
    'use strict';

    export class FunctionClass implements Function{
        prototype:any;
        length:number;
        arguments:any;
        caller:Function;
        name:string;

        public apply(thisArg:any, argArray:any):any {
            return undefined;
        }

        public call(thisArg:any, argArray:any):any {
            return undefined;
        }

        public bind(thisArg:any, argArray:any):any {
            return undefined;
        }

        public toMethod(newHome:Object):Function {
            return undefined;
        }

    }
}