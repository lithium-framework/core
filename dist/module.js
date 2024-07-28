import {Observable as $hgUW1$Observable, attr as $535bb7ac3b1a1d6d$re_export$attr, observable as $535bb7ac3b1a1d6d$re_export$observable, customElement as $c5a7ff2cef84a00c$re_export$customElement, css as $c5a7ff2cef84a00c$re_export$css, html as $c5a7ff2cef84a00c$re_export$html, ViewTemplate as $c5a7ff2cef84a00c$re_export$ViewTemplate, HTMLView as $c5a7ff2cef84a00c$re_export$HTMLView, SyntheticView as $c5a7ff2cef84a00c$re_export$SyntheticView, volatile as $c5a7ff2cef84a00c$re_export$volatile, FASTElement as $hgUW1$FASTElement, when as $5193209399721411$re_export$when, repeat as $5193209399721411$re_export$repeat, children as $5193209399721411$re_export$children, elements as $5193209399721411$re_export$elements, slotted as $5193209399721411$re_export$slotted, Binding as $hgUW1$Binding, HTMLBindingDirective as $hgUW1$HTMLBindingDirective, HTMLDirective as $hgUW1$HTMLDirective, StatelessAttachedAttributeDirective as $hgUW1$StatelessAttachedAttributeDirective} from "@microsoft/fast-element";
import $hgUW1$routerecognizer from "route-recognizer";
import {URLPattern as $hgUW1$URLPattern} from "urlpattern-polyfill";


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
var $ed2a677aa7485959$exports = {};

$parcel$export($ed2a677aa7485959$exports, "ComponentExecutionContext", () => $ed2a677aa7485959$export$6dad889f9b7e7685);
$parcel$export($ed2a677aa7485959$exports, "render", () => $ed2a677aa7485959$export$b3890eb0ae9dca99);

class $f0b90d4a5f4da766$export$b176171395436676 extends Object {
    static init(initialObject) {
        let observabe = new $f0b90d4a5f4da766$export$b176171395436676(initialObject);
        return observabe.createProxy();
    }
    constructor(initialObject){
        super();
        this.$data = {};
        this.set = (key, value)=>{
            this.$data[`_${key}`] = value;
            (0, $hgUW1$Observable).defineProperty(this.$data, key);
            return this.$data[key];
        };
        Object.keys(initialObject).forEach((key)=>{
            this.set(key, initialObject[key]);
        });
    }
    createProxy() {
        return new Proxy(this.$data, {
            get (store, propKey) {
                let result = undefined;
                try {
                    result = store[propKey];
                } catch (error) {
                    console.error(error);
                } finally{
                    return result;
                }
            },
            set (store, propKey, value) {
                if (store[propKey]) store[propKey] = value;
                else {
                    store[`_${propKey}`] = value;
                    (0, $hgUW1$Observable).defineProperty(store, propKey);
                }
                return true;
            }
        });
    }
}


function $592e71a4a1bc8d5d$export$dcc5cf24d8fb3b41(initialObject) {
    return (0, $f0b90d4a5f4da766$export$b176171395436676).init(initialObject);
}


var $535bb7ac3b1a1d6d$exports = {};

$parcel$export($535bb7ac3b1a1d6d$exports, "attr", () => $535bb7ac3b1a1d6d$re_export$attr);
$parcel$export($535bb7ac3b1a1d6d$exports, "observable", () => $535bb7ac3b1a1d6d$re_export$observable);
var $b1b98f19caab25c2$exports = {};

$parcel$export($b1b98f19caab25c2$exports, "attrState", () => $b1b98f19caab25c2$export$683a0e8baad8b9c3);

var $a1f8df21dd3b8ee9$exports = {};

$parcel$export($a1f8df21dd3b8ee9$exports, "state", () => $a1f8df21dd3b8ee9$export$ca000e230c0caa3e);

function $a1f8df21dd3b8ee9$export$ca000e230c0caa3e(target, propertyKey, value = null, constructible = false) {
    if (constructible) target.constructor.states = target.constructor.states || {};
    Object.defineProperty(target, propertyKey, {
        get () {
            return target.$states[propertyKey];
        },
        set (newValue) {
            target.$states[propertyKey] = newValue;
            return true;
        },
        enumerable: true,
        configurable: true
    });
    (0, $535bb7ac3b1a1d6d$re_export$observable)(target, propertyKey);
    if (value) target[propertyKey] = value;
}


