// import { html as lithtml , render as litRender , TemplateResult } from 'lit-html';
import { createState , State } from '@lithium-framework/state';
import * as Utils from './utils/index.js';

export { createPage } from './page/index.js';
export { createState , State };

(() => {
  if(!window["lithium"]) window["lithium"] = {
    createState,
    Utils
  };
})()