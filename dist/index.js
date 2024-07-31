var $8zHUo$microsoftfastelementdistesm = require("@microsoft/fast-element/dist/esm");
var $8zHUo$microsoftfastelement = require("@microsoft/fast-element");
var $8zHUo$lithiumframeworkstate = require("@lithium-framework/state");
var $8zHUo$lithiumframeworkcontext = require("@lithium-framework/context");
var $8zHUo$lithiumframeworkhuid = require("@lithium-framework/huid");


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

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $3b1c062b22b18c7f$exports = {};

$parcel$export($3b1c062b22b18c7f$exports, "ComponentExecutionContext", () => $3b1c062b22b18c7f$export$6dad889f9b7e7685);
$parcel$export($3b1c062b22b18c7f$exports, "render", () => $3b1c062b22b18c7f$export$b3890eb0ae9dca99);

class $7ce92075f2794ab1$export$b176171395436676 extends Object {
    static init(initialObject) {
        let observabe = new $7ce92075f2794ab1$export$b176171395436676(initialObject);
        return observabe.createProxy();
    }
    constructor(initialObject){
        super();
        this.$data = {};
        this.set = (key, value)=>{
            this.$data[`_${key}`] = value;
            (0, $8zHUo$microsoftfastelementdistesm.Observable).defineProperty(this.$data, key);
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
                    (0, $8zHUo$microsoftfastelementdistesm.Observable).defineProperty(store, propKey);
                }
                return true;
            }
        });
    }
}


function $529142902ff67758$export$dcc5cf24d8fb3b41(initialObject) {
    return (0, $7ce92075f2794ab1$export$b176171395436676).init(initialObject);
}


var $0fe2052b2c651410$exports = {};
var $6b1d12931f09e2bd$exports = {};

$parcel$export($6b1d12931f09e2bd$exports, "attrState", () => $6b1d12931f09e2bd$export$683a0e8baad8b9c3);
$parcel$export($6b1d12931f09e2bd$exports, "attr", () => $8zHUo$microsoftfastelement.attr);

var $25b99ce497008ca4$exports = {};

$parcel$export($25b99ce497008ca4$exports, "state", () => $25b99ce497008ca4$export$ca000e230c0caa3e);

function $25b99ce497008ca4$export$ca000e230c0caa3e(target, propertyKey, value = null, constructible = false) {
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
    (0, $8zHUo$microsoftfastelement.observable)(target, propertyKey);
    if (value) target[propertyKey] = value;
}


function $6b1d12931f09e2bd$export$683a0e8baad8b9c3(options = {}) {
    return (target, propertyKey)=>{
        (0, $8zHUo$microsoftfastelement.attr)(options)(target, propertyKey);
        (0, $25b99ce497008ca4$export$ca000e230c0caa3e)(target, propertyKey);
    };
}



$parcel$exportWildcard($0fe2052b2c651410$exports, $6b1d12931f09e2bd$exports);
$parcel$exportWildcard($0fe2052b2c651410$exports, $25b99ce497008ca4$exports);


