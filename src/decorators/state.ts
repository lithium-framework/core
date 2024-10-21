import { Observable } from "@microsoft/fast-element";

export interface IStateOptions {
    lazy? : boolean;
}

export function state( options ? : IStateOptions ) {

    options = Object.assign( {
        lazy : false
    } , options || {} );

  return function (target: any, propertyName: string , value?:any , y?) {
      let privateName = `_${propertyName}`

      if(!target[propertyName])Object.defineProperty(target, propertyName, {
          get() {
              // Retourne la valeur de l'état depuis l'objet 'states' pour CETTE instance
              if (!this.states) {
                  this.states = {};  // Si l'objet 'states' n'existe pas encore, on le crée pour chaque instance
              }

              Observable.track(this, propertyName);

              return this.states[privateName];
          },
          set(newValue: any) {
              // Si l'objet 'states' n'existe pas encore, le créer pour CETTE instance
              if (!this.states) {
                  this.states = {};
              }

              const oldValue = this.states[privateName];

              if(oldValue != newValue){

                this.states[privateName] = newValue;

                if(!options.lazy)Observable.notify( this, propertyName);

                // Si l'état a changé, déclenche une action pour CETTE instance
                if (oldValue !== newValue) {
                    this.handleStateChange(propertyName, oldValue, newValue);
                }

              }

          },
          enumerable: true,
          configurable: true
      });

      if( value && target[propertyName] == null )target[ propertyName ] = value;

  };
}