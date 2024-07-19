import { FASTElement } from "@microsoft/fast-element";
import { ObservableObject } from '../utils/observable-object/index.js';
/* The WebComponent class extends FASTElement and provides state management functionality using
ObservableObject. */
export class WebComponent extends FASTElement {
    /* The `static states = {};` line is declaring a static property named `states` on the `WebComponent`
    class and initializing it as an empty object `{}`. This property is intended to hold the initial
    state values for the component. By defining it as a static property, it is shared among all
    instances of the `WebComponent` class rather than being specific to individual instances. This
    allows all instances of the class to access and modify the same set of state values. */
    static states = {};
    /* The line ` = ObservableObject.init( this.constructor["states"] );` is initializing an
    instance property named `` on the `WebComponent` class. This property is being set to the
    result of calling the `init` method of the `ObservableObject` class, passing in the initial state
    values defined in the `states` static property of the `WebComponent` class
    (`this.constructor["states"]`). */
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