function $b1b98f19caab25c2$export$683a0e8baad8b9c3(options = {}) {
    return (target, propertyKey)=>{
        (0, $535bb7ac3b1a1d6d$re_export$attr)(options)(target, propertyKey);
        (0, $a1f8df21dd3b8ee9$export$ca000e230c0caa3e)(target, propertyKey);
    };
}




$parcel$exportWildcard($535bb7ac3b1a1d6d$exports, $b1b98f19caab25c2$exports);
$parcel$exportWildcard($535bb7ac3b1a1d6d$exports, $a1f8df21dd3b8ee9$exports);


var $c5a7ff2cef84a00c$exports = {};

$parcel$export($c5a7ff2cef84a00c$exports, "customElement", () => $c5a7ff2cef84a00c$re_export$customElement);
$parcel$export($c5a7ff2cef84a00c$exports, "css", () => $c5a7ff2cef84a00c$re_export$css);
$parcel$export($c5a7ff2cef84a00c$exports, "html", () => $c5a7ff2cef84a00c$re_export$html);
$parcel$export($c5a7ff2cef84a00c$exports, "Observable", () => $c5a7ff2cef84a00c$re_export$Observable);
$parcel$export($c5a7ff2cef84a00c$exports, "ViewTemplate", () => $c5a7ff2cef84a00c$re_export$ViewTemplate);
$parcel$export($c5a7ff2cef84a00c$exports, "HTMLView", () => $c5a7ff2cef84a00c$re_export$HTMLView);
$parcel$export($c5a7ff2cef84a00c$exports, "SyntheticView", () => $c5a7ff2cef84a00c$re_export$SyntheticView);
$parcel$export($c5a7ff2cef84a00c$exports, "volatile", () => $c5a7ff2cef84a00c$re_export$volatile);
$parcel$export($c5a7ff2cef84a00c$exports, "WebComponent", () => $284c1ee70f828408$export$7f8b9f308979d41d);
$parcel$export($c5a7ff2cef84a00c$exports, "attr", () => $535bb7ac3b1a1d6d$re_export$attr);
$parcel$export($c5a7ff2cef84a00c$exports, "observable", () => $535bb7ac3b1a1d6d$re_export$observable);
$parcel$export($c5a7ff2cef84a00c$exports, "state", () => $a1f8df21dd3b8ee9$export$ca000e230c0caa3e);
$parcel$export($c5a7ff2cef84a00c$exports, "attrState", () => $b1b98f19caab25c2$export$683a0e8baad8b9c3);
$parcel$export($c5a7ff2cef84a00c$exports, "when", () => $5193209399721411$re_export$when);
$parcel$export($c5a7ff2cef84a00c$exports, "repeat", () => $5193209399721411$re_export$repeat);
$parcel$export($c5a7ff2cef84a00c$exports, "ref", () => $f6651d38d609160e$export$eff4d24c3ff7876e);
$parcel$export($c5a7ff2cef84a00c$exports, "children", () => $5193209399721411$re_export$children);
$parcel$export($c5a7ff2cef84a00c$exports, "slotted", () => $5193209399721411$re_export$slotted);



class $284c1ee70f828408$export$7f8b9f308979d41d extends (0, $hgUW1$FASTElement) {
    constructor(){
        super();
        /* The line ` = ObservableObject.init( this.constructor["states"] );` is initializing an
    instance property named `` on the `WebComponent` class. This property is being set to the
    result of calling the `init` method of the `ObservableObject` class, passing in the initial state
    values defined in the `states` static property of the `WebComponent` class
    (`this.constructor["states"]`). */ this.$states = (0, $f0b90d4a5f4da766$export$b176171395436676).init(this.constructor["states"]);
        Object.keys(this.constructor["states"]).forEach((key)=>{
            // delete this[key];
            Object.defineProperty(this, key, {
                get () {
                    return this.$states[key];
                },
                set (value) {
                    this.$states[key] = value;
                }
            });
        });
    }
    connectedCallback() {
        super.connectedCallback();
    }
}
/* The `static states = {};` line is declaring a static property named `states` on the `WebComponent`
class and initializing it as an empty object `{}`. This property is intended to hold the initial
state values for the component. By defining it as a static property, it is shared among all
instances of the `WebComponent` class rather than being specific to individual instances. This
allows all instances of the class to access and modify the same set of state values. */ $284c1ee70f828408$export$7f8b9f308979d41d.states = {};
$284c1ee70f828408$export$7f8b9f308979d41d.define = (0, $hgUW1$FASTElement).define;



