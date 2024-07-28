import { 
  _cssObject 
} from './models.js';

import type {
  CSSProperties,
} from './types.js'

export{
  _cssObject,
  CSSProperties
}

export function createCSS( css:Partial<CSSProperties> ){
  return _cssObject.init( css );
}