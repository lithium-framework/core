import { FASTElement } from "@microsoft/fast-element";
import { ObservableObject } from '../utils/observable-object/index.js';
import { state, attrState } from './decorators/index.js';
import { when, repeat, ref, children, slotted } from './directives/index.js';
export declare class WebComponent extends FASTElement {
    static states: {};
    static get state(): typeof state;
    static get attrState(): typeof attrState;
    static get when(): typeof when;
    static get repeat(): typeof repeat;
    static get ref(): typeof ref;
    static get children(): typeof children;
    static get slotted(): typeof slotted;
    $states: ObservableObject<string, unknown>;
    constructor();
    connectedCallback(): void;
}
