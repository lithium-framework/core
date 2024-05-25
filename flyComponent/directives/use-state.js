import { Directive, directive } from './index.js';
import { render } from '../index.js';
export class UseStateDirective extends Directive {
    get parent() { return this["_$parent"]; }
    get part() { return this["__part"]; }
    constructor(partInfo) {
        super(partInfo);
    }
    render(state, callback) {
        state.subscribe((newValue) => {
            let callback_result = callback ? callback(newValue) : null;
            try {
                if (callback_result && typeof callback_result == "object")
                    return render(callback_result, this.part.parentNode);
                else if (callback_result)
                    return callback_result;
            }
            catch (error) {
                console.error(error);
            }
            if (!callback_result)
                this.part["_$setValue"](newValue);
        });
        let callback_result = callback ? callback(state.value) : null;
        try {
            if (callback_result && typeof callback_result == "object") {
                render(callback_result, this.part.parentNode);
                return;
            }
            else if (callback_result)
                return callback_result;
        }
        catch (error) {
        }
        return state.value;
    }
}
export const useState = directive((UseStateDirective));
//# sourceMappingURL=use-state.js.map