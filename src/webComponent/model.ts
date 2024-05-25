import { FASTElement } from "@microsoft/fast-element";
import { ObservableObject } from '../utils/observable-object/index.js';

import {
  state,
  attrState
} from './decorators/index.js';

import {
  when,
  repeat,
  ref,
  children,
  slotted
} from './directives/index.js';

export class WebComponent extends FASTElement{

  static states = {};

  static get state(){ return state };
  static get attrState(){ return attrState };
  static get when(){ return when }
  static get repeat(){ return repeat }
  static get ref(){ return ref }
  static get children(){ return children }
  static get slotted(){ return slotted }

  $states = new ObservableObject( this.constructor["states"] );

  constructor(){
    super();

    Object.keys(this.constructor["states"]).forEach( key => {
      // delete this[key];
      Object.defineProperty( this , key , {
        get(){
          return this.$states[key];
        },
        set( value ){
          this.$states[key] = value;
        }
      } )
    });

  }

  connectedCallback() {
    super.connectedCallback();
  }
  
}