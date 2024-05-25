// import { html as lithtml , render as litRender , TemplateResult } from 'lit-html';
import { html as lithtml, render as litRender } from 'lit';
import { createState, State } from '@lithium-framework/state';
import { _cssObject, createCSS } from './utils/css-object/index.js';
import { useState } from './flyComponent/directives/use-state.js';
import { useStyle } from './flyComponent/directives/use-style.js';
import { useEffect } from './flyComponent/directives/use-effect.js';
export { RouterConfiguration, Route, FASTRouter } from '@microsoft/fast-router';
export { html as fasthtml, FASTElement, customElement } from '@microsoft/fast-element';
export { createPage } from './page/index.js';
export function html(string, ...args) {
    let template = lithtml(string, ...args);
    return template;
}
export function render(element, parent = document.createDocumentFragment()) {
    return litRender(element, parent);
}
export { _cssObject, createCSS };
export { createState, State };
export * as Directives from './flyComponent/directives/index.js';
(() => {
    if (!window["lithium"])
        window["lithium"] = {
            html,
            render,
            createState,
            createCSS,
            useState,
            useStyle,
            useEffect
        };
})();
//# sourceMappingURL=index.js.map