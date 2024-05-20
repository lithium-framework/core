import { Directive } from './../directives/index';
import { CSSObject } from '../css-object/css-object';
export declare class UseStyleDirective extends Directive {
    render(cssObject: CSSObject): string;
}
export declare const useStyle: (cssObject: Partial<import("csstype").Properties<0 | (string & {}), string & {}>>) => import("lit-html/directive").DirectiveResult<typeof UseStyleDirective>;
