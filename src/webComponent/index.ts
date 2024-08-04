export { 
  customElement , 
  css,
  // html,
  ViewTemplate,
  HTMLView,
  volatile,
} from "@microsoft/fast-element";

import {
  html as _html,
  HTMLTemplateTag
} from "@microsoft/fast-element"

export const html:HTMLTemplateTag = _html;

export { 
  WebComponent 
} from './model';