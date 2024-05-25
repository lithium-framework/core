export { FlyComponent } from './models.js';
export { Directive, asyncAppend, AsyncAppendDirective, asyncReplace, AsyncReplaceDirective, cache, CacheDirective, choose, classMap, ClassInfo, ClassMapDirective, guard, GuardDirective, ifDefined, join, keyed, Keyed, live, LiveDirective, map, range, ref, Ref, RefDirective, createRef, RefOrCallback, repeat, RepeatDirective, RepeatDirectiveFn, styleMap, StyleMapDirective, templateContent, TemplateContentDirective, unsafeHTML, UnsafeHTMLDirective, unsafeSVG, UnsafeSVGDirective, until, UntilDirective, when, useState, UseStateDirective, useStyle, UseStyleDirective, useEffect, UseEffectDirective } from './directives/index.js';
export {} from './decorators/index.js';
export { html, css, TemplateResult, TemplateInstance } from 'lit';
import { TemplateResult } from 'lit';
export declare function render(element: TemplateResult, parent?: HTMLElement | DocumentFragment): import("lit-html").RootPart;
