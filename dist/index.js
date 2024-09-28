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

$parcel$export(module.exports, "Effects", () => $6b22b6b12ada86dd$export$af73ab700e00763e);
// export * from './dom';
var $0fe2052b2c651410$exports = {};
var $6b1d12931f09e2bd$exports = {};

$parcel$export($6b1d12931f09e2bd$exports, "attrState", () => $6b1d12931f09e2bd$export$683a0e8baad8b9c3);
$parcel$export($6b1d12931f09e2bd$exports, "attr", () => $8zHUo$microsoftfastelement.attr);

var $25b99ce497008ca4$exports = {};

$parcel$export($25b99ce497008ca4$exports, "state", () => $25b99ce497008ca4$export$ca000e230c0caa3e);

var $5221daf215a19ea7$exports = {};

$parcel$export($5221daf215a19ea7$exports, "ViewExecutionContext", () => $5221daf215a19ea7$export$1053a9be1bcefef9);

class $7ce92075f2794ab1$export$b176171395436676 extends Object {
    static init(initialObject) {
        let observabe = new $7ce92075f2794ab1$export$b176171395436676(initialObject);
        return observabe.createProxy();
    }
    constructor(initialObject){
        super();
        this.$data = {};
        this.observers = {};
        // Enregistre un observateur pour une propriété spécifique
        this.subscribe = (propKey, callback)=>{
            if (!this.observers[propKey]) this.observers[propKey] = new Set();
            this.observers[propKey].add(callback);
        };
        // Supprime un observateur pour une propriété spécifique
        this.unsubscribe = (propKey, callback)=>{
            if (this.observers[propKey]) this.observers[propKey].delete(callback);
        };
        this.set = (key, value)=>{
            const oldValue = this.$data[`_${key}`];
            this.$data[`_${key}`] = value;
            (0, $8zHUo$microsoftfastelement.Observable).defineProperty(this.$data, key);
            this.notify(key, value, oldValue);
            return this.$data[key];
        };
        Object.assign(this.$data, initialObject);
    }
    // Méthode appelée pour notifier les observateurs d'un changement de valeur
    notify(propKey, newValue, oldValue) {
        if (this.observers[propKey]) this.observers[propKey].forEach((callback)=>callback(newValue, oldValue));
    }
    createProxy() {
        return new Proxy(this.$data, {
            get: (store, propKey)=>{
                let result = undefined;
                if (propKey == "subscribe") return this.subscribe;
                else if (propKey == "unsubscribe") return this.unsubscribe;
                else if (propKey == "keys") return ()=>Object.keys(this.$data);
                else if (propKey == "values") return ()=>Object.values(this.$data);
                try {
                    result = store[propKey];
                } catch (error) {
                    console.error(error);
                } finally{
                    return result;
                }
            },
            set: (store, propKey, value)=>{
                const oldValue = store[propKey];
                if (store[propKey]) store[propKey] = value;
                else {
                    store[`_${propKey}`] = value;
                    (0, $8zHUo$microsoftfastelement.Observable).defineProperty(store, propKey);
                }
                this.notify(propKey, value, oldValue);
                return true;
            }
        });
    }
}


class $6b22b6b12ada86dd$export$af73ab700e00763e extends Map {
    bind(target) {
        this.target = target;
        return this;
    }
    execute() {
        let effects = this.target.constructor["effects"];
        let effects_without_depedencies = [
            ...this.values()
        ].filter((effect)=>!effect.dependencies || effect.dependencies.length == 0 ? effect : null);
        let effects_with_depedencies = [
            ...this.values()
        ].filter((effect)=>effect.dependencies && effect.dependencies.length > 0 ? effect : null);
        effects_with_depedencies.forEach((effect)=>{
            let { dependencies: dependencies, callback: useEffect, name: name } = effect;
            dependencies.forEach((dependency)=>{
                console.log({
                    "subscribe": this.target.$states
                });
                this.target.$states.subscribe(dependency, useEffect);
            });
        });
        effects_without_depedencies.forEach((effect)=>{
            console.log({
                effect: effect
            });
            let { callback: useEffect } = effect;
            useEffect();
        });
    // this.forEach( effect => {
    //   let { dependencies , callback:useEffect } = effect;
    //   if(!dependencies)dependencies = [];
    //   if(dependencies.length > 0){
    //     dependencies.forEach(( dependency ) => {
    //       this.target.$states.subscribe( dependency , useEffect )
    //     })
    //   }
    //   else useEffect();
    // });
    }
    constructor(effects){
        super();
        this.target = null;
        if (effects) Object.values(effects).forEach((effect)=>{
            console.log({
                effect: effect
            });
            this.set(effect.name, effect);
        });
        console.log({
            self: this,
            effects: effects,
            values: Object.values({
                ...effects
            }),
            keys: Object.keys({
                ...effects
            })
        });
    }
}



