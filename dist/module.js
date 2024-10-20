import {attr as $b1b98f19caab25c2$import$843d46ff018552b8$7aabe8b3a840d2fd, Observable as $hgUW1$Observable, when as $5193209399721411$re_export$when, repeat as $5193209399721411$re_export$repeat, children as $5193209399721411$re_export$children, elements as $5193209399721411$re_export$elements, slotted as $5193209399721411$re_export$slotted, Binding as $hgUW1$Binding, html as $hgUW1$html, HTMLBindingDirective as $hgUW1$HTMLBindingDirective, HTMLDirective as $hgUW1$HTMLDirective, StatelessAttachedAttributeDirective as $hgUW1$StatelessAttachedAttributeDirective, customElement as $c5a7ff2cef84a00c$re_export$customElement, css as $c5a7ff2cef84a00c$re_export$css, ViewTemplate as $c5a7ff2cef84a00c$re_export$ViewTemplate, HTMLView as $c5a7ff2cef84a00c$re_export$HTMLView, volatile as $c5a7ff2cef84a00c$re_export$volatile, FASTElement as $hgUW1$FASTElement} from "@microsoft/fast-element";
import {State as $fde9406d76ec24a9$re_export$State, createState as $fde9406d76ec24a9$re_export$createState} from "@lithium-framework/state";
import {createStorage as $fde9406d76ec24a9$re_export$createStorage} from "@lithium-framework/context";
import {uuid as $fde9406d76ec24a9$re_export$uuid} from "@lithium-framework/huid";


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
// export * from './dom';
var $535bb7ac3b1a1d6d$exports = {};
var $b1b98f19caab25c2$exports = {};

$parcel$export($b1b98f19caab25c2$exports, "attrState", () => $b1b98f19caab25c2$export$683a0e8baad8b9c3);
$parcel$export($b1b98f19caab25c2$exports, "attr", () => $b1b98f19caab25c2$import$843d46ff018552b8$7aabe8b3a840d2fd);

var $a1f8df21dd3b8ee9$exports = {};

$parcel$export($a1f8df21dd3b8ee9$exports, "state", () => $a1f8df21dd3b8ee9$export$ca000e230c0caa3e);

function $a1f8df21dd3b8ee9$export$ca000e230c0caa3e() {
    return function(target, propertyName, value, y) {
        let privateName = `_${propertyName}`;
        if (!target[propertyName]) Object.defineProperty(target, propertyName, {
            get () {
                // Retourne la valeur de l'état depuis l'objet 'states' pour CETTE instance
                if (!this.states) this.states = {}; // Si l'objet 'states' n'existe pas encore, on le crée pour chaque instance
                (0, $hgUW1$Observable).track(this, propertyName);
                return this.states[privateName];
            },
            set (newValue) {
                // Si l'objet 'states' n'existe pas encore, le créer pour CETTE instance
                if (!this.states) this.states = {};
                const oldValue = this.states[privateName];
                if (oldValue != newValue) {
                    this.states[privateName] = newValue;
                    (0, $hgUW1$Observable).notify(this, propertyName);
                    // Si l'état a changé, déclenche une action pour CETTE instance
                    if (oldValue !== newValue) this.handleStateChange(propertyName, oldValue, newValue);
                }
            },
            enumerable: true,
            configurable: true
        });
        if (value && target[propertyName] == null) target[propertyName] = value;
    };
}


function $b1b98f19caab25c2$export$683a0e8baad8b9c3(options = {}) {
    return (target, propertyKey)=>{
        (0, $b1b98f19caab25c2$import$843d46ff018552b8$7aabe8b3a840d2fd)(options)(target, propertyKey);
        (0, $a1f8df21dd3b8ee9$export$ca000e230c0caa3e)()(target, propertyKey);
    };
}



var $f24f9f18a7b99a68$exports = {};

