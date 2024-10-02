import { observable } from "@microsoft/fast-element";
import { ViewExecutionContext } from "../templateComponent/model";
import { WebComponent } from "../webComponent/model";
import { ObservableObject, ObservableProxy } from "../utils";

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
// export function state(target: WebComponent | ViewExecutionContext, propertyKey: string , value:any = null , constructible = false){

//   if(constructible)target.constructor["states"] = target.constructor["states"] || {};

//   if( target instanceof WebComponent ){

//     if('$states' in target == false)(target as any)["$states"] = ObservableObject.init({});

//     console.log({ target })

//     Object.defineProperty( target , propertyKey , {
//       get(){
//         return target.states[propertyKey];
//       },
//       set(newValue){
//         target.states[propertyKey] = newValue;
//         return true;
//       },
//       enumerable: true,
//       configurable: true
//     } );

//     observable( target.states , propertyKey);

//   }

//   if( target instanceof ViewExecutionContext ){

//     if( propertyKey in target == false ){

//       Object.defineProperty( target , propertyKey , {
//         get(){
//           console.log({ target })
//           return target["$states"][propertyKey];
//         },
//         set(newValue){
//           target["$states"][propertyKey] = newValue;
//           return true;
//         },
//         enumerable: true,
//         configurable: true
//       } );
  
//       observable( target["$states"] , propertyKey);
  
//       if(value && target[propertyKey] == null)target[propertyKey] = value;
  
//     }

//   }

// }


/**
 * @state decorator
 * Définit une propriété d'état observable sur une instance de WebComponent ou ViewExecutionContext.
 * 
 * @param {Object} target - La cible (prototype ou instance) sur laquelle le décorateur est appliqué.
 * @param {string} propertyKey - Le nom de la propriété d'état.
 */
export function state(target: WebComponent | ViewExecutionContext, propertyKey: string, value: any = null , x?) {

  const isWebComponent = target instanceof WebComponent;
  const isViewExecutionContext = target instanceof ViewExecutionContext;

  // Fonction pour initialiser l'état lors de la création de l'instance
  const initializeState = function ( this: (typeof WebComponent & { $states : ObservableProxy< any , any > }) | (typeof ViewExecutionContext & { $states : ObservableProxy< any , any > }) ) {

    if (!this.$states) {
      this.$states = ObservableObject.init< any , any >({});

      Object.defineProperty( target , 'states' , {
        get : () => {
          return this.$states;
        }
      })

    }

    // Initialisation de la propriété d'état dans $states si elle n'existe pas
    if (!(propertyKey in this.$states)) {
      this.$states[propertyKey] = value;
    }

    // Ajouter la propriété observable sur l'instance
    Object.defineProperty( this , propertyKey, {
      get: function () {
        return target["states"][propertyKey];
      },
      set: function (newValue) {
        target["states"][propertyKey] = newValue;
      },
      enumerable: true,
      configurable: true,
    });

    // Rendre l'état observable
    observable( target["states"] , propertyKey);
  };

  console.log({ target , isWebComponent , isViewExecutionContext })

  // Si le décorateur est appliqué directement sur une instance
  if (isWebComponent || isViewExecutionContext) {

    initializeState.call(target);

  } else {

    // Si le décorateur est appliqué sur le prototype (classe)
    const originalConnectedCallback:any = target["connectedCallback"] || function () {};

    (target as any).connectedCallback = function () {

      // Initialise l'état à la création de l'instance
      initializeState.call(this);
      // Appelle la méthode originale connectedCallback si elle existe
      originalConnectedCallback.call(this);

    };
  }
  
}