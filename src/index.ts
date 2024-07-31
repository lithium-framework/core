import * as DOM from './dom/index.js';
import * as Decorators from './decorators/index.js';
import * as Directives from './directives/index.js';
import * as Utils from './utils/index.js';
import * as Component from './webComponent/index.js'

export * from './dom';
export * from './decorators';
export * from './directives';
export * from './utils';
export * from './webComponent';

// import { MainApplication } from './dom/index.js';

export declare module global{
  interface HTMLElementTagNameMap{
    // 'lithium-router' : Router;
    // 'main-application' : MainApplication;
  }
}

// namespace Lithium{
//   export const DOM = require('./dom/index.js');
//   export const Decorators = require('./decorators/index.js');
//   export const Directives = require('./directives/index.js');
//   export const Utils = require('./utils/index.js');
//   export const Component = require('./webComponent/index.js');
// };

// export default Lithium;

// (() => {

//   if(globalThis.window){

//     window['lithium'] = {

//     };

//   }
  
// })()