var $5193209399721411$exports = {};

$parcel$export($5193209399721411$exports, "when", () => $5193209399721411$re_export$when);
$parcel$export($5193209399721411$exports, "repeat", () => $5193209399721411$re_export$repeat);
$parcel$export($5193209399721411$exports, "children", () => $5193209399721411$re_export$children);
$parcel$export($5193209399721411$exports, "elements", () => $5193209399721411$re_export$elements);
$parcel$export($5193209399721411$exports, "slotted", () => $5193209399721411$re_export$slotted);

var $21522158c10703ef$exports = {};

$parcel$export($21522158c10703ef$exports, "AsyncAppendBindig", () => $21522158c10703ef$export$ca3487b83ec6860a);
$parcel$export($21522158c10703ef$exports, "AsyncAppendDirective", () => $21522158c10703ef$export$5761d9f85430a54b);
$parcel$export($21522158c10703ef$exports, "asyncAppend", () => $21522158c10703ef$export$eaa89ade56b7c0c1);

class $21522158c10703ef$export$ca3487b83ec6860a extends (0, $hgUW1$Binding) {
    createObserver(subscriber, directive) {
        console.log({
            subscriber: subscriber,
            directive: directive
        });
        return {
            bind (controller) {
                console.log({
                    controller: controller
                });
            }
        };
    }
}
class $21522158c10703ef$export$5761d9f85430a54b extends (0, $hgUW1$HTMLBindingDirective) {
    constructor(fn, callback){
        super(new $21522158c10703ef$export$ca3487b83ec6860a((x)=>null));
        this.fn = null;
        this.callback = null;
        Object.assign(this, {
            fn: fn,
            callback: callback
        });
    }
    createBehavior() {
        let { targetNodeId: targetNodeId } = this;
        return {
            bind: (source)=>{
                let target = source.targets[targetNodeId];
                this.fn.then((result)=>{
                    this.callback(result).render(source, target instanceof HTMLElement ? target : target.parentElement);
                }).catch((error)=>{
                    console.error(error);
                    (0, $c5a7ff2cef84a00c$re_export$html)`<span>Error: ${error}</span>`.render(source, target instanceof HTMLElement ? target : target.parentElement);
                });
            },
            unbind: ()=>{
            // Nettoyage si nécessaire
            }
        };
    }
    static use(fn, callback) {
        return new $21522158c10703ef$export$5761d9f85430a54b(fn, callback);
    }
}
(0, $hgUW1$HTMLDirective).define($21522158c10703ef$export$5761d9f85430a54b);
const $21522158c10703ef$export$eaa89ade56b7c0c1 = (fn, callback)=>$21522158c10703ef$export$5761d9f85430a54b.use(fn, callback);


var $f6651d38d609160e$exports = {};

$parcel$export($f6651d38d609160e$exports, "createRef", () => $f6651d38d609160e$export$7d1e3a5e95ceca43);
$parcel$export($f6651d38d609160e$exports, "RefDirective", () => $f6651d38d609160e$export$1ef8aea9a6de98d);
$parcel$export($f6651d38d609160e$exports, "ref", () => $f6651d38d609160e$export$eff4d24c3ff7876e);

function $f6651d38d609160e$export$7d1e3a5e95ceca43() {
    return {
        value: null
    };
}
class $f6651d38d609160e$export$1ef8aea9a6de98d extends (0, $hgUW1$StatelessAttachedAttributeDirective) {
    constructor(options){
        super(options);
        this.options = null;
        Object.assign(this, {
            options: options
        });
    }
    bind(controller) {
        let { lastChild: target } = controller;
        this.options.value = target;
    }
    static use(options) {
        return new $f6651d38d609160e$export$1ef8aea9a6de98d(options);
    }
}
(0, $hgUW1$HTMLDirective).define($f6651d38d609160e$export$1ef8aea9a6de98d);
const $f6651d38d609160e$export$eff4d24c3ff7876e = (options)=>$f6651d38d609160e$export$1ef8aea9a6de98d.use(options);


var $c66c6ea353620255$exports = {};

