import { WebComponent } from "../webComponent";
import { ViewExecutionContext } from "../templateComponent";
import { IWebComponent } from "src/webComponent/interface";

export type EffectRegistery = ( Map< string , IEffect > & { execute( dependency?:string ):void } );

export interface IEffect{
  name:string;
  dependencies : string[];
  callback:any;
}

export function Effects( effects?:Record< string , IEffect > ):EffectRegistery{

  const effects_register = new Map() as EffectRegistery;

  if(effects)Object.values(effects).forEach((effect) => {
    this.set( effect.name , effect )
  });

  effects_register.execute = function( dependency?:string ){

    let effects_without_depedencies = [...this.values()].filter(( effect ) => !effect.dependencies || effect.dependencies.length == 0 ? effect : null);
    let effects_with_depedencies = [...this.values()].filter(( effect ) => effect.dependencies && effect.dependencies.length > 0 ? effect : null);

    effects_with_depedencies.forEach(( effect ) => {

      let { dependencies , callback:useEffect , name } = effect;

      if(dependency && dependencies.includes( dependency )){
        console.log( `Math effect ${dependency}` )
        useEffect();
      }

    })

    if( !dependency )effects_without_depedencies.forEach(( effect ) => {

      let { callback:useEffect } = effect;
      try{
        useEffect();
      }
      catch(error){
        console.error(error);
      }

    })

  }

  return effects_register;

}

// export class Effects extends Map< string , IEffect >{

//   execute( dependency?:string ){

//     let effects_without_depedencies = [...this.values()].filter(( effect ) => !effect.dependencies || effect.dependencies.length == 0 ? effect : null);
//     let effects_with_depedencies = [...this.values()].filter(( effect ) => effect.dependencies && effect.dependencies.length > 0 ? effect : null);

//     effects_with_depedencies.forEach(( effect ) => {

//       let { dependencies , callback:useEffect , name } = effect;

//       if(dependency && dependencies.includes( dependency )){
//         useEffect();
//       }

//     })

//     if( !dependency )effects_without_depedencies.forEach(( effect ) => {

//       let { callback:useEffect } = effect;
//       try{
//         useEffect();
//       }
//       catch(error){
//         console.error(error);
//       }

//     })

//   }

//   constructor( effects?:Record< string , IEffect > ){
//     super();

//     if(effects)Object.values(effects).forEach((effect) => {
//       this.set( effect.name , effect )
//     });

//   }

// }