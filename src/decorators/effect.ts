import { ObservableObject, ObservableProxy } from "src/utils";
import { ViewExecutionContext } from "../templateComponent";
import { WebComponent } from "../webComponent/model";
import { Effects } from "../models/effects";
import { IWebComponent } from "src/webComponent/interface";

type _WebComponent = (typeof WebComponent & { $effects : Effects } & IWebComponent);
type _ViewExecutionContext = (typeof ViewExecutionContext & { $effects : Effects } & IWebComponent);

const initializeEffect = function ( this : _WebComponent | _ViewExecutionContext , target : _WebComponent | _ViewExecutionContext , propertyKey:string , dependencies:string[] , value:any ){

  if (!this.$effects) {
    this.$effects = new Effects().bind( this );

    Object.defineProperty( target , 'effects' , {
      get : () => {
        return this.$effects;
      }
    })

  }

  // Initialisation de la propriété d'état dans $states si elle n'existe pas
  if (!(propertyKey in this.$effects)) {
    this.$effects.set( propertyKey , value );
  }

  Object.defineProperty( target , propertyKey , {
    get(){
      return target.effects.get( propertyKey );
    },
    set(newValue){

      target.effects.set( propertyKey , {
        name : propertyKey,
        dependencies : dependencies,
        callback : newValue
      });

      return true;
    },
    enumerable: true,
    configurable: true
  });

}

export function effect( dependencies:any[] ){

  return ( target:IWebComponent , propertyKey: string , value = null ) => {

    const isWebComponent = target instanceof WebComponent;
    const isViewExecutionContext = target instanceof ViewExecutionContext;

    // Si le décorateur est appliqué directement sur une instance
    if (isWebComponent || isViewExecutionContext) {

      initializeEffect.call( target , target , propertyKey , dependencies , value );

    } else {

      // Si le décorateur est appliqué sur le prototype (classe)
      const originalConnectedCallback:any = target["connectedCallback"] || function () {};

      (target as any).connectedCallback = function () {

        // Initialise l'état à la création de l'instance
        initializeEffect.call(this , target , propertyKey , dependencies , value);
        // Appelle la méthode originale connectedCallback si elle existe
        originalConnectedCallback.call(this , target , propertyKey , dependencies , value);

      };
    }

    // if( target instanceof WebComponent ){

    //   if('$effects' in target == false)(target as any).$effects = new Effects().bind( target );

    //   Object.defineProperty( target , propertyKey , {
    //     get(){
    //       return target["$effects"]?.get( propertyKey );
    //     },
    //     set(newValue){

    //       target["$effects"].set( propertyKey , {
    //         name : propertyKey,
    //         dependencies : dependencies as any,
    //         callback : newValue
    //       });
          
    //       return true;
    //     },
    //     enumerable: true,
    //     configurable: true
    //   });

    // }

    // if( target instanceof ViewExecutionContext ){

    //   if('$effects' in target == false)(target as any).$effects = new Effects().bind( target );

    //   if(!target[propertyKey])Object.defineProperty( target , propertyKey , {
    //     get(){
    //       return target.effects.get( propertyKey );
    //     },
    //     set(newValue){
  
    //       target.effects.set( propertyKey , {
    //         name : propertyKey,
    //         dependencies : dependencies as any,
    //         callback : newValue
    //       });
  
    //       return true;
    //     },
    //     enumerable: true,
    //     configurable: true
    //   });
  
    //   if( value )target[ propertyKey ] = value;

    // }
  
  }

}