import { Directive , directive } from './index.js';
import { CSSObject , createCSS } from '../../utils/css-object/index.js'

export class UseStyleDirective extends Directive{

  render( cssObject:CSSObject ){

    let style = createCSS( cssObject );

    return `${style}`
  }

}

export const useStyle = directive( UseStyleDirective );