function $ad561189c3a675d2$export$855330f8a2a9f2e8(effect_name, callback, dependencies) {
    (0, $524aec7c3c6d48fc$export$dc573d8a6576cdb3)(dependencies)(this, effect_name, callback);
}



function $e1c24cd94ecea2f8$export$ad300186e7a01246(key, value) {
    function useState(key) {
        return [
            this[key],
            (newValue)=>{
                this[key] = newValue;
            }
        ];
    }
    (0, $25b99ce497008ca4$export$ca000e230c0caa3e)(this, key, value);
    return useState.bind(this)(key);
}



function $5121559b99f023e4$export$366cf43304d85757(key, value) {
    (0, $25b99ce497008ca4$export$ca000e230c0caa3e)(this, key, value, false);
}


class $5221daf215a19ea7$export$1053a9be1bcefef9 extends Object {
    // bindState = <T>( key:keyof States , value:T ):[ state:T , setter:( newValue:T ) => void ] => {
    //   function useState( this:ViewExecutionContext , key:keyof States ):[ state:T , setter:( newValue:T ) => void ]{
    //     return [ this[key as string] , ( newValue ) => {
    //       console.log({ newValue })
    //       this[key as string] = newValue;
    //     } ]
    //   }
    //   if(this.#_state_keys.includes(key as string))return useState.bind(this)( key );
    //   Object.defineProperty( this , key , {
    //     get(){
    //       return JSON.parse(this.states[key]);
    //     },
    //     set( value ){
    //       if(!this.#_state_keys.includes(key)){
    //         this.#_state_keys.push( key );
    //         this.$states = ObservableObject.init({
    //           [key] :  JSON.stringify(value),
    //           ...Object.fromEntries(
    //             new Map(
    //               Array.from( this.#_state_keys , ( key ) => {
    //                 return [ key , this.$states[`${key}`] ]
    //               } )
    //             )
    //           )
    //         });
    //       }
    //       this.$states[key] = JSON.stringify(value);
    //     }
    //   });
    //   this[key as string] = value;
    //   return useState.bind(this)( key );
    // }
    // bindConsumable = <T = any>( key:string , value:T ) => {
    //   state( this , key , value , false );
    // }
    // bindEffect = ( callback : () => void , dependencies : any[] ) => {
    //   this.$effects.push( {
    //     dependencies,
    //     callback
    //   } as IEffect )
    // }
    get bindState() {
        return (0, $e1c24cd94ecea2f8$export$ad300186e7a01246).bind(this);
    }
    get bindConsumable() {
        return (0, $5121559b99f023e4$export$366cf43304d85757).bind(this);
    }
    get bindEffect() {
        return (0, $ad561189c3a675d2$export$855330f8a2a9f2e8).bind(this);
    }
    constructor(data){
        super();
        this.$states = (0, $7ce92075f2794ab1$export$b176171395436676).init(this.constructor["states"]);
        this.$effects = new (0, $6b22b6b12ada86dd$export$af73ab700e00763e)(this.constructor["effects"]).bind(this);
        Object.assign(this, data);
    }
    static init(data) {
        return new $5221daf215a19ea7$export$1053a9be1bcefef9(data);
    }
}
$5221daf215a19ea7$export$1053a9be1bcefef9.states = {};
$5221daf215a19ea7$export$1053a9be1bcefef9.effects = {};








