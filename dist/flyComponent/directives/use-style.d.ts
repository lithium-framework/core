import { Directive } from './index.js';
import { CSSObject } from '../../utils/css-object/index.js';
export declare class UseStyleDirective extends Directive {
    render(cssObject: CSSObject): string;
}
export declare const useStyle: (cssObject: Partial<import("csstype").Properties<0 | (string & {}), string & {}>>) => import("lit-html/directive.js").DirectiveResult<typeof UseStyleDirective>;
