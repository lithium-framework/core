import { observable } from "@microsoft/fast-element";
import { ViewExecutionContext } from "../templateComponent/model";
import { WebComponent } from "../webComponent/model";
import { ObservableObject, ObservableProxy } from "../utils";

type _WebComponent = (typeof WebComponent & { $states : ObservableProxy< any , any > });
type _ViewExecutionContext = (typeof ViewExecutionContext & { $states : ObservableProxy< any , any > });

/** 
 * This est l'instance ( dernier layer du WebComponent , donc le WebComponentCustom )
 * Target est le layer WebComponent ( proto du WebComponentCustom extends WebComponent ) 
*/
const initializeState = function ( this: _WebComponent | _ViewExecutionContext , target:_WebComponent | _ViewExecutionContext , propertyKey:string , value:any ) {

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

/**
 * @state decorator
 * Définit une propriété d'état observable sur une instance de WebComponent ou ViewExecutionContext.
 * 
 * @param {Object} target - La cible (prototype ou instance) sur laquelle le décorateur est appliqué.
 * @param {string} propertyKey - Le nom de la propriété d'état.
 * 
 */
export function state(target: _WebComponent | _ViewExecutionContext, propertyKey: string, value: any = null , x?) {

  const isWebComponent = target instanceof WebComponent;
  const isViewExecutionContext = target instanceof ViewExecutionContext;

  // Fonction pour initialiser l'état lors de la création de l'instance
  // const initializeState = function ( this: (typeof WebComponent & { $states : ObservableProxy< any , any > }) | (typeof ViewExecutionContext & { $states : ObservableProxy< any , any > }) ) {

  //   if (!this.$states) {
  //     this.$states = ObservableObject.init< any , any >({});

  //     Object.defineProperty( target , 'states' , {
  //       get : () => {
  //         return this.$states;
  //       }
  //     })

  //   }

  //   // Initialisation de la propriété d'état dans $states si elle n'existe pas
  //   if (!(propertyKey in this.$states)) {
  //     this.$states[propertyKey] = value;
  //   }

  //   // Ajouter la propriété observable sur l'instance
  //   Object.defineProperty( this , propertyKey, {
  //     get: function () {
  //       return target["states"][propertyKey];
  //     },
  //     set: function (newValue) {
  //       target["states"][propertyKey] = newValue;
  //     },
  //     enumerable: true,
  //     configurable: true,
  //   });

  //   // Rendre l'état observable
  //   observable( target["states"] , propertyKey);
  // };

  // Si le décorateur est appliqué directement sur une instance
  if (isWebComponent || isViewExecutionContext) {

    initializeState.call( target , target , propertyKey , value );

  } else {

    // Si le décorateur est appliqué sur le prototype (classe)
    const originalConnectedCallback:any = target["connectedCallback"] || function () {};

    (target as any).connectedCallback = function () {

      // Initialise l'état à la création de l'instance
      initializeState.call(this , target , propertyKey , value);
      // Appelle la méthode originale connectedCallback si elle existe
      originalConnectedCallback.call(this);

    };
  }
  
}