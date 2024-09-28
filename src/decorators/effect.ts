import { ViewExecutionContext } from "../templateComponent";
import { WebComponent } from "../webComponent/model";

export function effect( dependencies:any[] ){

  return ( target:WebComponent | ViewExecutionContext , propertyKey: string , value = null ) => {

    if( target instanceof WebComponent ){

      Object.defineProperty( target , propertyKey , {
        get(){
          return target.constructor["effects"][ propertyKey ];
        },
        set(newValue){
          target.constructor["effects"][ propertyKey ] = {
            name : propertyKey,
            dependencies : dependencies as any,
            callback : newValue
          };
          return true;
        },
        enumerable: true,
        configurable: true
      });

    }

    if( target instanceof ViewExecutionContext ){

      if(!target[propertyKey])Object.defineProperty( target , propertyKey , {
        get(){
          return target.$effects.get( propertyKey );
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
  
      if( value )target[ propertyKey ] = value;

    }
  
  }

}