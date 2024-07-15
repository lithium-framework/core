import { ObservableObject } from '../utils/observable-object/index.js';
import { state } from '../decorators/index.js';
import './application/index.js';
import './router/index.js';
export class ComponentExecutionContext {
    $states = ObservableObject.init({});
    get states() { return this.$states; }
    #_state_keys = [];
    createState = (key, value) => {
        if (this.#_state_keys.includes(key))
            return this.useState(key);
        Object.defineProperty(this, key, {
            get() {
                return JSON.parse(this.states[key]);
            },
            set(value) {
                if (!this.#_state_keys.includes(key)) {
                    this.#_state_keys.push(key);
                    this.$states = ObservableObject.init({
                        [key]: JSON.stringify(value),
                        ...Object.fromEntries(new Map(Array.from(this.#_state_keys, (key) => {
                            return [key, this.$states[`${key}`]];
                        })))
                    });
                }
                this.$states[key] = JSON.stringify(value);
            }
        });
        this[key] = value;
        return this.useState(key);
    };
    useState = (key) => {
        return [this[key], (newValue) => {
                console.log({ newValue });
                this[key] = newValue;
            }];
    };
    createConsumable = (key, value) => {
        state(this, key, value, false);
    };
    constructor(data) {
        Object.assign(this, data);
    }
    static init(data) {
        return new ComponentExecutionContext(data);
    }
}
export function render(template, container = document.body, data = {}) {
    let context = ComponentExecutionContext.init(data);
    return template.render(context, container);
}
//# sourceMappingURL=index.js.map