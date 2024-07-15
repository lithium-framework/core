import { HTMLDirective, HTMLBindingDirective, html, Binding } from '@microsoft/fast-element';
export class AsyncAppendBindig extends Binding {
    createObserver(subscriber, directive) {
        console.log({ subscriber, directive });
        return {
            bind(controller) {
                console.log({ controller });
            }
        };
    }
}
export class AsyncAppendDirective extends HTMLBindingDirective {
    fn = null;
    callback = null;
    constructor(fn, callback) {
        super(new AsyncAppendBindig((x) => null));
        Object.assign(this, { fn, callback });
    }
    createBehavior() {
        let { targetNodeId } = this;
        return {
            bind: (source) => {
                let target = source.targets[targetNodeId];
                this.fn
                    .then((result) => {
                    this.callback(result).render(source, target instanceof HTMLElement ? target : target.parentElement);
                })
                    .catch((error) => {
                    console.error(error);
                    html `<span>Error: ${error}</span>`.render(source, target instanceof HTMLElement ? target : target.parentElement);
                });
            },
            unbind: () => {
                // Nettoyage si nécessaire
            }
        };
    }
    static use(fn, callback) {
        return new AsyncAppendDirective(fn, callback);
    }
}
HTMLDirective.define(AsyncAppendDirective);
export const asyncAppend = (fn, callback) => AsyncAppendDirective.use(fn, callback);
//# sourceMappingURL=assyncAppend.js.map