class $55a177ca025730f0$export$7f8b9f308979d41d extends (0, $8zHUo$microsoftfastelement.FASTElement) {
    /* The line ` = ObservableObject.init( this.constructor["states"] );` is initializing an
  instance property named `` on the `WebComponent` class. This property is being set to the
  result of calling the `init` method of the `ObservableObject` class, passing in the initial state
  values defined in the `states` static property of the `WebComponent` class
  (`this.constructor["states"]`). */ get $states() {
        return this.constructor["states"];
    }
    get $effects() {
        return new (0, $6b22b6b12ada86dd$export$af73ab700e00763e)(this.constructor["effects"]).bind(this);
    }
    constructor(){
        super();
    }
    get bindState() {
        return (0, $e1c24cd94ecea2f8$export$ad300186e7a01246).bind(this);
    }
    get bindConsumable() {
        return (0, $5121559b99f023e4$export$366cf43304d85757).bind(this);
    }
    get bindEffect() {
        return (0, $ad561189c3a675d2$export$855330f8a2a9f2e8).bind(this);
    }
    connectedCallback() {
        this.$effects.execute();
        super.connectedCallback();
    }
}
/* The `static states = {};` line is declaring a static property named `states` on the `WebComponent`
class and initializing it as an empty object `{}`. This property is intended to hold the initial
state values for the component. By defining it as a static property, it is shared among all
instances of the `WebComponent` class rather than being specific to individual instances. This
allows all instances of the class to access and modify the same set of state values. */ $55a177ca025730f0$export$7f8b9f308979d41d.states = (0, $7ce92075f2794ab1$export$b176171395436676).init({});
$55a177ca025730f0$export$7f8b9f308979d41d.effects = {};
$55a177ca025730f0$export$7f8b9f308979d41d.define = (0, $8zHUo$microsoftfastelement.FASTElement).define;


function $25b99ce497008ca4$export$ca000e230c0caa3e(target, propertyKey, value = null, constructible = false) {
    if (constructible) target.constructor["states"] = target.constructor["states"] || {};
    if (target instanceof (0, $55a177ca025730f0$export$7f8b9f308979d41d)) {
        Object.defineProperty(target, propertyKey, {
            get () {
                return target.constructor["states"][propertyKey];
            },
            set (newValue) {
                target.constructor["states"][propertyKey] = newValue;
                return true;
            },
            enumerable: true,
            configurable: true
        });
        (0, $8zHUo$microsoftfastelement.observable)(target.constructor["states"], propertyKey);
    }
    if (target instanceof (0, $5221daf215a19ea7$export$1053a9be1bcefef9)) {
        if (propertyKey in target == false) {
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
            (0, $8zHUo$microsoftfastelement.observable)(target.$states, propertyKey);
            if (value && target[propertyKey] == null) target[propertyKey] = value;
        }
    }
}


function $6b1d12931f09e2bd$export$683a0e8baad8b9c3(options = {}) {
    return (target, propertyKey)=>{
        (0, $8zHUo$microsoftfastelement.attr)(options)(target, propertyKey);
        (0, $25b99ce497008ca4$export$ca000e230c0caa3e)(target, propertyKey);
    };
}



var $524aec7c3c6d48fc$exports = {};

$parcel$export($524aec7c3c6d48fc$exports, "effect", () => $524aec7c3c6d48fc$export$dc573d8a6576cdb3);
var $67a1dbfdad6a62d9$exports = {};

var $bf7368973063149f$exports = {};


var $8e473c7aec91a0a4$exports = {};


$parcel$exportWildcard($67a1dbfdad6a62d9$exports, $5221daf215a19ea7$exports);
$parcel$exportWildcard($67a1dbfdad6a62d9$exports, $bf7368973063149f$exports);
$parcel$exportWildcard($67a1dbfdad6a62d9$exports, $8e473c7aec91a0a4$exports);



function $524aec7c3c6d48fc$export$dc573d8a6576cdb3(dependencies) {
    return (target, propertyKey, value = null)=>{
        if (target instanceof (0, $55a177ca025730f0$export$7f8b9f308979d41d)) Object.defineProperty(target, propertyKey, {
            get () {
                return target.constructor["effects"][propertyKey];
            },
            set (newValue) {
                target.constructor["effects"][propertyKey] = {
                    name: propertyKey,
                    dependencies: dependencies,
                    callback: newValue
                };
                return true;
            },
            enumerable: true,
            configurable: true
        });
        if (target instanceof (0, $5221daf215a19ea7$export$1053a9be1bcefef9)) {
            if (!target[propertyKey]) Object.defineProperty(target, propertyKey, {
                get () {
                    return target.$effects.get(propertyKey);
                },
                set (newValue) {
                    target.$effects.set(propertyKey, {
                        name: propertyKey,
                        dependencies: dependencies,
                        callback: newValue
                    });
                    return true;
                },
                enumerable: true,
                configurable: true
            });
            if (value) target[propertyKey] = value;
        }
    };
}


$parcel$exportWildcard($0fe2052b2c651410$exports, $6b1d12931f09e2bd$exports);
$parcel$exportWildcard($0fe2052b2c651410$exports, $25b99ce497008ca4$exports);
$parcel$exportWildcard($0fe2052b2c651410$exports, $524aec7c3c6d48fc$exports);


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