$parcel$export($f24f9f18a7b99a68$exports, "effect", () => $f24f9f18a7b99a68$export$dc573d8a6576cdb3);
function $935380081e1d8be7$export$af73ab700e00763e(effects) {
    const effects_register = new Map();
    if (effects) Object.values(effects).forEach((effect)=>{
        this.set(effect.name, effect);
    });
    effects_register.execute = function(dependency) {
        let effects_without_depedencies = [
            ...this.values()
        ].filter((effect)=>!effect.dependencies || effect.dependencies.length == 0 ? effect : null);
        let effects_with_depedencies = [
            ...this.values()
        ].filter((effect)=>effect.dependencies && effect.dependencies.length > 0 ? effect : null);
        effects_with_depedencies.forEach((effect)=>{
            let { dependencies: dependencies, callback: useEffect, name: name } = effect;
            if (dependency && dependencies.includes(dependency)) {
                console.log(`Math effect ${dependency}`);
                useEffect();
            }
        });
        if (!dependency) effects_without_depedencies.forEach((effect)=>{
            let { callback: useEffect } = effect;
            try {
                useEffect();
            } catch (error) {
                console.error(error);
            }
        });
    };
    return effects_register;
} // export class Effects extends Map< string , IEffect >{
 //   execute( dependency?:string ){
 //     let effects_without_depedencies = [...this.values()].filter(( effect ) => !effect.dependencies || effect.dependencies.length == 0 ? effect : null);
 //     let effects_with_depedencies = [...this.values()].filter(( effect ) => effect.dependencies && effect.dependencies.length > 0 ? effect : null);
 //     effects_with_depedencies.forEach(( effect ) => {
 //       let { dependencies , callback:useEffect , name } = effect;
 //       if(dependency && dependencies.includes( dependency )){
 //         useEffect();
 //       }
 //     })
 //     if( !dependency )effects_without_depedencies.forEach(( effect ) => {
 //       let { callback:useEffect } = effect;
 //       try{
 //         useEffect();
 //       }
 //       catch(error){
 //         console.error(error);
 //       }
 //     })
 //   }
 //   constructor( effects?:Record< string , IEffect > ){
 //     super();
 //     if(effects)Object.values(effects).forEach((effect) => {
 //       this.set( effect.name , effect )
 //     });
 //   }
 // }


function $f24f9f18a7b99a68$export$dc573d8a6576cdb3(dependencies) {
    return (target, propertyName, value = null)=>{
        if (!target[propertyName]) Object.defineProperty(target, propertyName, {
            get () {
                // Retourne la valeur de l'état depuis l'objet 'states' pour CETTE instance
                if (!this.effects) this.effects = (0, $935380081e1d8be7$export$af73ab700e00763e)(); // Si l'objet 'states' n'existe pas encore, on le crée pour chaque instance
                return this.effects.get(propertyName);
            },
            set (newValue) {
                // Si l'objet 'states' n'existe pas encore, le créer pour CETTE instance
                if (!this.effects) this.effects = (0, $935380081e1d8be7$export$af73ab700e00763e)();
                this.effects.set(propertyName, {
                    name: propertyName,
                    dependencies: dependencies,
                    callback: newValue
                });
            },
            enumerable: true,
            configurable: true
        });
        if (value && target[propertyName] == null) target[propertyName] = value;
    };
}


$parcel$exportWildcard($535bb7ac3b1a1d6d$exports, $b1b98f19caab25c2$exports);
$parcel$exportWildcard($535bb7ac3b1a1d6d$exports, $a1f8df21dd3b8ee9$exports);
$parcel$exportWildcard($535bb7ac3b1a1d6d$exports, $f24f9f18a7b99a68$exports);


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
                    (0, $hgUW1$html)`<span>Error: ${error}</span>`.render(source, target instanceof HTMLElement ? target : target.parentElement);
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
                    (0, $hgUW1$html)`<span>Error: ${error}</span>`.render(source, target instanceof HTMLElement ? target : target.parentElement);
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


var $fde9406d76ec24a9$exports = {};

