import { HTMLDirective, StatelessAttachedAttributeDirective } from '@microsoft/fast-element';
export function createRef() {
    return {
        value: null
    };
}
export class RefDirective extends StatelessAttachedAttributeDirective {
    options = null;
    constructor(options) {
        super(options);
        Object.assign(this, { options });
    }
    bind(controller) {
        let { lastChild: target } = controller;
        this.options.value = target;
    }
    static use(options) {
        return new RefDirective(options);
    }
}
HTMLDirective.define(RefDirective);
export const ref = (options) => RefDirective.use(options);
//# sourceMappingURL=ref.js.map