$parcel$export($c66c6ea353620255$exports, "StateBindig", () => $c66c6ea353620255$export$28205fa712822499);
$parcel$export($c66c6ea353620255$exports, "StateDirective", () => $c66c6ea353620255$export$792c882b75ca2192);
$parcel$export($c66c6ea353620255$exports, "useState", () => $c66c6ea353620255$export$60241385465d0a34);
// import { ViewTemplate, HTMLBindingDirective, ExecutionContext } from '@microsoft/fast-element';

class $c66c6ea353620255$export$28205fa712822499 extends (0, $hgUW1$Binding) {
    createObserver(subscriber, directive) {
        console.log({
            subscriber: subscriber,
            directive: directive
        });
        return {
            bind (controller) {
                console.log({
                    controller: controller
                });
            }
        };
    }
}
class $c66c6ea353620255$export$792c882b75ca2192 extends (0, $hgUW1$HTMLBindingDirective) {
    get state() {
        return this._state.mutator[0];
    }
    set state(value) {
        this._state.mutator[1](value);
    }
    constructor(state, callback){
        super(new $c66c6ea353620255$export$28205fa712822499((x)=>null));
        this._state = null;
        this._callback = null;
        this._state = state;
        this._callback = callback;
    }
    createBehavior() {
        let { targetNodeId: targetNodeId } = this;
        let view = null;
        return {
            bind: (source)=>{
                let target = source.targets[targetNodeId];
                if (this._callback) {
                    this._state.subscribe(()=>{
                        view.dispose();
                        view = this._callback(this.state).render(source, target.parentElement);
                    });
                    view = this._callback(this.state).render(source, target.parentElement);
                } else {
                    this._state.subscribe(()=>{
                        if ("textContent" in target) target.textContent = `${this.state}`;
                    });
                    if ("textContent" in target) target.textContent = `${this.state}`;
                }
            },
            unbind: ()=>{
            // Nettoyage si nécessaire
            }
        };
    }
    static use(state, callback) {
        return new $c66c6ea353620255$export$792c882b75ca2192(state, callback);
    }
}
(0, $hgUW1$HTMLDirective).define($c66c6ea353620255$export$792c882b75ca2192);
const $c66c6ea353620255$export$60241385465d0a34 = (state, callback)=>$c66c6ea353620255$export$792c882b75ca2192.use(state, callback);


var $6e530dd7df9f7fe5$exports = {};

$parcel$export($6e530dd7df9f7fe5$exports, "StyleBindig", () => $6e530dd7df9f7fe5$export$81053cd05d55c9d8);
$parcel$export($6e530dd7df9f7fe5$exports, "StyleDirective", () => $6e530dd7df9f7fe5$export$18211b6e76035cfa);
$parcel$export($6e530dd7df9f7fe5$exports, "style", () => $6e530dd7df9f7fe5$export$1d567c320f4763bc);

class $6e530dd7df9f7fe5$export$81053cd05d55c9d8 extends (0, $hgUW1$Binding) {
    createObserver(subscriber, directive) {
        console.log({
            subscriber: subscriber,
            directive: directive
        });
        return {
            bind (controller) {
                console.log({
                    controller: controller
                });
            }
        };
    }
}
class $6e530dd7df9f7fe5$export$18211b6e76035cfa extends (0, $hgUW1$HTMLBindingDirective) {
    constructor(css){
        super(new $6e530dd7df9f7fe5$export$81053cd05d55c9d8((x)=>null));
        this.css = null;
        Object.assign(this, {
            css: css
        });
    }
    createBehavior() {
        let { targetNodeId: targetNodeId } = this;
        let view = null;
        return {
            bind: (source)=>{
                let target = source.targets[targetNodeId];
                if (target instanceof HTMLElement) Object.assign(target.style, this.css);
            },
            unbind: ()=>{
            // Nettoyage si nécessaire
            }
        };
    }
    static use(css) {
        return new $6e530dd7df9f7fe5$export$18211b6e76035cfa(css);
    }
}
(0, $hgUW1$HTMLDirective).define($6e530dd7df9f7fe5$export$18211b6e76035cfa);
const $6e530dd7df9f7fe5$export$1d567c320f4763bc = (css)=>$6e530dd7df9f7fe5$export$18211b6e76035cfa.use(css);


var $15db1e855f042fe6$exports = {};

$parcel$export($15db1e855f042fe6$exports, "UntilBindig", () => $15db1e855f042fe6$export$f36d8f10294685f8);
$parcel$export($15db1e855f042fe6$exports, "UntilDirective", () => $15db1e855f042fe6$export$51c6edf8ee19b71a);
$parcel$export($15db1e855f042fe6$exports, "until", () => $15db1e855f042fe6$export$a40009bd2c363351);

