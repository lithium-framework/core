import { Observable, FASTElement, HTMLTemplateTag, DecoratorAttributeConfiguration, attr, ViewTemplate, HTMLBindingDirective, Binding, Subscriber, BindingDirective, ExpressionObserver, HTMLView, StatelessAttachedAttributeDirective, Subscriber as _Subscriber1, when, repeat, children, elements, slotted } from "@microsoft/fast-element";
import { Properties } from "csstype";
import { State } from "@lithium-framework/state";
export type ObservableProxy<key extends string, value extends any = any> = Record<string, value> & {
    subscribe: ObservableObject<key, value>["subscribe"];
    unsubscribe: ObservableObject<key, value>["unsubscribe"];
    keys(): string[];
    values(): any[];
};
export class ObservableObject<key extends string, value extends any = any> extends Object {
    static init<key extends string, value extends any>(initialObject: Record<key, value>): any;
    $data: Record<string, value>;
    constructor(initialObject: Record<key, value>);
    subscribe: (propKey: key, callback: (newValue: any, oldValue: any) => void) => void;
    unsubscribe: (propKey: key, callback: (newValue: any, oldValue: any) => void) => void;
    set: <T extends value = any>(key: key, value: T) => value;
    createProxy(): ObservableProxy<key, value>;
}
export { Observable };
export type ViewContext<T = Record<string, any>, States = Record<string, any>> = ViewExecutionContext<T, States> & T;
export function createObservableObject<Key extends string, Value extends any>(initialObject: Record<Key, Value>): any;
export function ObservableArray(init?: Array<any>): any[];
export { State, createState } from '@lithium-framework/state';
export { createStorage, } from '@lithium-framework/context';
export { uuid } from '@lithium-framework/huid';
interface IWebComponent<Data = any, States extends Record<string, any> = Record<string, any>> extends Partial<FASTElement> {
    states?: Record<string, any>;
    effects?: EffectRegistery;
    bindEffect: (effect_name: string, callback: () => void, dependencies: any[]) => void;
    bindState: <Value = never>(key: keyof States, value: Value) => [state: Value, setter: (newValue: Value) => void];
    bindConsumable: <Value>(key: string, value: Value) => void;
}
export class WebComponent extends FASTElement implements IWebComponent {
    constructor();
    get bindState(): <States, Value>(key: keyof States, value: Value) => [state: Value, setter: (newValue: Value) => void];
    get bindConsumable(): <Value>(key: string, value: Value) => void;
    get bindEffect(): (effect_name: string, callback: () => void, dependencies: any[]) => void;
    handleStateChange: (propertyName: any, oldValue: any, newValue: any) => void;
    connectedCallback(this: IWebComponent): void;
    static define: {
        <TType extends import("@microsoft/fast-element").Constructable<HTMLElement> = import("@microsoft/fast-element").Constructable<HTMLElement>>(this: TType, nameOrDef: string | import("@microsoft/fast-element").PartialFASTElementDefinition): TType;
        <TType extends import("@microsoft/fast-element").Constructable<HTMLElement> = import("@microsoft/fast-element").Constructable<HTMLElement>>(type: TType, nameOrDef?: string | import("@microsoft/fast-element").PartialFASTElementDefinition): TType;
    };
}
export { customElement, css, ViewTemplate, HTMLView, volatile, } from "@microsoft/fast-element";
export const html: HTMLTemplateTag;
type EffectRegistery = (Map<string, IEffect> & {
    execute(dependency?: string): void;
});
interface IEffect {
    name: string;
    dependencies: string[];
    callback: any;
}
export function Effects(effects?: Record<string, IEffect>): EffectRegistery;
export class ViewExecutionContext<T = any, States extends Record<string, any> = Record<string, any>> extends Object implements IWebComponent {
    states: {};
    effects?: EffectRegistery;
    constructor(data?: T);
    get bindState(): <Value = never>(key: keyof States, value: Value) => [state: Value, setter: (newValue: Value) => void];
    get bindConsumable(): <Value>(key: string, value: Value) => void;
    get bindEffect(): (effect_name: string, callback: () => void, dependencies: any[]) => void;
    handleStateChange: (propertyName: any, oldValue: any, newValue: any) => void;
    static init<T extends Record<string, any> = {}>(data?: T): ViewContext<T>;
}
export function state(): (target: any, propertyName: string, value?: any, y?: any) => void;
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
export function effect(dependencies: any[]): (target: IWebComponent, propertyName: string, value?: any) => void;
export class AsyncAppendBindig extends Binding {
    createObserver(subscriber: Subscriber, directive: BindingDirective): ExpressionObserver<any, any, any>;
}
export class AsyncAppendDirective<T = any> extends HTMLBindingDirective {
    fn: Promise<T>;
    callback: (result: T) => ViewTemplate;
    constructor(fn: Promise<T>, callback: (result: T) => ViewTemplate);
    createBehavior(): any;
    static use<T>(fn: Promise<T>, callback: (result: T) => ViewTemplate): AsyncAppendDirective<T>;
}
export { Subscriber };
export const asyncAppend: <T = any>(fn: Promise<T>, callback: (result: T) => ViewTemplate) => AsyncAppendDirective<T>;
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
    _callback: (newValue: T) => ViewTemplate;
    constructor(state: State<T>, callback: (newValue: T) => ViewTemplate);
    createBehavior(): any;
    static use<T = any>(state: any, callback: any): StateDirective<T>;
}
export const useState: <T>(state: State<T>, callback?: (newValue: T) => ViewTemplate) => StateDirective<T>;
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
    fn: Promise<ViewTemplate>;
    template: ViewTemplate;
    constructor(fn: Promise<ViewTemplate>, template: ViewTemplate);
    createBehavior(): any;
    static use(fn: Promise<ViewTemplate>, template: ViewTemplate): UntilDirective;
}
export const until: (fn: Promise<ViewTemplate>, template: ViewTemplate) => UntilDirective;
export { when, repeat, children, elements, slotted };
export function render<T extends Record<string, any> = {}, Storage extends Record<string, any> = Record<string, any>>(template: ViewTemplate<ViewExecutionContext<any, Record<string, any>>, any>, container?: HTMLElement, data?: {}): import("webComponent").HTMLView<ViewExecutionContext<any, Record<string, any>>, any>;

//# sourceMappingURL=types.d.ts.map
