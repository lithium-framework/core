import { State } from '@lithium-framework/state';
import { ViewTemplate, HTMLBindingDirective, Binding, BindingDirective, ExpressionObserver, Subscriber } from '@microsoft/fast-element';
export declare class StateBindig extends Binding {
    createObserver(subscriber: Subscriber, directive: BindingDirective): ExpressionObserver<any, any, any>;
}
export declare class StateDirective<T = any> extends HTMLBindingDirective {
    _state: State<T>;
    get state(): T;
    set state(value: T);
    _callback: (newValue: T) => ViewTemplate;
    constructor(state: State<T>, callback: (newValue: T) => ViewTemplate);
    createBehavior(): any;
    static use<T = any>(state: any, callback: any): StateDirective<T>;
}
export declare const useState: <T>(state: State<T>, callback?: (newValue: T) => ViewTemplate) => StateDirective<T>;