class $15db1e855f042fe6$export$f36d8f10294685f8 extends (0, $hgUW1$Binding) {
    createObserver(subscriber, directive) {
        console.log({
            subscriber: subscriber,
            directive: directive
        });
        return {
            bind (controller) {
                console.log({
                    controller: controller
                });
            }
        };
    }
}
class $15db1e855f042fe6$export$51c6edf8ee19b71a extends (0, $hgUW1$HTMLBindingDirective) {
    constructor(fn, template){
        super(new $15db1e855f042fe6$export$f36d8f10294685f8((x)=>null));
        this.fn = null;
        this.template = null;
        Object.assign(this, {
            fn: fn,
            template: template
        });
    }
    createBehavior() {
        let { targetNodeId: targetNodeId } = this;
        return {
            bind: (source)=>{
                let target = source.targets[targetNodeId];
                let loading = this.template.render(source, target instanceof HTMLElement ? target : target.parentElement);
                this.fn.then((result)=>{
                    loading.dispose();
                    result.render(source, target instanceof HTMLElement ? target : target.parentElement);
                }).catch((error)=>{
                    console.error(error);
                    loading.dispose();
                    (0, $c5a7ff2cef84a00c$re_export$html)`<span>Error: ${error}</span>`.render(source, target instanceof HTMLElement ? target : target.parentElement);
                });
            },
            unbind: ()=>{
            // Nettoyage si nécessaire
            }
        };
    }
    static use(fn, template) {
        return new $15db1e855f042fe6$export$51c6edf8ee19b71a(fn, template);
    }
}
(0, $hgUW1$HTMLDirective).define($15db1e855f042fe6$export$51c6edf8ee19b71a);
const $15db1e855f042fe6$export$a40009bd2c363351 = (fn, template)=>$15db1e855f042fe6$export$51c6edf8ee19b71a.use(fn, template);


$parcel$exportWildcard($5193209399721411$exports, $21522158c10703ef$exports);
$parcel$exportWildcard($5193209399721411$exports, $f6651d38d609160e$exports);
$parcel$exportWildcard($5193209399721411$exports, $c66c6ea353620255$exports);
$parcel$exportWildcard($5193209399721411$exports, $6e530dd7df9f7fe5$exports);
$parcel$exportWildcard($5193209399721411$exports, $15db1e855f042fe6$exports);







var $5211880aa6805451$var$_dec, $5211880aa6805451$var$_class;

if ("URLPattern" in globalThis == false) $5211880aa6805451$importAsync$f40f203e15790ca2.then(({ URLPattern: URLPattern })=>{
    window["URLPattern"] = URLPattern;
});
/* The `Routes` class extends `RouteRecognizer` and constructs routes based on the provided
`routeConfig` array. */ class $5211880aa6805451$export$3565eb3d00ca5a74 extends (0, $hgUW1$routerecognizer) {
    constructor(router, routeConfig){
        super();
        this.routeConfig = void 0;
        routeConfig.forEach((route)=>{
            this.add([
                {
                    path: route.path,
                    handler: (params)=>{
                        (0, $ed2a677aa7485959$export$b3890eb0ae9dca99)(route.render, router, params);
                    }
                }
            ], route.name ? {
                as: route.name
            } : null);
        });
    }
}
/* The `Router` class is a custom web component that handles routing based on either pathname or hash,
with configurable routes and templates for header and footer. */ let $5211880aa6805451$export$55185c17a0fcbe46 = ($5211880aa6805451$var$_dec = (0, $c5a7ff2cef84a00c$re_export$customElement)({
    name: "lithium-router",
    template: (0, $c5a7ff2cef84a00c$re_export$html)`<slot></slot>`
}), $5211880aa6805451$var$_dec($5211880aa6805451$var$_class = class Router extends (0, $284c1ee70f828408$export$7f8b9f308979d41d) {
    get routes() {
        return new Proxy(this._routes, {
            get () {
                return undefined;
            },
            set () {
                return false;
            }
        });
    }
    get config() {
        return this._config;
    }
    set config(newConfig) {
        this._config = newConfig;
        this._routes = new $5211880aa6805451$export$3565eb3d00ca5a74(this, newConfig || []);
    }
    constructor(config){
        super();
        /* The line `type : 'pathname-router' | 'hash-router' = 'hash-router';` is defining a property `type`
    in the `Router` class with a type of string literal union `'pathname-router' | 'hash-router'`.
    This means that the `type` property can only have one of two specific string values:
    `'pathname-router'` or `'hash-router'`. */ this.type = "hash-router";
        /* `private _config:RouteConfig[] = [];` is defining a private property `_config` in the `Router`
    class with an initial value of an empty array of `RouteConfig` objects. This property is used to
    store the route configuration provided to the `Router` instance. */ this._config = [];
        /* The line `private _routes = new Routes(this, this._config || []);` is initializing a private
    property `_routes` in the `Router` class with a new instance of the `Routes` class. The `Routes`
    class is responsible for constructing routes based on the provided `routeConfig` array. */ this._routes = new $5211880aa6805451$export$3565eb3d00ca5a74(this, this._config || []);
        this.header = void 0;
        this.footer = void 0;
        this.config = config;
    }
    outlet() {
        this.clear();
        let url = this.type == "pathname-router" ? this.pathname : this.hash;
        let result = this._routes.recognize(url);
        Array.from({
            length: result.length
        }, (i, iterator)=>{
            console.log({
                i: i,
                iterator: iterator
            });
            let route = result[iterator];
            let handler = route.handler;
            handler(route.params);
        });
    }
    onHashChange(event) {
        this.outlet();
    }
    normalizeHashLocation(hash) {
        return hash.replace("#", "");
    }
    get pathname() {
        return window.location.pathname;
    }
    get hash() {
        return this.normalizeHashLocation(window.location.hash);
    }
    clear() {
        this.childNodes.forEach((element)=>{
            element.remove();
        });
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.type == "hash-router") window.addEventListener("hashchange", this.onHashChange.bind(this));
        this.outlet();
        if (!window.location.hash) window.location.hash = "/";
    }
}) || $5211880aa6805451$var$_class);