$parcel$export($d7167569386d0d4c$exports, "createObservableObject", () => $529142902ff67758$export$dcc5cf24d8fb3b41);
$parcel$export($d7167569386d0d4c$exports, "ObservableObject", () => $7ce92075f2794ab1$export$b176171395436676);
$parcel$export($d7167569386d0d4c$exports, "Observable", () => $7ce92075f2794ab1$import$843d46ff018552b8$77cea355fa80b5f4);
$parcel$export($d7167569386d0d4c$exports, "State", () => $d7167569386d0d4c$re_export$State);
$parcel$export($d7167569386d0d4c$exports, "createState", () => $d7167569386d0d4c$re_export$createState);
$parcel$export($d7167569386d0d4c$exports, "createStorage", () => $d7167569386d0d4c$re_export$createStorage);
$parcel$export($d7167569386d0d4c$exports, "uuid", () => $d7167569386d0d4c$re_export$uuid);

function $529142902ff67758$export$dcc5cf24d8fb3b41(initialObject) {
    return (0, $7ce92075f2794ab1$export$b176171395436676).init(initialObject);
}






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

$parcel$export($5e6879fad66e268c$exports, "html", () => $5e6879fad66e268c$export$c0bb0b647f701bb5);
$parcel$export($5e6879fad66e268c$exports, "customElement", () => $5e6879fad66e268c$re_export$customElement);
$parcel$export($5e6879fad66e268c$exports, "css", () => $5e6879fad66e268c$re_export$css);
$parcel$export($5e6879fad66e268c$exports, "ViewTemplate", () => $5e6879fad66e268c$re_export$ViewTemplate);
$parcel$export($5e6879fad66e268c$exports, "HTMLView", () => $5e6879fad66e268c$re_export$HTMLView);
$parcel$export($5e6879fad66e268c$exports, "volatile", () => $5e6879fad66e268c$re_export$volatile);
$parcel$export($5e6879fad66e268c$exports, "WebComponent", () => $55a177ca025730f0$export$7f8b9f308979d41d);


const $5e6879fad66e268c$export$c0bb0b647f701bb5 = (0, $8zHUo$microsoftfastelement.html);



var $a995219139975453$exports = {};
var $0cc15574a08971b7$exports = {};

$parcel$export($0cc15574a08971b7$exports, "render", () => $0cc15574a08971b7$export$b3890eb0ae9dca99);


// Fonction pour observer les enfants ajoutés
const $0cc15574a08971b7$var$observeChilds = (container, config, callback)=>{
    // Crée un MutationObserver
    const observer = new MutationObserver((mutationsList, observer)=>{
        // Parcourt toutes les mutations détectées
        mutationsList.forEach((mutation)=>{
            if (mutation.type === "childList") // Vérifie si des nœuds ont été ajoutés
            mutation.addedNodes.forEach((node)=>{
                if (node.nodeType === Node.ELEMENT_NODE) {
                    console.log("Nouvel \xe9l\xe9ment ajout\xe9 :", node);
                    callback(node); // Exécute le callback avec le nœud ajouté
                }
            });
        });
    });
    // Démarre l'observation
    observer.observe(container, config);
    // Retourne l'observer pour pouvoir le déconnecter si besoin
    return observer;
};
function $0cc15574a08971b7$export$b3890eb0ae9dca99(template, container = document.body, data = {}) {
    let context = (0, $5221daf215a19ea7$export$1053a9be1bcefef9).init(data);
    let observer = $0cc15574a08971b7$var$observeChilds(container, {
        childList: true,
        // Observe les ajouts et suppressions d'enfants
        subtree: false // Si true, observe tous les descendants du parent
    }, (node)=>{
        if (node instanceof (0, $55a177ca025730f0$export$7f8b9f308979d41d) == false) {
            if (context["$effects"]) context["$effects"].execute();
        }
        observer.disconnect();
    });
    let element = template.render(context, container);
    return element;
}


$parcel$exportWildcard($a995219139975453$exports, $0cc15574a08971b7$exports);



$parcel$exportWildcard(module.exports, $0fe2052b2c651410$exports);
$parcel$exportWildcard(module.exports, $3f98161bb563abdf$exports);
$parcel$exportWildcard(module.exports, $d7167569386d0d4c$exports);
$parcel$exportWildcard(module.exports, $5e6879fad66e268c$exports);
$parcel$exportWildcard(module.exports, $67a1dbfdad6a62d9$exports);
$parcel$exportWildcard(module.exports, $a995219139975453$exports);


//# sourceMappingURL=index.js.map
