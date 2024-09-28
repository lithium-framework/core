import { WebComponent } from "../webComponent";
import { ViewExecutionContext } from "../templateComponent";

export interface IEffect{
  name:string;
  dependencies : string[];
  callback:any;
}

export class Effects extends Map< string , IEffect >{

  private target:WebComponent | ViewExecutionContext = null;

  bind( target ){
    this.target = target;
    return this;
  }

  execute(){

    let effects = this.target.constructor["effects"];

    let effects_without_depedencies = [...this.values()].filter(( effect ) => !effect.dependencies || effect.dependencies.length == 0 ? effect : null);
    let effects_with_depedencies = [...this.values()].filter(( effect ) => effect.dependencies && effect.dependencies.length > 0 ? effect : null);

    effects_with_depedencies.forEach(( effect ) => {

      let { dependencies , callback:useEffect , name } = effect;

      dependencies.forEach(( dependency ) => {

        console.log({ "subscribe" : this.target.$states })

        this.target.$states.subscribe( dependency , useEffect );

      })

    })

    effects_without_depedencies.forEach(( effect ) => {

      console.log({ effect })

      let { callback:useEffect } = effect;
      useEffect();

    })

    // this.forEach( effect => {
      
    //   let { dependencies , callback:useEffect } = effect;
    //   if(!dependencies)dependencies = [];

    //   if(dependencies.length > 0){

    //     dependencies.forEach(( dependency ) => {
    //       this.target.$states.subscribe( dependency , useEffect )
    //     })

    //   }
    //   else useEffect();

    // });

  }

  constructor( effects?:Record< string , IEffect > ){
    super();

    if(effects)Object.values(effects).forEach((effect) => {
      console.log({ effect })
      this.set( effect.name , effect )
    });

    console.log({ self : this , effects , values : Object.values({...effects}) , keys : Object.keys({...effects}) });

  }

}