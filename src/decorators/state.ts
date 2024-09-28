import { observable } from "@microsoft/fast-element";
import { ViewExecutionContext } from "../templateComponent/model";
import { WebComponent } from "../webComponent/model";

/**
 * @State decorator
 * A decorator to define a state property on a WebComponent.
 * This state property is observable, and its changes are detected and handled.
 * 
 * @param {Object} target - The prototype of the class where the state property is defined.
 * @param {string} propertyKey - The name of the property to be defined as a state.
 * 
 * @example
 * ```typescript
 * /// Define a counter component using the State decorator

 * customElement({
 *     name: 'counter-element',
 *     template: html`...`
 * })
 * class CounterElement extends WebComponent {
 *     State count: number = 0;
 * 
 *     increment() {
 *         this.count += 1;
 *     }
 * 
 *     connectedCallback() {
 *         super.connectedCallback();s
 *     }
 * }
 * ```
 */
export function state(target: WebComponent | ViewExecutionContext, propertyKey: string , value:any = null , constructible = false){

  if(constructible)target.constructor["states"] = target.constructor["states"] || {};

  if( target instanceof WebComponent ){

    Object.defineProperty( target , propertyKey , {
      get(){
        return target.constructor["states"][propertyKey];
      },
      set(newValue){
        target.constructor["states"][propertyKey] = newValue;
        return true;
      },
      enumerable: true,
      configurable: true
    } );

    observable( target.constructor["states"] , propertyKey);

  }

  if( target instanceof ViewExecutionContext ){

    if( propertyKey in target == false ){

      Object.defineProperty( target , propertyKey , {
        get(){
          return target.$states[propertyKey];
        },
        set(newValue){
          target.$states[propertyKey] = newValue;
          return true;
        },
        enumerable: true,
        configurable: true
      } );
  
      observable( target.$states , propertyKey);
  
      if(value && target[propertyKey] == null)target[propertyKey] = value;
  
    }

  }

}