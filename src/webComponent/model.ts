import { FASTElement, Observable } from "@microsoft/fast-element";
import { IWebComponent } from "./interface";

import { bindEffect } from '../controllers/bindEffect';
import { bindState } from '../controllers/bindState';
import { bindConsumable } from '../controllers/bindConsumable';

/* The WebComponent class extends FASTElement and provides state management functionality using
ObservableObject. */
export class WebComponent extends FASTElement implements IWebComponent{

  constructor(){
    super();
  }

  get bindState():< States , Value >(key: keyof States, value: Value) => [state: Value, setter: (newValue: Value) => void]{ return bindState.bind(this) }
  get bindConsumable():< Value >(key: string, value: Value) => void{ return bindConsumable.bind(this) }
  get bindEffect():( effect_name : string , callback: () => void, dependencies: any[])=> void{ return bindEffect.bind( this ) }

  // onStateChange?: (name: string, oldValue: any, newValue: any) => void = null;
  stateChangeCallbacks:Set< ( (name: string, oldValue: any, newValue: any) => void ) > = new Set();
  get onStateChange(){
    return (function( this : WebComponent & IWebComponent , callback : (name: string, oldValue: any, newValue: any) => void ){
  
      if(!this.stateChangeCallbacks.has( callback )){
        this.stateChangeCallbacks.add( callback );
      }
  
    }).bind(this)
  }

  handleStateChange( this:WebComponent & IWebComponent, propertyName, oldValue, newValue ){

    (this.stateChangeCallbacks || []).forEach(( callback ) => {
      callback( propertyName, oldValue, newValue );
    })

    this[propertyName] = newValue;
    this.effects?.execute( propertyName );

  }

  connectedCallback( this:IWebComponent ) {
    this.effects?.execute();
    super.connectedCallback();
  }

  static define = FASTElement.define
  
}