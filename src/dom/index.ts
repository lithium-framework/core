import { ViewTemplate } from '@microsoft/fast-element';
import { ObservableObject } from '../utils/observable-object/index.js';
import { state } from '../decorators/index.js';
import './application/index.js';
import './router/index.js';

export class ComponentExecutionContext< T = any , States extends Record<string , any> = Record<string , any> >{

  $states = ObservableObject.init< any , any >({});
  get states(){ return this.$states }
  #_state_keys:string[] = [];
  
  createState = <T>( key:keyof States , value:T ):[ state:T , setter:( newValue:T ) => void ] => {

    if(this.#_state_keys.includes(key as string))return this.useState( key );

    Object.defineProperty( this , key , {
      get(){
        return JSON.parse(this.states[key]);
      },
      set( value ){
        
        if(!this.#_state_keys.includes(key)){

          this.#_state_keys.push( key );

          this.$states = ObservableObject.init({
            [key] :  JSON.stringify(value),
            ...Object.fromEntries(
              new Map(
                Array.from( this.#_state_keys , ( key ) => {
                  return [ key , this.$states[`${key}`] ]
                } )
              )
            )
          });

        }

        this.$states[key] = JSON.stringify(value);

      }
    });

    this[key as string] = value;
    return this.useState( key );

  }

  useState = <T>( key:keyof States ):[ state:T , setter:( newValue:T ) => void ] => {

    return [ this[key as string] , ( newValue ) => {
      console.log({ newValue })
      this[key as string] = newValue;
    } ];

  }

  createConsumable = <T = any>( key:string , value:T ) => {
    state( this , key , value , false );
  }

  constructor( data?:T ){
      Object.assign( this , data );
  }

  static init< T extends Record<string , any> = {} >( data?:T ):ComponentContext<T>{
      return new ComponentExecutionContext( data ) as any as ComponentContext<T>;
  }

}

export type ComponentContext< T = Record<string , any> , States = Record<string , any> > = ComponentExecutionContext<T , States> & T;

export function render< T extends Record<string , any> = {} , Storage extends Record<string , any> = Record<string , any> >(template: ViewTemplate<ComponentContext<any, Record<string, any>>, any>, container: HTMLElement = document.body , data = {} ) {

  let context = ComponentExecutionContext.init(data);
  return template.render( context , container);

}