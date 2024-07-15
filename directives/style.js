import { HTMLDirective, HTMLBindingDirective, Binding } from '@microsoft/fast-element';
export class StyleBindig extends Binding {
    createObserver(subscriber, directive) {
        console.log({ subscriber, directive });
        return {
            bind(controller) {
                console.log({ controller });
            }
        };
    }
}
export class StyleDirective extends HTMLBindingDirective {
    css = null;
    constructor(css) {
        super(new StyleBindig((x) => null));
        Object.assign(this, { css });
    }
    createBehavior() {
        let { targetNodeId } = this;
        let view = null;
        return {
            bind: (source) => {
                let target = source.targets[targetNodeId];
                if (target instanceof HTMLElement)
                    Object.assign(target.style, this.css);
            },
            unbind: () => {
                // Nettoyage si nécessaire
            }
        };
    }
    static use(css) {
        return new StyleDirective(css);
    }
}
HTMLDirective.define(StyleDirective);
export const style = (css) => StyleDirective.use(css);
//# sourceMappingURL=style.js.map