import { ViewContext } from './types';
import { EffectRegistery, Effects, IEffect } from '../models/effects';
import { IWebComponent } from '../webComponent/interface';

import { bindEffect } from '../controllers/bindEffect';
import { bindState } from '../controllers/bindState';
import { bindConsumable } from '../controllers/bindConsumable';

export class ViewExecutionContext< T = any , States extends Record<string , any> = Record<string , any> > extends Object implements IWebComponent{

  states = {};
  effects?: EffectRegistery = Effects();

  constructor(data?:T ){
    super();

    Object.assign( this , data );

  }

  get bindState():< Value = never >(key: keyof States, value: Value) => [state: Value, setter: (newValue: Value) => void]{ return bindState.bind(this) }
  get bindConsumable():< Value >(key: string, value: Value) => void{ return bindConsumable.bind(this) }
  get bindEffect():( effect_name:string , callback: () => void, dependencies: any[])=> void{ return bindEffect.bind( this ) }

  onStateChange?: (name: string, oldValue: any, newValue: any) => void = null;

  handleStateChange = ( propertyName, oldValue, newValue ) => {
    if(this.onStateChange)this.onStateChange( propertyName, oldValue, newValue )
    this[propertyName] = newValue;
    this["effects"].execute( propertyName );
  }

  static init< T extends Record<string , any> = {} >( data?:T ):ViewContext<T>{
      return new ViewExecutionContext( data ) as any as ViewContext<T>;
  }

}