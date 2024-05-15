import { Directive , directive } from './../directives/index.js';
import { CSSObject , createCSS } from '../css-object/css-object.js'

export class UseStyleDirective extends Directive{

  render( cssObject:CSSObject ){

    let style = createCSS( cssObject );

    return `${style}`
  }

}

export const useStyle = directive( UseStyleDirective );