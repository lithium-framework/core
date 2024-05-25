import { Directive, directive } from './index.js';
import { createCSS } from '../../utils/css-object/index.js';
export class UseStyleDirective extends Directive {
    render(cssObject) {
        let style = createCSS(cssObject);
        return `${style}`;
    }
}
export const useStyle = directive(UseStyleDirective);
//# sourceMappingURL=use-style.js.map