function $3b1c062b22b18c7f$var$_classPrivateFieldLooseBase(e, t) {
    if (!({}).hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
    return e;
}
var $3b1c062b22b18c7f$var$id = 0;
function $3b1c062b22b18c7f$var$_classPrivateFieldLooseKey(e) {
    return "__private_" + $3b1c062b22b18c7f$var$id++ + "_" + e;
}
// import './router/index.js'
// import './application/index.js'
var $3b1c062b22b18c7f$var$_state_keys = /*#__PURE__*/ $3b1c062b22b18c7f$var$_classPrivateFieldLooseKey("_state_keys");
class $3b1c062b22b18c7f$export$6dad889f9b7e7685 {
    get states() {
        return this.$states;
    }
    constructor(data){
        this.$states = (0, $7ce92075f2794ab1$export$b176171395436676).init({});
        Object.defineProperty(this, $3b1c062b22b18c7f$var$_state_keys, {
            writable: true,
            value: []
        });
        this.createState = (key, value)=>{
            if ($3b1c062b22b18c7f$var$_classPrivateFieldLooseBase(this, $3b1c062b22b18c7f$var$_state_keys)[$3b1c062b22b18c7f$var$_state_keys].includes(key)) return this.useState(key);
            Object.defineProperty(this, key, {
                get () {
                    return JSON.parse(this.states[key]);
                },
                set (value) {
                    if (!$3b1c062b22b18c7f$var$_classPrivateFieldLooseBase(this, $3b1c062b22b18c7f$var$_state_keys)[$3b1c062b22b18c7f$var$_state_keys].includes(key)) {
                        $3b1c062b22b18c7f$var$_classPrivateFieldLooseBase(this, $3b1c062b22b18c7f$var$_state_keys)[$3b1c062b22b18c7f$var$_state_keys].push(key);
                        this.$states = (0, $7ce92075f2794ab1$export$b176171395436676).init({
                            [key]: JSON.stringify(value),
                            ...Object.fromEntries(new Map(Array.from($3b1c062b22b18c7f$var$_classPrivateFieldLooseBase(this, $3b1c062b22b18c7f$var$_state_keys)[$3b1c062b22b18c7f$var$_state_keys], (key)=>{
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
            (0, $25b99ce497008ca4$export$ca000e230c0caa3e)(this, key, value, false);
        };
        Object.assign(this, data);
    }
    static init(data) {
        return new $3b1c062b22b18c7f$export$6dad889f9b7e7685(data);
    }
}
function $3b1c062b22b18c7f$export$b3890eb0ae9dca99(template, container = document.body, data = {}) {
    let context = $3b1c062b22b18c7f$export$6dad889f9b7e7685.init(data);
    return template.render(context, container);
} // export * from './router';
 // export * from './application/index.js';



var $3f98161bb563abdf$exports = {};

$parcel$export($3f98161bb563abdf$exports, "when", () => $3f98161bb563abdf$re_export$when);
$parcel$export($3f98161bb563abdf$exports, "repeat", () => $3f98161bb563abdf$re_export$repeat);
$parcel$export($3f98161bb563abdf$exports, "children", () => $3f98161bb563abdf$re_export$children);
$parcel$export($3f98161bb563abdf$exports, "elements", () => $3f98161bb563abdf$re_export$elements);
$parcel$export($3f98161bb563abdf$exports, "slotted", () => $3f98161bb563abdf$re_export$slotted);

var $b0f7f46e6c94897e$exports = {};

$parcel$export($b0f7f46e6c94897e$exports, "AsyncAppendBindig", () => $b0f7f46e6c94897e$export$ca3487b83ec6860a);
$parcel$export($b0f7f46e6c94897e$exports, "AsyncAppendDirective", () => $b0f7f46e6c94897e$export$5761d9f85430a54b);
$parcel$export($b0f7f46e6c94897e$exports, "asyncAppend", () => $b0f7f46e6c94897e$export$eaa89ade56b7c0c1);

class $b0f7f46e6c94897e$export$ca3487b83ec6860a extends (0, $8zHUo$microsoftfastelement.Binding) {
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
class $b0f7f46e6c94897e$export$5761d9f85430a54b extends (0, $8zHUo$microsoftfastelement.HTMLBindingDirective) {
    constructor(fn, callback){
        super(new $b0f7f46e6c94897e$export$ca3487b83ec6860a((x)=>null));
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
                    (0, $8zHUo$microsoftfastelement.html)`<span>Error: ${error}</span>`.render(source, target instanceof HTMLElement ? target : target.parentElement);
                });
            },
            unbind: ()=>{
            // Nettoyage si nécessaire
            }
        };
    }
    static use(fn, callback) {
        return new $b0f7f46e6c94897e$export$5761d9f85430a54b(fn, callback);
    }
}
(0, $8zHUo$microsoftfastelement.HTMLDirective).define($b0f7f46e6c94897e$export$5761d9f85430a54b);
const $b0f7f46e6c94897e$export$eaa89ade56b7c0c1 = (fn, callback)=>$b0f7f46e6c94897e$export$5761d9f85430a54b.use(fn, callback);


var $6ac08f3136e84148$exports = {};

$parcel$export($6ac08f3136e84148$exports, "createRef", () => $6ac08f3136e84148$export$7d1e3a5e95ceca43);
$parcel$export($6ac08f3136e84148$exports, "RefDirective", () => $6ac08f3136e84148$export$1ef8aea9a6de98d);
$parcel$export($6ac08f3136e84148$exports, "ref", () => $6ac08f3136e84148$export$eff4d24c3ff7876e);

function $6ac08f3136e84148$export$7d1e3a5e95ceca43() {
    return {
        value: null
    };
}
class $6ac08f3136e84148$export$1ef8aea9a6de98d extends (0, $8zHUo$microsoftfastelement.StatelessAttachedAttributeDirective) {
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
        return new $6ac08f3136e84148$export$1ef8aea9a6de98d(options);
    }
}
(0, $8zHUo$microsoftfastelement.HTMLDirective).define($6ac08f3136e84148$export$1ef8aea9a6de98d);
const $6ac08f3136e84148$export$eff4d24c3ff7876e = (options)=>$6ac08f3136e84148$export$1ef8aea9a6de98d.use(options);


var $3cd2fa06c53f9aef$exports = {};

$parcel$export($3cd2fa06c53f9aef$exports, "StateBindig", () => $3cd2fa06c53f9aef$export$28205fa712822499);
$parcel$export($3cd2fa06c53f9aef$exports, "StateDirective", () => $3cd2fa06c53f9aef$export$792c882b75ca2192);
$parcel$export($3cd2fa06c53f9aef$exports, "useState", () => $3cd2fa06c53f9aef$export$60241385465d0a34);
// import { ViewTemplate, HTMLBindingDirective, ExecutionContext } from '@microsoft/fast-element';

class $3cd2fa06c53f9aef$export$28205fa712822499 extends (0, $8zHUo$microsoftfastelement.Binding) {
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
class $3cd2fa06c53f9aef$export$792c882b75ca2192 extends (0, $8zHUo$microsoftfastelement.HTMLBindingDirective) {
    get state() {
        return this._state.mutator[0];
    }
    set state(value) {
        this._state.mutator[1](value);
    }
    constructor(state, callback){
        super(new $3cd2fa06c53f9aef$export$28205fa712822499((x)=>null));
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
        return new $3cd2fa06c53f9aef$export$792c882b75ca2192(state, callback);
    }
}
(0, $8zHUo$microsoftfastelement.HTMLDirective).define($3cd2fa06c53f9aef$export$792c882b75ca2192);
const $3cd2fa06c53f9aef$export$60241385465d0a34 = (state, callback)=>$3cd2fa06c53f9aef$export$792c882b75ca2192.use(state, callback);


var $4cdc3aa994dab691$exports = {};

$parcel$export($4cdc3aa994dab691$exports, "StyleBindig", () => $4cdc3aa994dab691$export$81053cd05d55c9d8);
$parcel$export($4cdc3aa994dab691$exports, "StyleDirective", () => $4cdc3aa994dab691$export$18211b6e76035cfa);
$parcel$export($4cdc3aa994dab691$exports, "style", () => $4cdc3aa994dab691$export$1d567c320f4763bc);

class $4cdc3aa994dab691$export$81053cd05d55c9d8 extends (0, $8zHUo$microsoftfastelement.Binding) {
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
class $4cdc3aa994dab691$export$18211b6e76035cfa extends (0, $8zHUo$microsoftfastelement.HTMLBindingDirective) {
    constructor(css){
        super(new $4cdc3aa994dab691$export$81053cd05d55c9d8((x)=>null));
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
        return new $4cdc3aa994dab691$export$18211b6e76035cfa(css);
    }
}
(0, $8zHUo$microsoftfastelement.HTMLDirective).define($4cdc3aa994dab691$export$18211b6e76035cfa);
const $4cdc3aa994dab691$export$1d567c320f4763bc = (css)=>$4cdc3aa994dab691$export$18211b6e76035cfa.use(css);


var $76501f7f02d11920$exports = {};

$parcel$export($76501f7f02d11920$exports, "UntilBindig", () => $76501f7f02d11920$export$f36d8f10294685f8);
$parcel$export($76501f7f02d11920$exports, "UntilDirective", () => $76501f7f02d11920$export$51c6edf8ee19b71a);
$parcel$export($76501f7f02d11920$exports, "until", () => $76501f7f02d11920$export$a40009bd2c363351);

class $76501f7f02d11920$export$f36d8f10294685f8 extends (0, $8zHUo$microsoftfastelement.Binding) {
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
class $76501f7f02d11920$export$51c6edf8ee19b71a extends (0, $8zHUo$microsoftfastelement.HTMLBindingDirective) {
    constructor(fn, template){
        super(new $76501f7f02d11920$export$f36d8f10294685f8((x)=>null));
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
                    (0, $8zHUo$microsoftfastelement.html)`<span>Error: ${error}</span>`.render(source, target instanceof HTMLElement ? target : target.parentElement);
                });
            },
            unbind: ()=>{
            // Nettoyage si nécessaire
            }
        };
    }
    static use(fn, template) {
        return new $76501f7f02d11920$export$51c6edf8ee19b71a(fn, template);
    }
}
(0, $8zHUo$microsoftfastelement.HTMLDirective).define($76501f7f02d11920$export$51c6edf8ee19b71a);
const $76501f7f02d11920$export$a40009bd2c363351 = (fn, template)=>$76501f7f02d11920$export$51c6edf8ee19b71a.use(fn, template);


$parcel$exportWildcard($3f98161bb563abdf$exports, $b0f7f46e6c94897e$exports);
$parcel$exportWildcard($3f98161bb563abdf$exports, $6ac08f3136e84148$exports);
$parcel$exportWildcard($3f98161bb563abdf$exports, $3cd2fa06c53f9aef$exports);
$parcel$exportWildcard($3f98161bb563abdf$exports, $4cdc3aa994dab691$exports);
$parcel$exportWildcard($3f98161bb563abdf$exports, $76501f7f02d11920$exports);


var $d7167569386d0d4c$exports = {};

$parcel$export($d7167569386d0d4c$exports, "Observable", () => $d7167569386d0d4c$re_export$Observable);
$parcel$export($d7167569386d0d4c$exports, "createObservableObject", () => $529142902ff67758$export$dcc5cf24d8fb3b41);
$parcel$export($d7167569386d0d4c$exports, "ObservableObject", () => $7ce92075f2794ab1$export$b176171395436676);
$parcel$export($d7167569386d0d4c$exports, "State", () => $d7167569386d0d4c$re_export$State);
$parcel$export($d7167569386d0d4c$exports, "createState", () => $d7167569386d0d4c$re_export$createState);
$parcel$export($d7167569386d0d4c$exports, "createStorage", () => $d7167569386d0d4c$re_export$createStorage);
$parcel$export($d7167569386d0d4c$exports, "uuid", () => $d7167569386d0d4c$re_export$uuid);





 // export{
 //   Observable,
 //   volatile,
 // State,
 // createState,
 // createStorage,
 // Storage, 
 // StorageKeys, 
 // StorageValues, 
 // StateValidator,
 // ComponentId,
 // Segment,
 // ParentSegementId,
 // CollectionId,
 // HUID,
 // HierarchicalUUIDOptions,
 // uuid
 // }


var $5e6879fad66e268c$exports = {};

$parcel$export($5e6879fad66e268c$exports, "customElement", () => $5e6879fad66e268c$re_export$customElement);
$parcel$export($5e6879fad66e268c$exports, "css", () => $5e6879fad66e268c$re_export$css);
$parcel$export($5e6879fad66e268c$exports, "html", () => $5e6879fad66e268c$re_export$html);
$parcel$export($5e6879fad66e268c$exports, "ViewTemplate", () => $5e6879fad66e268c$re_export$ViewTemplate);
$parcel$export($5e6879fad66e268c$exports, "HTMLView", () => $5e6879fad66e268c$re_export$HTMLView);
$parcel$export($5e6879fad66e268c$exports, "volatile", () => $5e6879fad66e268c$re_export$volatile);
$parcel$export($5e6879fad66e268c$exports, "WebComponent", () => $55a177ca025730f0$export$7f8b9f308979d41d);



class $55a177ca025730f0$export$7f8b9f308979d41d extends (0, $8zHUo$microsoftfastelement.FASTElement) {
    constructor(){
        super();
        /* The line ` = ObservableObject.init( this.constructor["states"] );` is initializing an
    instance property named `` on the `WebComponent` class. This property is being set to the
    result of calling the `init` method of the `ObservableObject` class, passing in the initial state
    values defined in the `states` static property of the `WebComponent` class
    (`this.constructor["states"]`). */ this.$states = (0, $7ce92075f2794ab1$export$b176171395436676).init(this.constructor["states"]);
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
allows all instances of the class to access and modify the same set of state values. */ $55a177ca025730f0$export$7f8b9f308979d41d.states = {};
$55a177ca025730f0$export$7f8b9f308979d41d.define = (0, $8zHUo$microsoftfastelement.FASTElement).define;




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
$parcel$exportWildcard(module.exports, $3b1c062b22b18c7f$exports);
$parcel$exportWildcard(module.exports, $0fe2052b2c651410$exports);
$parcel$exportWildcard(module.exports, $3f98161bb563abdf$exports);
$parcel$exportWildcard(module.exports, $d7167569386d0d4c$exports);
$parcel$exportWildcard(module.exports, $5e6879fad66e268c$exports);


//# sourceMappingURL=index.js.map
