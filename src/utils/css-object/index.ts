import { 
  _cssObject 
} from './models.js';

import {
  CSSProperties,
  CSSObject
} from './types.js'

export{
  _cssObject,
  CSSProperties,
  CSSObject
}

export function createCSS( css:CSSObject ){
  return _cssObject.init( css );
}