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

  private $states:ObservableProxy< any , any > = ObservableObject.init({});
  get states():ObservableProxy< any , any >{ return this.$states };
  private $effects: Effects = new Effects().bind(this);
  get effects():Effects{ return this.$effects };

  constructor(data?:T ){
    super();

    Object.assign( this , data );

  }

  get bindState():< Value = never >(key: keyof States, value: Value) => [state: Value, setter: (newValue: Value) => void]{ return bindState.bind(this) }
  get bindConsumable():< Value >(key: string, value: Value) => void{ return bindConsumable.bind(this) }
  get bindEffect():( effect_name:string , callback: () => void, dependencies: any[])=> void{ return bindEffect.bind( this ) }

  static init< T extends Record<string , any> = {} >( data?:T ):ViewContext<T>{
      return new ViewExecutionContext( data ) as any as ViewContext<T>;
  }

}