$parcel$export($fde9406d76ec24a9$exports, "createObservableObject", () => $592e71a4a1bc8d5d$export$dcc5cf24d8fb3b41);
$parcel$export($fde9406d76ec24a9$exports, "ObservableArray", () => $07fd0000f26edeb5$export$2b76b04f92326cd);
$parcel$export($fde9406d76ec24a9$exports, "ObservableObject", () => $f0b90d4a5f4da766$export$b176171395436676);
$parcel$export($fde9406d76ec24a9$exports, "State", () => $fde9406d76ec24a9$re_export$State);
$parcel$export($fde9406d76ec24a9$exports, "createState", () => $fde9406d76ec24a9$re_export$createState);
$parcel$export($fde9406d76ec24a9$exports, "createStorage", () => $fde9406d76ec24a9$re_export$createStorage);
$parcel$export($fde9406d76ec24a9$exports, "uuid", () => $fde9406d76ec24a9$re_export$uuid);

class $f0b90d4a5f4da766$export$b176171395436676 extends Object {
    static init(initialObject) {
        let observabe = new $f0b90d4a5f4da766$export$b176171395436676(initialObject);
        return observabe.createProxy.bind(observabe)();
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
            (0, $hgUW1$Observable).defineProperty(this.$data, key);
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
                    (0, $hgUW1$Observable).defineProperty(store, propKey);
                }
                this.notify(propKey, value, oldValue);
                return true;
            }
        });
    }
}


function $592e71a4a1bc8d5d$export$dcc5cf24d8fb3b41(initialObject) {
    return (0, $f0b90d4a5f4da766$export$b176171395436676).init(initialObject);
}


function $07fd0000f26edeb5$export$2b76b04f92326cd(init = []) {
    const observers = new Set();
    const notifyObservers = (operation, args, result)=>{
        observers.forEach((callback)=>callback(operation, args, result));
    };
    const arrayMethods = [
        "push",
        "pop",
        "splice",
        "shift",
        "unshift",
        "sort",
        "reverse"
    ];
    return new Proxy(init, {
        get (target, property, receiver) {
            // Si on accède à une méthode de tableau, la redéfinir pour inclure la notification
            if (arrayMethods.includes(property)) return (...args)=>{
                const result = Array.prototype[property].apply(target, args);
                // Notifier les observateurs du changement
                notifyObservers(property, args, result);
                return result;
            };
            return Reflect.get(target, property, receiver);
        },
        set (target, property, value, receiver) {
            const oldValue = target[property];
            const result = Reflect.set(target, property, value, receiver);
            if (oldValue !== value) notifyObservers("set", {
                index: property,
                value: value
            }, result);
            return result;
        }
    });
}
$07fd0000f26edeb5$export$2b76b04f92326cd.prototype.subscribe = function(callback) {
    this.observers.add(callback);
};
$07fd0000f26edeb5$export$2b76b04f92326cd.prototype.unsubscribe = function(callback) {
    this.observers.delete(callback);
};








var $c5a7ff2cef84a00c$exports = {};

$parcel$export($c5a7ff2cef84a00c$exports, "html", () => $c5a7ff2cef84a00c$export$c0bb0b647f701bb5);
$parcel$export($c5a7ff2cef84a00c$exports, "customElement", () => $c5a7ff2cef84a00c$re_export$customElement);
$parcel$export($c5a7ff2cef84a00c$exports, "css", () => $c5a7ff2cef84a00c$re_export$css);
$parcel$export($c5a7ff2cef84a00c$exports, "ViewTemplate", () => $c5a7ff2cef84a00c$re_export$ViewTemplate);
$parcel$export($c5a7ff2cef84a00c$exports, "HTMLView", () => $c5a7ff2cef84a00c$re_export$HTMLView);
$parcel$export($c5a7ff2cef84a00c$exports, "volatile", () => $c5a7ff2cef84a00c$re_export$volatile);
$parcel$export($c5a7ff2cef84a00c$exports, "WebComponent", () => $284c1ee70f828408$export$7f8b9f308979d41d);



function $46dc60c1cf1be4f3$export$855330f8a2a9f2e8(effect_name, callback, dependencies) {
    (0, $f24f9f18a7b99a68$export$dc573d8a6576cdb3)(dependencies)(this, effect_name, callback);
}



