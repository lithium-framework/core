import { ViewTemplate } from '@microsoft/fast-element/dist/esm';
import { ObservableObject, ObservableProxy } from '../utils/observable-object/models';
import { state } from '../decorators';
import { ViewContext } from './types';
import { Effects, IEffect } from '../models/effects';
import { IWebComponent } from '../webComponent/interface';

import { bindEffect } from '../controllers/bindEffect';
import { bindState } from '../controllers/bindState';
import { bindConsumable } from '../controllers/bindConsumable';

export class ViewExecutionContext< T = any , States extends Record<string , any> = Record<string , any> > extends Object implements IWebComponent{

  static states = {};
  static effects = {};

  $states:ObservableProxy< any , any > = ObservableObject.init( this.constructor["states"] );
  $effects:Effects = new Effects( this.constructor["effects"] ).bind( this );
  
  // bindState = <T>( key:keyof States , value:T ):[ state:T , setter:( newValue:T ) => void ] => {

  //   function useState( this:ViewExecutionContext , key:keyof States ):[ state:T , setter:( newValue:T ) => void ]{
  //     return [ this[key as string] , ( newValue ) => {
  //       console.log({ newValue })
  //       this[key as string] = newValue;
  //     } ]
  //   }

  //   if(this.#_state_keys.includes(key as string))return useState.bind(this)( key );

  //   Object.defineProperty( this , key , {
  //     get(){
  //       return JSON.parse(this.states[key]);
  //     },
  //     set( value ){
        
  //       if(!this.#_state_keys.includes(key)){

  //         this.#_state_keys.push( key );

  //         this.$states = ObservableObject.init({
  //           [key] :  JSON.stringify(value),
  //           ...Object.fromEntries(
  //             new Map(
  //               Array.from( this.#_state_keys , ( key ) => {
  //                 return [ key , this.$states[`${key}`] ]
  //               } )
  //             )
  //           )
  //         });

  //       }

  //       this.$states[key] = JSON.stringify(value);

  //     }
  //   });

  //   this[key as string] = value;
  //   return useState.bind(this)( key );

  // }

  // bindConsumable = <T = any>( key:string , value:T ) => {
  //   state( this , key , value , false );
  // }

  // bindEffect = ( callback : () => void , dependencies : any[] ) => {
  //   this.$effects.push( {
  //     dependencies,
  //     callback
  //   } as IEffect )
  // }

  get bindState():< Value = never >(key: keyof States, value: Value) => [state: Value, setter: (newValue: Value) => void]{ return bindState.bind(this) }
  get bindConsumable():< Value >(key: string, value: Value) => void{ return bindConsumable.bind(this) }
  get bindEffect():( effect_name:string , callback: () => void, dependencies: any[])=> void{ return bindEffect.bind( this ) }

  constructor( data?:T ){
    super();
    Object.assign( this , data );
  }

  static init< T extends Record<string , any> = {} >( data?:T ):ViewContext<T>{
      return new ViewExecutionContext( data ) as any as ViewContext<T>;
  }

}