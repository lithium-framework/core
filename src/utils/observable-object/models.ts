import { Observable } from "@microsoft/fast-element";

export class ObservableObject< key extends string , value extends any = any > extends Object{

  static init< key extends string , value extends any >( initialObject:Record<key , value> ){
    let observabe = new ObservableObject< key , value >( initialObject );
    return observabe.createProxy();
  }

  $data:Record<string , value> = {};

  constructor( initialObject:Record<key , value> ){
    super();

    Object.keys( initialObject ).forEach(( key:key ) => {
      this.set( key , initialObject[key] );
    })

  };

  set = <T extends value = any>( key:key , value:T ) => {   

    this.$data[`_${key}`] = value as any;
    Observable.defineProperty( this.$data, key);
    return this.$data[key];

  }

  createProxy(){

    return new Proxy( this.$data , {
      get( store , propKey:string ){

        let result = undefined;

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
      set( store , propKey: string, value: any ){

        if(store[propKey]){
          store[propKey] = value;
        }
        else {
          store[ `_${propKey}` ] = value;
          Observable.defineProperty( store, propKey);
        }

        return true;
  
      }
    })

  }

}