import { Observable, DecoratorAttributeConfiguration, attr, ViewTemplate as _ViewTemplate1, HTMLBindingDirective, Binding, Subscriber, BindingDirective, ExpressionObserver, HTMLView, StatelessAttachedAttributeDirective, Subscriber as _Subscriber1, when, repeat, children, elements, slotted, FASTElement, HTMLTemplateTag } from "@microsoft/fast-element";
import { ViewTemplate } from "@microsoft/fast-element/dist/esm";
import { State } from "@lithium-framework/state";
import { Properties } from "csstype";
export class ObservableObject<key extends string, value extends any = any> extends Object {
    static init<key extends string, value extends any>(initialObject: Record<key, value>): Record<string, value>;
    $data: Record<string, value>;
    constructor(initialObject: Record<key, value>);
    set: <T extends value = any>(key: key, value: T) => value;
    createProxy(): Record<string, value>;
}
export { Observable };
/**
 * @State decorator
 * A decorator to define a state property on a WebComponent.
 * This state property is observable, and its changes are detected and handled.
 *
 * @param {Object} target - The prototype of the class where the state property is defined.
 * @param {string} propertyKey - The name of the property to be defined as a state.
 *
 * @example
 * ```typescript
 * /// Define a counter component using the State decorator

 * customElement({
 *     name: 'counter-element',
 *     template: html`...`
 * })
 * class CounterElement extends WebComponent {
 *     State count: number = 0;
 *
 *     increment() {
 *         this.count += 1;
 *     }
 *
 *     connectedCallback() {
 *         super.connectedCallback();s
 *     }
 * }
 * ```
 */
export function state(target: any, propertyKey: string, value?: any, constructible?: boolean): void;
/**
 * @AttributeState decorator
 * A decorator to define a property as both an attribute and a state on a WebComponent.
 * This combines the behavior of @attr and @State decorators.
 *
 * @param {DecoratorAttributeConfiguration} options - Options to configure the attribute.
 * @returns {Function} - The decorator function.
 *
 * @example
 * ```typescript
 * // Define an editable title component using the AttributeState decorator
 *
 * customElement({
 *     name: 'editable-title',
 *     template : html`...`
 * })
 * class EditableTitle extends WebComponent {
 *     AttributeState() level: number = 2;
 *     AttributeState() editable: string = "false";
 *     State value: string = "Hello World";
 *
 *     handleInput(event) {
 *         this.value = event.target.innerText;
 *     }
 *
 *     connectedCallback() {
 *         super.connectedCallback();
 *     }
 * }
 * ```
 */