function $facec54f608d45db$export$ad300186e7a01246(key, value) {
    function useState(key) {
        return [
            this[key],
            (newValue)=>{
                this[key] = newValue;
            }
        ];
    }
    (0, $a1f8df21dd3b8ee9$export$ca000e230c0caa3e)()(this, key, value);
    return useState.bind(this)(key);
}



function $7d8e02f1fed4bf94$export$366cf43304d85757(key, value) {
    (0, $a1f8df21dd3b8ee9$export$ca000e230c0caa3e)()(this, key, value, false);
}


class $284c1ee70f828408$export$7f8b9f308979d41d extends (0, $hgUW1$FASTElement) {
    constructor(){
        super();
        // onStateChange?: (name: string, oldValue: any, newValue: any) => void = null;
        this.stateChangeCallbacks = new Set();
    }
    get bindState() {
        return (0, $facec54f608d45db$export$ad300186e7a01246).bind(this);
    }
    get bindConsumable() {
        return (0, $7d8e02f1fed4bf94$export$366cf43304d85757).bind(this);
    }
    get bindEffect() {
        return (0, $46dc60c1cf1be4f3$export$855330f8a2a9f2e8).bind(this);
    }
    get onStateChange() {
        return (function(callback) {
            if (!this.stateChangeCallbacks.has(callback)) this.stateChangeCallbacks.add(callback);
        }).bind(this);
    }
    handleStateChange(propertyName, oldValue, newValue) {
        (this.stateChangeCallbacks || []).forEach((callback)=>{
            callback(propertyName, oldValue, newValue);
        });
        this[propertyName] = newValue;
        this.effects?.execute(propertyName);
    }
    connectedCallback() {
        this.effects?.execute();
        super.connectedCallback();
    }
}
$284c1ee70f828408$export$7f8b9f308979d41d.define = (0, $hgUW1$FASTElement).define;


const $c5a7ff2cef84a00c$export$c0bb0b647f701bb5 = (0, $hgUW1$html);


var $407cc31aa7cd1215$exports = {};
var $899e8805cec15bdd$exports = {};

$parcel$export($899e8805cec15bdd$exports, "ViewExecutionContext", () => $899e8805cec15bdd$export$1053a9be1bcefef9);




class $899e8805cec15bdd$export$1053a9be1bcefef9 extends Object {
    constructor(data){
        super();
        this.states = {};
        this.effects = (0, $935380081e1d8be7$export$af73ab700e00763e)();
        this.stateChangeCallbacks = new Set();
        this.handleStateChange = (propertyName, oldValue, newValue)=>{
            (this.stateChangeCallbacks || []).forEach((callback)=>{
                callback(propertyName, oldValue, newValue);
            });
            this[propertyName] = newValue;
            this["effects"].execute(propertyName);
        };
        Object.assign(this, data);
    }
    get bindState() {
        return (0, $facec54f608d45db$export$ad300186e7a01246).bind(this);
    }
    get bindConsumable() {
        return (0, $7d8e02f1fed4bf94$export$366cf43304d85757).bind(this);
    }
    get bindEffect() {
        return (0, $46dc60c1cf1be4f3$export$855330f8a2a9f2e8).bind(this);
    }
    get onStateChange() {
        return (function(callback) {
            if (!this.stateChangeCallbacks.has(callback)) this.stateChangeCallbacks.add(callback);
        }).bind(this);
    }
    static init(data) {
        return new $899e8805cec15bdd$export$1053a9be1bcefef9(data);
    }
}


var $3905e9ecff2931d2$exports = {};


var $dad4474276f9eead$exports = {};


$parcel$exportWildcard($407cc31aa7cd1215$exports, $899e8805cec15bdd$exports);
$parcel$exportWildcard($407cc31aa7cd1215$exports, $3905e9ecff2931d2$exports);
$parcel$exportWildcard($407cc31aa7cd1215$exports, $dad4474276f9eead$exports);


var $4c5fb5bb6e826a01$exports = {};
var $ea70625fa1b5e3d6$exports = {};

$parcel$export($ea70625fa1b5e3d6$exports, "render", () => $ea70625fa1b5e3d6$export$b3890eb0ae9dca99);


