import { Observable, observable } from "@microsoft/fast-element";
import { ViewExecutionContext } from "../templateComponent/model";
import { WebComponent } from "../webComponent/model";
import { ObservableObject, ObservableProxy } from "../utils";

type _WebComponent = (typeof WebComponent & { $states : ObservableProxy< any , any > });
type _ViewExecutionContext = (typeof ViewExecutionContext & { $states : ObservableProxy< any , any > });

// function generateUniqueKey(length = 6) {
//   // Génère une chaîne de chiffres aléatoires de la longueur spécifiée
//   return Math.random().toString().slice(2, 2 + length);
// }

// /** 
//  * This est l'instance ( dernier layer du WebComponent , donc le WebComponentCustom )
//  * Target est le layer WebComponent ( proto du WebComponentCustom extends WebComponent ) 
// */
// const initializeState = function (
//   instance: _WebComponent | _ViewExecutionContext,
//   propertyKey: string,
//   value: any
// ) {
//   // Vérifier si l'instance possède déjà ses propres états
//   if (!instance.$states) {

//     // Initialiser un nouvel objet observable spécifique à l'instance
//     instance.$states = ObservableObject.init<any, any>({});
    
//     // Définir la propriété 'states' sur l'instance, pas sur le prototype
//     Object.defineProperty(instance, 'states', {
//       get: () => {
//         return instance.$states;
//       },
//     });

//   }

//   const uniqueKey = `${propertyKey}_${generateUniqueKey(6)}`;

//   // Initialiser la propriété d'état dans $states si elle n'existe pas encore

//   // Rendre l'état observable sur l'objet de l'instance ($states)
//   // observable(instance.$states, uniqueKey);

//   // Ajouter la propriété observable sur l'instance
//   Object.defineProperty(instance, propertyKey, {
//     get: function () {
//       return instance.$states[uniqueKey];
//     },
//     set: function (newValue) {
//       console.log({[`set ${uniqueKey}`] : newValue})
//       instance.$states[uniqueKey] = newValue;
//     },
//     enumerable: true,
//     configurable: true,
//   });

//   // observable( instance , propertyKey )

//   if (value) {
//     instance[propertyKey] = value;
//   }

// };

// /**
//  * @state decorator
//  * Définit une propriété d'état observable sur une instance de WebComponent ou ViewExecutionContext.
//  * 
//  * @param {Object} target - La cible (prototype ou instance) sur laquelle le décorateur est appliqué.
//  * @param {string} propertyKey - Le nom de la propriété d'état.
//  * 
//  */
// export function state(target: any, propertyKey: string, value: any = null , x?) {
//   // Stocker le connectedCallback original si le décorateur est appliqué sur une classe
//   const originalConnectedCallback = target.connectedCallback || function () {};

//   // Si le décorateur est appliqué sur une classe (prototype)
//   if (typeof target === 'function') {
//     // Ajouter un hook dans le constructeur pour garantir l'initialisation de l'état
//     const originalConstructor = target.prototype.constructor;
//     target.prototype.constructor = function (...args: any[]) {

//       // Appeler le constructeur original
//       originalConstructor.apply(this, args);

//       // Initialiser l'état pour cette instance
//       initializeState(this, propertyKey, value);
//     };
//   } else {
//     // Si le décorateur est appliqué directement sur une instance
//     initializeState(target, propertyKey, value);
//   }

//   // Assurez-vous que le connectedCallback est exécuté correctement après l'initialisation des états
//   target.connectedCallback = function () {
//     // Initialiser l'état à la création de l'instance (si ce n'est pas déjà fait)
//     initializeState(this, propertyKey, value);
    
//     // Appeler le connectedCallback original si nécessaire
//     originalConnectedCallback.call(this);
//   };
// }

export function state(  ) {
  return function (target: any, propertyName: string , value?:any , y?) {
      let privateName = `_${propertyName}`

      if(!target[propertyName])Object.defineProperty(target, propertyName, {
          get() {
              // Retourne la valeur de l'état depuis l'objet 'states' pour CETTE instance
              if (!this.states) {
                  this.states = {};  // Si l'objet 'states' n'existe pas encore, on le crée pour chaque instance
              }

              Observable.track(this, propertyName);

              return this.states[privateName];
          },
          set(newValue: any) {
              // Si l'objet 'states' n'existe pas encore, le créer pour CETTE instance
              if (!this.states) {
                  this.states = {};
              }

              const oldValue = this.states[privateName];

              if(oldValue != newValue){

                this.states[privateName] = newValue;

                Observable.notify( this, propertyName);

                // Si l'état a changé, déclenche une action pour CETTE instance
                if (oldValue !== newValue) {
                    this.handleStateChange(propertyName, oldValue, newValue);
                }

              }

          },
          enumerable: true,
          configurable: true
      });

      if( value && target[propertyName] == null )target[ propertyName ] = value;

  };
}