var $58b1a70560c56188$var$_dec, $58b1a70560c56188$var$_class;
/* The MainApplication class extends Router and specifies a type property for routing configuration. */ let $58b1a70560c56188$export$1fca9e344729142c = ($58b1a70560c56188$var$_dec = (0, $c5a7ff2cef84a00c$re_export$customElement)({
    name: "main-application",
    template: (0, $c5a7ff2cef84a00c$re_export$html)`<slot></slot>`
}), $58b1a70560c56188$var$_dec($58b1a70560c56188$var$_class = class MainApplication extends (0, $5211880aa6805451$export$55185c17a0fcbe46) {
    constructor(config){
        super(config);
        this.type = "pathname-router";
    }
    connectedCallback() {
        super.connectedCallback();
    }
}) || $58b1a70560c56188$var$_class);



function $ed2a677aa7485959$var$_classPrivateFieldLooseBase(e, t) {
    if (!({}).hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
    return e;
}
var $ed2a677aa7485959$var$id = 0;
function $ed2a677aa7485959$var$_classPrivateFieldLooseKey(e) {
    return "__private_" + $ed2a677aa7485959$var$id++ + "_" + e;
}
var $ed2a677aa7485959$var$_state_keys = /*#__PURE__*/ $ed2a677aa7485959$var$_classPrivateFieldLooseKey("_state_keys");
class $ed2a677aa7485959$export$6dad889f9b7e7685 {
    get states() {
        return this.$states;
    }
    constructor(data){
        this.$states = (0, $f0b90d4a5f4da766$export$b176171395436676).init({});
        Object.defineProperty(this, $ed2a677aa7485959$var$_state_keys, {
            writable: true,
            value: []
        });
        this.createState = (key, value)=>{
            if ($ed2a677aa7485959$var$_classPrivateFieldLooseBase(this, $ed2a677aa7485959$var$_state_keys)[$ed2a677aa7485959$var$_state_keys].includes(key)) return this.useState(key);
            Object.defineProperty(this, key, {
                get () {
                    return JSON.parse(this.states[key]);
                },
                set (value) {
                    if (!$ed2a677aa7485959$var$_classPrivateFieldLooseBase(this, $ed2a677aa7485959$var$_state_keys)[$ed2a677aa7485959$var$_state_keys].includes(key)) {
                        $ed2a677aa7485959$var$_classPrivateFieldLooseBase(this, $ed2a677aa7485959$var$_state_keys)[$ed2a677aa7485959$var$_state_keys].push(key);
                        this.$states = (0, $f0b90d4a5f4da766$export$b176171395436676).init({
                            [key]: JSON.stringify(value),
                            ...Object.fromEntries(new Map(Array.from($ed2a677aa7485959$var$_classPrivateFieldLooseBase(this, $ed2a677aa7485959$var$_state_keys)[$ed2a677aa7485959$var$_state_keys], (key)=>{
                                return [
                                    key,
                                    this.$states[`${key}`]
                                ];
                            })))
                        });
                    }
                    this.$states[key] = JSON.stringify(value);
                }
            });
            this[key] = value;
            return this.useState(key);
        };
        this.useState = (key)=>{
            return [
                this[key],
                (newValue)=>{
                    console.log({
                        newValue: newValue
                    });
                    this[key] = newValue;
                }
            ];
        };
        this.createConsumable = (key, value)=>{
            (0, $a1f8df21dd3b8ee9$export$ca000e230c0caa3e)(this, key, value, false);
        };
        Object.assign(this, data);
    }
    static init(data) {
        return new $ed2a677aa7485959$export$6dad889f9b7e7685(data);
    }
}
function $ed2a677aa7485959$export$b3890eb0ae9dca99(template, container = document.body, data = {}) {
    let context = $ed2a677aa7485959$export$6dad889f9b7e7685.init(data);
    return template.render(context, container);
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


export {$ed2a677aa7485959$export$6dad889f9b7e7685 as ComponentExecutionContext, $ed2a677aa7485959$export$b3890eb0ae9dca99 as render, $535bb7ac3b1a1d6d$re_export$attr as attr, $535bb7ac3b1a1d6d$re_export$attr as attr, $535bb7ac3b1a1d6d$re_export$observable as observable, $535bb7ac3b1a1d6d$re_export$observable as observable, $b1b98f19caab25c2$export$683a0e8baad8b9c3 as attrState, $b1b98f19caab25c2$export$683a0e8baad8b9c3 as attrState, $a1f8df21dd3b8ee9$export$ca000e230c0caa3e as state, $a1f8df21dd3b8ee9$export$ca000e230c0caa3e as state, $5193209399721411$re_export$when as when, $5193209399721411$re_export$when as when, $5193209399721411$re_export$repeat as repeat, $5193209399721411$re_export$repeat as repeat, $5193209399721411$re_export$children as children, $5193209399721411$re_export$children as children, $5193209399721411$re_export$elements as elements, $5193209399721411$re_export$slotted as slotted, $5193209399721411$re_export$slotted as slotted, $21522158c10703ef$export$ca3487b83ec6860a as AsyncAppendBindig, $21522158c10703ef$export$5761d9f85430a54b as AsyncAppendDirective, $21522158c10703ef$export$eaa89ade56b7c0c1 as asyncAppend, $f6651d38d609160e$export$7d1e3a5e95ceca43 as createRef, $f6651d38d609160e$export$1ef8aea9a6de98d as RefDirective, $f6651d38d609160e$export$eff4d24c3ff7876e as ref, $f6651d38d609160e$export$eff4d24c3ff7876e as ref, $c66c6ea353620255$export$28205fa712822499 as StateBindig, $c66c6ea353620255$export$792c882b75ca2192 as StateDirective, $c66c6ea353620255$export$60241385465d0a34 as useState, $6e530dd7df9f7fe5$export$81053cd05d55c9d8 as StyleBindig, $6e530dd7df9f7fe5$export$18211b6e76035cfa as StyleDirective, $6e530dd7df9f7fe5$export$1d567c320f4763bc as style, $15db1e855f042fe6$export$f36d8f10294685f8 as UntilBindig, $15db1e855f042fe6$export$51c6edf8ee19b71a as UntilDirective, $15db1e855f042fe6$export$a40009bd2c363351 as until, $c5a7ff2cef84a00c$re_export$customElement as customElement, $c5a7ff2cef84a00c$re_export$css as css, $c5a7ff2cef84a00c$re_export$html as html, $c5a7ff2cef84a00c$re_export$Observable as Observable, $c5a7ff2cef84a00c$re_export$ViewTemplate as ViewTemplate, $c5a7ff2cef84a00c$re_export$HTMLView as HTMLView, $c5a7ff2cef84a00c$re_export$SyntheticView as SyntheticView, $c5a7ff2cef84a00c$re_export$volatile as volatile, $284c1ee70f828408$export$7f8b9f308979d41d as WebComponent};
//# sourceMappingURL=module.js.map
