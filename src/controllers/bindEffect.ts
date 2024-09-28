import { WebComponent } from "../webComponent";
import { IEffect } from "../models/effects";
import { ViewExecutionContext } from "../templateComponent";
import { effect } from "../decorators";

export function bindEffect( this:WebComponent | ViewExecutionContext , effect_name:string , callback : () => void , dependencies : any[] ){

  effect( dependencies )( this , effect_name , callback );

}