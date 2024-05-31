import { State } from '@lithium-framework/state';
import { Directive } from './index.js';
export declare class UseEffectDirective extends Directive {
    get parent(): any;
    get part(): any;
    private _isMounted;
    set _$isConnected(value: any);
    constructor(partInfo: any);
    render(callback: (target: HTMLElement) => any, observables?: State<any>[]): void;
}
export declare const useEffect: (callback: (target: HTMLElement) => any, observables?: State<any>[]) => import("lit-html/directive.js").DirectiveResult<typeof UseEffectDirective>;
