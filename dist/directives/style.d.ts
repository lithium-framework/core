import { HTMLBindingDirective, Binding, BindingDirective, ExpressionObserver, Subscriber } from '@microsoft/fast-element';
import { CSSProperties } from '../utils/css-object';
export declare class StyleBindig extends Binding {
    createObserver(subscriber: Subscriber, directive: BindingDirective): ExpressionObserver<any, any, any>;
}
export declare class StyleDirective extends HTMLBindingDirective {
    css: CSSProperties;
    constructor(css: CSSProperties);
    createBehavior(): any;
    static use(css: CSSProperties): StyleDirective;
}
export declare const style: (css: CSSProperties) => StyleDirective;