export function attrState(options?: DecoratorAttributeConfiguration): (target: any, propertyKey: string) => void;
export { attr };
export class ViewExecutionContext<T = any, States extends Record<string, any> = Record<string, any>> {
    #private;
    $states: Record<string, any>;
    get states(): Record<string, any>;
    createState: <T_1>(key: keyof States, value: T_1) => [state: T_1, setter: (newValue: T_1) => void];
    useState: <T_1>(key: keyof States) => [state: T_1, setter: (newValue: T_1) => void];
    createConsumable: <T_1 = any>(key: string, value: T_1) => void;
    constructor(data?: T);
    static init<T extends Record<string, any> = {}>(data?: T): ViewContext<T>;
}
export type ViewContext<T = Record<string, any>, States = Record<string, any>> = ViewExecutionContext<T, States> & T;
export function render<T extends Record<string, any> = {}, Storage extends Record<string, any> = Record<string, any>>(template: ViewTemplate<ViewExecutionContext<any, Record<string, any>>, any>, container?: HTMLElement, data?: {}): any;
export class AsyncAppendBindig extends Binding {
    createObserver(subscriber: Subscriber, directive: BindingDirective): ExpressionObserver<any, any, any>;
}
export class AsyncAppendDirective<T = any> extends HTMLBindingDirective {
    fn: Promise<T>;
    callback: (result: T) => _ViewTemplate1;
    constructor(fn: Promise<T>, callback: (result: T) => _ViewTemplate1);
    createBehavior(): any;
    static use<T>(fn: Promise<T>, callback: (result: T) => _ViewTemplate1): AsyncAppendDirective<T>;
}
export { Subscriber };
export const asyncAppend: <T = any>(fn: Promise<T>, callback: (result: T) => _ViewTemplate1) => AsyncAppendDirective<T>;
export interface IElementRef<T extends Node> {
    value: T;
}
export function createRef<T extends Node>(): IElementRef<T>;
export class RefDirective<T extends Node> extends StatelessAttachedAttributeDirective<IElementRef<T>> {
    options: IElementRef<T>;
    constructor(options: IElementRef<T>);
    bind(controller: HTMLView): void;
    static use<T extends Node>(options: IElementRef<T>): RefDirective<T>;
}
export const ref: <T extends Node>(options: IElementRef<T>) => RefDirective<T>;
export class StateBindig extends Binding {
    createObserver(subscriber: _Subscriber1, directive: BindingDirective): ExpressionObserver<any, any, any>;
}
export class StateDirective<T = any> extends HTMLBindingDirective {
    _state: State<T>;
    get state(): T;
    set state(value: T);
    _callback: (newValue: T) => _ViewTemplate1;
    constructor(state: State<T>, callback: (newValue: T) => _ViewTemplate1);
    createBehavior(): any;
    static use<T = any>(state: any, callback: any): StateDirective<T>;
}
export const useState: <T>(state: State<T>, callback?: (newValue: T) => _ViewTemplate1) => StateDirective<T>;
export class StyleBindig extends Binding {
    createObserver(subscriber: _Subscriber1, directive: BindingDirective): ExpressionObserver<any, any, any>;
}
export class StyleDirective extends HTMLBindingDirective {
    css: Properties;
    constructor(css: Properties);
    createBehavior(): any;
    static use(css: Properties): StyleDirective;
}
export const style: (css: Properties) => StyleDirective;
export class UntilBindig extends Binding {
    createObserver(subscriber: _Subscriber1, directive: BindingDirective): ExpressionObserver<any, any, any>;
}
export class UntilDirective extends HTMLBindingDirective {
    fn: Promise<_ViewTemplate1>;
    template: _ViewTemplate1;
    constructor(fn: Promise<_ViewTemplate1>, template: _ViewTemplate1);
    createBehavior(): any;
    static use(fn: Promise<_ViewTemplate1>, template: _ViewTemplate1): UntilDirective;
}
export const until: (fn: Promise<_ViewTemplate1>, template: _ViewTemplate1) => UntilDirective;
export { when, repeat, children, elements, slotted };
export function createObservableObject<Key extends string, Value extends any>(initialObject: Record<Key, Value>): Record<string, Value>;
export { State, createState } from '@lithium-framework/state';
export { createStorage, } from '@lithium-framework/context';
export { uuid } from '@lithium-framework/huid';
export class WebComponent extends FASTElement {
    static states: {};
    $states: Record<string, unknown>;
    constructor();
    connectedCallback(): void;
    static define: {
        <TType extends import("@microsoft/fast-element").Constructable<HTMLElement> = import("@microsoft/fast-element").Constructable<HTMLElement>>(this: TType, nameOrDef: string | import("@microsoft/fast-element").PartialFASTElementDefinition): TType;
        <TType extends import("@microsoft/fast-element").Constructable<HTMLElement> = import("@microsoft/fast-element").Constructable<HTMLElement>>(type: TType, nameOrDef?: string | import("@microsoft/fast-element").PartialFASTElementDefinition): TType;
    };
}
export { customElement, css, ViewTemplate, HTMLView, volatile, } from "@microsoft/fast-element";
export const html: HTMLTemplateTag;

//# sourceMappingURL=types.d.ts.map
