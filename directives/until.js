import { html, HTMLDirective, HTMLBindingDirective, Binding } from '@microsoft/fast-element';
export class UntilBindig extends Binding {
    createObserver(subscriber, directive) {
        console.log({ subscriber, directive });
        return {
            bind(controller) {
                console.log({ controller });
            }
        };
    }
}
export class UntilDirective extends HTMLBindingDirective {
    fn = null;
    template = null;
    constructor(fn, template) {
        super(new UntilBindig((x) => null));
        Object.assign(this, { fn, template });
    }
    createBehavior() {
        let { targetNodeId } = this;
        return {
            bind: (source) => {
                let target = source.targets[targetNodeId];
                let loading = this.template.render(source, target instanceof HTMLElement ? target : target.parentElement);
                this.fn
                    .then((result) => {
                    loading.dispose();
                    result.render(source, target instanceof HTMLElement ? target : target.parentElement);
                })
                    .catch((error) => {
                    console.error(error);
                    loading.dispose();
                    html `<span>Error: ${error}</span>`.render(source, target instanceof HTMLElement ? target : target.parentElement);
                });
            },
            unbind: () => {
                // Nettoyage si nécessaire
            }
        };
    }
    static use(fn, template) {
        return new UntilDirective(fn, template);
    }
}
HTMLDirective.define(UntilDirective);
export const until = (fn, template) => UntilDirective.use(fn, template);
//# sourceMappingURL=until.js.map