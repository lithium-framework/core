import { State } from '@lithium-framework/state';
import { Directive } from './../directives/index';
export declare class UseStateDirective<T extends State<T> = State<any>> extends Directive {
    get parent(): any;
    get part(): any;
    constructor(partInfo: any);
    render(state: T, callback?: (value: T) => any): any;
}
export declare const useState: (state: any, callback?: (value: any) => any) => import("lit-html/directive").DirectiveResult<{
    new (partInfo: any): UseStateDirective<any>;
}>;
