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
export class ObservableObject extends Object {
    static init(initialObject) {
        return new ObservableObject(initialObject);
    }
    constructor(initialObject) {
        super();
        initialObject = Object.keys(initialObject).reduce((result, key) => {
            let value = initialObject[key];
            result[`_${key}`] = value;
            Observable.defineProperty(result, key);
            return result;
        }, {});
        return new Proxy(initialObject, {
            get(store, propKey) {
                if (store[propKey])
                    return store[propKey];
                else
                    return undefined;
            },
            set(store, propKey, value) {
                if (store[propKey]) {
                    store[propKey] = value;
                }
                else {
                    store[`_${propKey}`] = value;
                    Observable.defineProperty(store, propKey);
                }
                return true;
            }
        });
    }
    ;
}
//# sourceMappingURL=models.js.map