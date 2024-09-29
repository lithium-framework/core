import { Properties } from 'csstype'; 

import { 
  _cssObject 
} from './models';

export{
  _cssObject,
  Properties
}

export function createCSS( css:Partial<Properties> ){
  return _cssObject.init( css );
}