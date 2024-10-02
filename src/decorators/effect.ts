import { ObservableObject } from "src/utils";
import { ViewExecutionContext } from "../templateComponent";
import { WebComponent } from "../webComponent/model";
import { Effects } from "../models/effects";
import { IWebComponent } from "src/webComponent/interface";

export function effect( dependencies:any[] ){

  return ( target:IWebComponent , propertyKey: string , value = null ) => {

    if( target instanceof WebComponent ){

      if('$effects' in target == false)(target as any).$effects = new Effects().bind( target );

      Object.defineProperty( target , propertyKey , {
        get(){
          return target.$effects?.get( propertyKey );
        },
        set(newValue){

          target.$effects.set( propertyKey , {
            name : propertyKey,
            dependencies : dependencies as any,
            callback : newValue
          });
          
          return true;
        },
        enumerable: true,
        configurable: true
      });

    }

    if( target instanceof ViewExecutionContext ){

      if('$effects' in target == false)(target as any).$effects = new Effects().bind( target );

      if(!target[propertyKey])Object.defineProperty( target , propertyKey , {
        get(){
          return target.effects.get( propertyKey );
        },
        set(newValue){
  
          target.effects.set( propertyKey , {
            name : propertyKey,
            dependencies : dependencies as any,
            callback : newValue
          });
  
          return true;
        },
        enumerable: true,
        configurable: true
      });
  
      if( value )target[ propertyKey ] = value;

    }
  
  }

}