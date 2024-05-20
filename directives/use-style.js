import { Directive, directive } from './../directives/index';
import { createCSS } from '../css-object/css-object';
export class UseStyleDirective extends Directive {
    render(cssObject) {
        let style = createCSS(cssObject);
        return `${style}`;
    }
}
export const useStyle = directive(UseStyleDirective);
//# sourceMappingURL=use-style.js.map