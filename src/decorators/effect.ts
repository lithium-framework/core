import { Effects } from "../models/effects";
import { IWebComponent } from "../webComponent/interface";

export function effect( dependencies:any[] ){

  return ( target:IWebComponent , propertyName: string , value = null ) => {

    if( !target[propertyName] )Object.defineProperty(target, propertyName, {
      get() {
          // Retourne la valeur de l'état depuis l'objet 'states' pour CETTE instance
          if (!this.effects) {
              this.effects = Effects();  // Si l'objet 'states' n'existe pas encore, on le crée pour chaque instance
          }

          return this.effects.get( propertyName );
      },
      set(newValue: any) {
          // Si l'objet 'states' n'existe pas encore, le créer pour CETTE instance
          if (!this.effects) {
            this.effects = Effects();
          }

          this.effects.set( propertyName , {
            name : propertyName,
            dependencies : dependencies,
            callback : newValue
          } )

      },
      enumerable: true,
      configurable: true
    });
    
    if( value && target[propertyName] == null )target[ propertyName ] = value;
  
  }

}