import { WebComponent } from "src/webComponent";
import { state } from "../decorators";
import { ViewExecutionContext } from "src/templateComponent";
import { ObservableProxy } from "../utils";

export function bindConsumable<Value = any>( this:WebComponent | ViewExecutionContext , key:string , value:Value ){
  state()( this , key , value , false );
}