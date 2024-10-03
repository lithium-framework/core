import { ObservableObject, ObservableProxy } from "../utils";
import { ViewExecutionContext } from "../templateComponent";
import { WebComponent } from "../webComponent";
import { state } from "../decorators";

export function bindState< States , Value >( this:WebComponent | ViewExecutionContext , key:keyof States , value:Value ):[ state:Value , setter:( newValue:Value ) => void ]{

  function useState( this:ViewExecutionContext , key:keyof States ):[ state:Value , setter:( newValue:Value ) => void ]{

    return [ this[key as string] , ( newValue ) => {
      this[key as string] = newValue;
    } ]

  }

  state()( this , key as string , value );
  return useState.bind( this )( key );

}