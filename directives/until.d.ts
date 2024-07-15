import { ViewTemplate, HTMLBindingDirective, Binding, BindingDirective, ExpressionObserver, Subscriber } from '@microsoft/fast-element';
export declare class UntilBindig extends Binding {
    createObserver(subscriber: Subscriber, directive: BindingDirective): ExpressionObserver<any, any, any>;
}
export declare class UntilDirective extends HTMLBindingDirective {
    fn: Promise<ViewTemplate>;
    template: ViewTemplate;
    constructor(fn: Promise<ViewTemplate>, template: ViewTemplate);
    createBehavior(): any;
    static use(fn: Promise<ViewTemplate>, template: ViewTemplate): UntilDirective;
}
export declare const until: (fn: Promise<ViewTemplate>, template: ViewTemplate) => UntilDirective;
