// import { html as lithtml , render as litRender , TemplateResult } from 'lit-html';
import * as Utils from './utils/index.js';
import { WebComponent } from './webComponent/index.js';

export * from './dom/index.js';
export * from './decorators/index.js';
export * from './directives/index.js';
export * from './dom/application/index.js';
export * from './utils/index.js';
export * from './webComponent/index.js';

(() => {
  if(!window["lithium"]) window["lithium"] = {
    Utils,
    WebComponent
  };
  
})()