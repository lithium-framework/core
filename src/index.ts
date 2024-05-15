// import { html as lithtml , render as litRender , TemplateResult } from 'lit-html';
import { html as lithtml , render as litRender , TemplateResult , TemplateInstance  } from 'lit';
import { createState , State } from '@lithium-framework/state';
import { _cssObject , CSSObject , createCSS } from './css-object/index.js';

export { RouterConfiguration, Route , FASTRouter } from '@microsoft/fast-router';
export { html as fasthtml , FASTElement , customElement } from '@microsoft/fast-element';
export { createPage } from './page/index.js';

export type ThoriumTemplateResult = TemplateResult & {};

export function html( string:TemplateStringsArray , ...args ):ThoriumTemplateResult{

  let template = lithtml( string , ...args );

  return template;

}

export function render( element:TemplateResult , parent:HTMLElement | DocumentFragment = document.createDocumentFragment() ){
  return litRender( element , parent );
}

export { TemplateInstance };
export { _cssObject , CSSObject , createCSS };
export { createState , State };
export * as Directives from './directives/index.js';