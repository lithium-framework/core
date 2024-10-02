import { WebComponent } from "src/webComponent";
import { state } from "../decorators";
import { ViewExecutionContext } from "src/templateComponent";
import { ObservableProxy } from "../utils";

type _WebComponent = (typeof WebComponent & { $states : ObservableProxy< any , any > });
type _ViewExecutionContext = (typeof ViewExecutionContext & { $states : ObservableProxy< any , any > });

export function bindConsumable<Value = any>( this:_WebComponent | _ViewExecutionContext , key:string , value:Value ){
  state( this , key , value , false );
}