// Fonction pour observer les enfants ajoutés
const $ea70625fa1b5e3d6$var$observeChilds = (container, config, callback)=>{
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
function $ea70625fa1b5e3d6$export$b3890eb0ae9dca99(template, container = document.body, data = {}) {
    let context = (0, $899e8805cec15bdd$export$1053a9be1bcefef9).init(data);
    let observer = $ea70625fa1b5e3d6$var$observeChilds(container, {
        childList: true,
        // Observe les ajouts et suppressions d'enfants
        subtree: false // Si true, observe tous les descendants du parent
    }, (node)=>{
        if (node instanceof (0, $284c1ee70f828408$export$7f8b9f308979d41d) == false) {
            if (context["effects"]) context["effects"].execute();
        }
        observer.disconnect();
    });
    let element = template.render(context, container);
    return element;
}


$parcel$exportWildcard($4c5fb5bb6e826a01$exports, $ea70625fa1b5e3d6$exports);





export {$935380081e1d8be7$export$af73ab700e00763e as Effects, $b1b98f19caab25c2$export$683a0e8baad8b9c3 as attrState, $b1b98f19caab25c2$import$843d46ff018552b8$7aabe8b3a840d2fd as attr, $a1f8df21dd3b8ee9$export$ca000e230c0caa3e as state, $f24f9f18a7b99a68$export$dc573d8a6576cdb3 as effect, $5193209399721411$re_export$when as when, $5193209399721411$re_export$repeat as repeat, $5193209399721411$re_export$children as children, $5193209399721411$re_export$elements as elements, $5193209399721411$re_export$slotted as slotted, $21522158c10703ef$export$ca3487b83ec6860a as AsyncAppendBindig, $21522158c10703ef$export$5761d9f85430a54b as AsyncAppendDirective, $21522158c10703ef$export$eaa89ade56b7c0c1 as asyncAppend, $f6651d38d609160e$export$7d1e3a5e95ceca43 as createRef, $f6651d38d609160e$export$1ef8aea9a6de98d as RefDirective, $f6651d38d609160e$export$eff4d24c3ff7876e as ref, $c66c6ea353620255$export$28205fa712822499 as StateBindig, $c66c6ea353620255$export$792c882b75ca2192 as StateDirective, $c66c6ea353620255$export$60241385465d0a34 as useState, $6e530dd7df9f7fe5$export$81053cd05d55c9d8 as StyleBindig, $6e530dd7df9f7fe5$export$18211b6e76035cfa as StyleDirective, $6e530dd7df9f7fe5$export$1d567c320f4763bc as style, $15db1e855f042fe6$export$f36d8f10294685f8 as UntilBindig, $15db1e855f042fe6$export$51c6edf8ee19b71a as UntilDirective, $15db1e855f042fe6$export$a40009bd2c363351 as until, $592e71a4a1bc8d5d$export$dcc5cf24d8fb3b41 as createObservableObject, $07fd0000f26edeb5$export$2b76b04f92326cd as ObservableArray, $f0b90d4a5f4da766$export$b176171395436676 as ObservableObject, $fde9406d76ec24a9$re_export$State as State, $fde9406d76ec24a9$re_export$createState as createState, $fde9406d76ec24a9$re_export$createStorage as createStorage, $fde9406d76ec24a9$re_export$uuid as uuid, $c5a7ff2cef84a00c$export$c0bb0b647f701bb5 as html, $c5a7ff2cef84a00c$re_export$customElement as customElement, $c5a7ff2cef84a00c$re_export$css as css, $c5a7ff2cef84a00c$re_export$ViewTemplate as ViewTemplate, $c5a7ff2cef84a00c$re_export$HTMLView as HTMLView, $c5a7ff2cef84a00c$re_export$volatile as volatile, $284c1ee70f828408$export$7f8b9f308979d41d as WebComponent, $899e8805cec15bdd$export$1053a9be1bcefef9 as ViewExecutionContext, $ea70625fa1b5e3d6$export$b3890eb0ae9dca99 as render};
//# sourceMappingURL=module.js.map
