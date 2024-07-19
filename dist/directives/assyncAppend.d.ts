import { ViewTemplate, HTMLBindingDirective, Binding, BindingDirective, ExpressionObserver, Subscriber } from '@microsoft/fast-element';
export declare class AsyncAppendBindig extends Binding {
    createObserver(subscriber: Subscriber, directive: BindingDirective): ExpressionObserver<any, any, any>;
}
export declare class AsyncAppendDirective<T = any> extends HTMLBindingDirective {
    fn: Promise<T>;
    callback: (result: T) => ViewTemplate;
    constructor(fn: Promise<T>, callback: (result: T) => ViewTemplate);
    createBehavior(): any;
    static use<T>(fn: Promise<T>, callback: (result: T) => ViewTemplate): AsyncAppendDirective<T>;
}
export declare const asyncAppend: <T = any>(fn: Promise<T>, callback: (result: T) => ViewTemplate) => AsyncAppendDirective<T>;
