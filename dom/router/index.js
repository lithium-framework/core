var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { render } from '../../dom/index.js';
import { customElement, WebComponent, html } from '../../webComponent/index.js';
import RouteRecognizer from 'route-recognizer';
if ('URLPattern' in globalThis == false) {
    await import("urlpattern-polyfill");
}
/* The `Routes` class extends `RouteRecognizer` and constructs routes based on the provided
`routeConfig` array. */
class Routes extends RouteRecognizer {
    routeConfig;
    constructor(router, routeConfig) {
        super();
        routeConfig.forEach((route) => {
            this.add([
                {
                    path: route.path,
                    handler: (params) => {
                        render(route.render, router, params);
                    },
                }
            ], route.name ? { as: route.name } : null);
        });
    }
}
/* The `Router` class is a custom web component that handles routing based on either pathname or hash,
with configurable routes and templates for header and footer. */
let Router = class Router extends WebComponent {
    /* The line `type : 'pathname-router' | 'hash-router' = 'hash-router';` is defining a property `type`
    in the `Router` class with a type of string literal union `'pathname-router' | 'hash-router'`.
    This means that the `type` property can only have one of two specific string values:
    `'pathname-router'` or `'hash-router'`. */
    type = 'hash-router';
    /* `private _config:RouteConfig[] = [];` is defining a private property `_config` in the `Router`
    class with an initial value of an empty array of `RouteConfig` objects. This property is used to
    store the route configuration provided to the `Router` instance. */
    _config = [];
    /* The line `private _routes = new Routes(this, this._config || []);` is initializing a private
    property `_routes` in the `Router` class with a new instance of the `Routes` class. The `Routes`
    class is responsible for constructing routes based on the provided `routeConfig` array. */
    _routes = new Routes(this, this._config || []);
    header;
    footer;
    get routes() {
        return new Proxy(this._routes, {
            get() { return undefined; },
            set() { return false; }
        });
    }
    get config() {
        return this._config;
    }
    set config(newConfig) {
        this._config = newConfig;
        this._routes = new Routes(this, newConfig || []);
    }
    constructor(config) {
        super();
        this.config = config;
    }
    outlet() {
        this.clear();
        let url = this.type == 'pathname-router' ? this.pathname : this.hash;
        let result = this._routes.recognize(url);
        Array.from({ length: result.length }, (i, iterator) => {
            console.log({ i, iterator });
            let route = result[iterator];
            let handler = route.handler;
            handler(route.params);
        });
    }
    onHashChange(event) {
        this.outlet();
    }
    normalizeHashLocation(hash) {
        return hash.replace('#', '');
    }
    get pathname() {
        return window.location.pathname;
    }
    get hash() {
        return this.normalizeHashLocation(window.location.hash);
    }
    clear() {
        this.childNodes.forEach((element) => {
            element.remove();
        });
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.type == 'hash-router') {
            window.addEventListener('hashchange', this.onHashChange.bind(this));
        }
        this.outlet();
        if (!window.location.hash)
            window.location.hash = '/';
    }
};
Router = __decorate([
    customElement({
        name: "lithium-router",
        template: html `<slot></slot>`
    }),
    __metadata("design:paramtypes", [Array])
], Router);
;
export { Routes, Router };
//# sourceMappingURL=index.js.map