import { HTMLDirective, HTMLBindingDirective, Binding } from '@microsoft/fast-element';
export class StateBindig extends Binding {
    createObserver(subscriber, directive) {
        console.log({ subscriber, directive });
        return {
            bind(controller) {
                console.log({ controller });
            }
        };
    }
}
export class StateDirective extends HTMLBindingDirective {
    _state = null;
    get state() { return this._state.mutator[0]; }
    set state(value) { this._state.mutator[1](value); }
    _callback = null;
    constructor(state, callback) {
        super(new StateBindig((x) => null));
        this._state = state;
        this._callback = callback;
    }
    createBehavior() {
        let { targetNodeId } = this;
        let view = null;
        return {
            bind: (source) => {
                let target = source.targets[targetNodeId];
                if (this._callback) {
                    this._state.subscribe(() => {
                        view.dispose();
                        view = this._callback(this.state).render(source, target.parentElement);
                    });
                    view = this._callback(this.state).render(source, target.parentElement);
                }
                else {
                    this._state.subscribe(() => {
                        if ("textContent" in target) {
                            target.textContent = `${this.state}`;
                        }
                    });
                    if ("textContent" in target) {
                        target.textContent = `${this.state}`;
                    }
                }
            },
            unbind: () => {
                // Nettoyage si nécessaire
            }
        };
    }
    static use(state, callback) {
        return new StateDirective(state, callback);
    }
}
HTMLDirective.define(StateDirective);
export const useState = (state, callback) => StateDirective.use(state, callback);
//# sourceMappingURL=state.js.map