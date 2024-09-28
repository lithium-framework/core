import { FASTElement } from "@microsoft/fast-element";
import { ObservableObject, ObservableProxy } from '../utils/observable-object/models';
import { IWebComponent } from "./interface";
import { Effects } from "../models/effects";

import { bindEffect } from '../controllers/bindEffect';
import { bindState } from '../controllers/bindState';
import { bindConsumable } from '../controllers/bindConsumable';

/* The WebComponent class extends FASTElement and provides state management functionality using
ObservableObject. */
export class WebComponent extends FASTElement implements IWebComponent{

  /* The `static states = {};` line is declaring a static property named `states` on the `WebComponent`
  class and initializing it as an empty object `{}`. This property is intended to hold the initial
  state values for the component. By defining it as a static property, it is shared among all
  instances of the `WebComponent` class rather than being specific to individual instances. This
  allows all instances of the class to access and modify the same set of state values. */
  static states = ObservableObject.init({});
  static effects = {};

  /* The line ` = ObservableObject.init( this.constructor["states"] );` is initializing an
  instance property named `` on the `WebComponent` class. This property is being set to the
  result of calling the `init` method of the `ObservableObject` class, passing in the initial state
  values defined in the `states` static property of the `WebComponent` class
  (`this.constructor["states"]`). */
  get $states():ObservableProxy< any , any > { return this.constructor["states"] };
  get $effects():Effects { return new Effects( this.constructor["effects"] ).bind( this ) };

  constructor(){
    super();
  }

  get bindState():< States , Value >(key: keyof States, value: Value) => [state: Value, setter: (newValue: Value) => void]{ return bindState.bind(this) }
  get bindConsumable():< Value >(key: string, value: Value) => void{ return bindConsumable.bind(this) }
  get bindEffect():( effect_name : string , callback: () => void, dependencies: any[])=> void{ return bindEffect.bind( this ) }

  connectedCallback() {
    this.$effects.execute();
    super.connectedCallback();
  }

  static define = FASTElement.define
  
}