import { Observable } from "@microsoft/fast-element";

// export function ObservableObject( initialObject:Record<string , any> ){

//   initialObject = Object.keys( initialObject ).reduce(( result , key ) => {

//     let value = initialObject[key];

//     result[`_${key}`] = value;
//     Observable.defineProperty( result, key);

//     return result;

//   } , {})

//   return new Proxy( initialObject , {
//     get( store , propKey:string ){
//       if( store[propKey] )return store[propKey];
//       else return undefined;
//     },
//     set( store , propKey: string, value: any ){

//       if( store[propKey] ){
//         store[propKey] = value;
//       }
//       else{

//         store[ `_${propKey}` ] = value;
//         Observable.defineProperty( store, propKey);

//       }

//       return true;

//     }
//   } )

// }

export class ObservableObject< key extends string , value extends any > extends Object{

  static init< key extends string , value extends any >( initialObject:Record<key , value> ){
    return new ObservableObject< key , value >( initialObject );
  }

  constructor( initialObject:Record<key , value> ){
    super();

    initialObject = Object.keys( initialObject ).reduce(( result , key:string ) => {

      let value = initialObject[key];
  
      result[`_${key}`] = value;
      Observable.defineProperty( result, key);
  
      return result;
  
    } , {}) as Record< string , value >;
  
    return new Proxy( initialObject , {
      get( store , propKey:string ){
        if( store[propKey] )return store[propKey];
        else return undefined;
      },
      set( store , propKey: string, value: any ){
  
        if( store[propKey] ){
          store[propKey] = value;
        }
        else{
  
          store[ `_${propKey}` ] = value;
          Observable.defineProperty( store, propKey);
  
        }
  
        return true;
  
      }
    })

  };

}