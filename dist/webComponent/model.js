import { FASTElement } from "@microsoft/fast-element";
import { ObservableObject } from '../utils/observable-object/index.js';
export class WebComponent extends FASTElement {
    static states = {};
    $states = ObservableObject.init(this.constructor["states"]);
    constructor() {
        super();
        Object.keys(this.constructor["states"]).forEach(key => {
            // delete this[key];
            Object.defineProperty(this, key, {
                get() {
                    return this.$states[key];
                },
                set(value) {
                    this.$states[key] = value;
                }
            });
        });
    }
    connectedCallback() {
        super.connectedCallback();
    }
}
//# sourceMappingURL=model.js.map