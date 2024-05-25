import { join, map, range, when, Directive } from './directives/index.js';
export declare class FlyComponent {
    static get asyncAppend(): (value: AsyncIterable<unknown>, _mapper?: (v: unknown, index?: number) => unknown) => import("lit-html/directive.js").DirectiveResult<typeof import("lit-html/directives/async-append.js").AsyncAppendDirective>;
    static get asyncReplace(): (value: AsyncIterable<unknown>, _mapper?: (v: unknown, index?: number) => unknown) => import("lit-html/directive.js").DirectiveResult<typeof import("lit-html/directives/async-replace.js").AsyncReplaceDirective>;
    static get cache(): (v: unknown) => import("lit-html/directive.js").DirectiveResult<typeof import("lit-html/directives/cache.js").CacheDirective>;
    static get choose(): <T, V, K extends T = T>(value: T, cases: [K, () => V][], defaultCase?: () => V) => V;
    static get classMap(): (classInfo: import("lit-html/directives/class-map.js").ClassInfo) => import("lit-html/directive.js").DirectiveResult<typeof import("lit-html/directives/class-map.js").ClassMapDirective>;
    static get guard(): (_value: unknown, f: () => unknown) => import("lit-html/directive.js").DirectiveResult<typeof import("lit-html/directives/guard.js").GuardDirective>;
    static get ifDefined(): <T>(value: T) => typeof import("lit-html").nothing | NonNullable<T>;
    static get join(): typeof join;
    static get keyed(): (k: unknown, v: unknown) => import("lit-html/directive.js").DirectiveResult<typeof import("lit-html/directives/keyed.js").Keyed>;
    static get live(): (value: unknown) => import("lit-html/directive.js").DirectiveResult<typeof import("lit-html/directives/live.js").LiveDirective>;
    static get map(): typeof map;
    static get range(): typeof range;
    static get ref(): (_ref?: import("lit-html/directives/ref.js").RefOrCallback<Element>) => import("lit-html/directive.js").DirectiveResult<typeof import("lit-html/directives/ref.js").RefDirective>;
    static get repeat(): import("lit-html/directives/repeat.js").RepeatDirectiveFn;
    static get styleMap(): (styleInfo: Readonly<import("lit-html/directives/style-map.js").StyleInfo>) => import("lit-html/directive.js").DirectiveResult<typeof import("lit-html/directives/style-map.js").StyleMapDirective>;
    static get templateContent(): (template: HTMLTemplateElement) => import("lit-html/directive.js").DirectiveResult<typeof import("lit-html/directives/template-content.js").TemplateContentDirective>;
    static get unsafeHTML(): (value: string | typeof import("lit-html").nothing | typeof import("lit-html").noChange) => import("lit-html/directive.js").DirectiveResult<typeof import("lit-html/directives/unsafe-html.js").UnsafeHTMLDirective>;
    static get unsafeSVG(): (value: string | typeof import("lit-html").nothing | typeof import("lit-html").noChange) => import("lit-html/directive.js").DirectiveResult<typeof import("lit-html/directives/unsafe-svg.js").UnsafeSVGDirective>;
    static get until(): (...values: unknown[]) => import("lit-html/directive.js").DirectiveResult<typeof import("lit-html/directives/until.js").UntilDirective>;
    static get when(): typeof when;
    static get useState(): (state: any, callback?: (value: any) => any) => import("lit-html/directive.js").DirectiveResult<{
        new (partInfo: any): import("./directives/use-state.js").UseStateDirective<any>;
    }>;
    static get useStyle(): (cssObject: Partial<import("csstype").Properties<0 | (string & {}), string & {}>>) => import("lit-html/directive.js").DirectiveResult<typeof import("./directives/use-style.js").UseStyleDirective>;
    static get useEffect(): (callback: (target: HTMLElement) => any, observables?: import("@lithium-framework/state").State<any>[]) => import("lit-html/directive.js").DirectiveResult<typeof import("./directives/use-effect.js").UseEffectDirective>;
    static get directive(): <C extends import("lit-html/directive.js").DirectiveClass>(c: C) => (...values: Parameters<InstanceType<C>["render"]>) => import("lit-html/directive.js").DirectiveResult<C>;
}
export { Directive };
