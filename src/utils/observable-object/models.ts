import { Observable } from "@microsoft/fast-element";

export type ObservableProxy< key extends string , value extends any = any > = Record<string , value> & { 
  subscribe : ObservableObject< key , value >["subscribe"] , 
  unsubscribe : ObservableObject< key , value >["unsubscribe"],
  keys():string[];
  values():any[];
}

export class ObservableObject< key extends string , value extends any = any > extends Object{

  static init< key extends string , value extends any >( initialObject:Record<key , value> ){
    let observabe = new ObservableObject< key , value >( initialObject );
    return observabe.createProxy.bind(observabe)();
  }

  $data:Record<string , value> = {};
  private observers: Record<string, Set<(newValue: any, oldValue: any) => void>> = {};

  constructor( initialObject:Record<key , value> ){
    super();
    Object.assign( this.$data , initialObject );
  };

  // Enregistre un observateur pour une propriété spécifique
  subscribe = (propKey: key, callback: (newValue: any, oldValue: any) => void) => {
    if (!this.observers[propKey]) {
      this.observers[propKey] = new Set();
    }
    this.observers[propKey].add(callback);
  }

  // Supprime un observateur pour une propriété spécifique
  unsubscribe = (propKey: key, callback: (newValue: any, oldValue: any) => void) => {
    if (this.observers[propKey]) {
      this.observers[propKey].delete(callback);
    }
  }

  // Méthode appelée pour notifier les observateurs d'un changement de valeur
  private notify(propKey: string, newValue: any, oldValue: any) {
    if (this.observers[propKey]) {
      this.observers[propKey].forEach(callback => callback(newValue, oldValue));
    }
  }

  set = <T extends value = any>( key:key , value:T ) => {   

    const oldValue = this.$data[`_${key}`];

    this.$data[`_${key}`] = value as any;
    Observable.defineProperty( this.$data, key);
    this.notify(key, value, oldValue);
    return this.$data[key];

  }

  createProxy():ObservableProxy< key , value > {

    return new Proxy( this.$data , {
      get : ( store , propKey:string ) => {

        let result:any = undefined;

        if( propKey == "subscribe" )return this.subscribe;
        else if( propKey == "unsubscribe" )return this.unsubscribe;
        else if( propKey == "keys" )return () => Object.keys( this.$data );
        else if( propKey == "values" )return () => Object.values( this.$data );

        try{
          result = store[propKey];
        }
        catch(error){
          console.error(error);
        }
        finally{
          return result;
        }

      },
      set : ( store , propKey: string, value: any ) => {
        const oldValue = store[propKey];

        if(store[propKey]){
          store[propKey] = value;
        }
        else {
          store[ `_${propKey}` ] = value;
          Observable.defineProperty( store, propKey);
        }

        this.notify(propKey, value, oldValue);

        return true;
  
      }
    }) as ObservableProxy< key , value >;

  }

}

export { Observable };