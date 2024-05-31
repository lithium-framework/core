import { Directive, directive } from './index.js';
export class UseEffectDirective extends Directive {
    get parent() { return this["_$parent"]; }
    get part() { return this["__part"]; }
    _isMounted = false;
    set _$isConnected(value) {
        alert(value);
        this._isMounted = value;
    }
    constructor(partInfo) {
        super(partInfo);
    }
    render(callback, observables = []) {
        callback(this.part.element || null);
    }
}
export const useEffect = directive(UseEffectDirective);
//# sourceMappingURL=use-effect.js.map