import { ViewTemplate } from '@microsoft/fast-element';
import './application/index.js';
import './router/index.js';
export declare class ComponentExecutionContext<T = any, States extends Record<string, any> = Record<string, any>> {
    #private;
    $states: Record<string, any>;
    get states(): Record<string, any>;
    createState: <T_1>(key: keyof States, value: T_1) => [state: T_1, setter: (newValue: T_1) => void];
    useState: <T_1>(key: keyof States) => [state: T_1, setter: (newValue: T_1) => void];
    createConsumable: <T_1 = any>(key: string, value: T_1) => void;
    constructor(data?: T);
    static init<T extends Record<string, any> = {}>(data?: T): ComponentContext<T>;
}
export type ComponentContext<T = Record<string, any>, States = Record<string, any>> = ComponentExecutionContext<T, States> & T;
export declare function render<T extends Record<string, any> = {}, Storage extends Record<string, any> = Record<string, any>>(template: ViewTemplate<ComponentContext<any, Record<string, any>>, any>, container?: HTMLElement, data?: {}): import("@microsoft/fast-element").HTMLView<any, any>;
