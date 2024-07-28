import { ViewTemplate, HTMLDirective , HTMLBindingDirective, HTMLView , html , Binding } from '@microsoft/fast-element';
import type { Subscriber , BindingDirective, ExpressionObserver } from '@microsoft/fast-element';

export class AsyncAppendBindig extends Binding{

  createObserver(subscriber: Subscriber, directive: BindingDirective): ExpressionObserver<any, any, any> {

    console.log({ subscriber , directive })

    return {
      bind(controller){
        console.log({ controller })
      }
    }

  }
  
}

export class AsyncAppendDirective<T = any> extends HTMLBindingDirective {

  fn:Promise<T> = null;
  callback:( result:T ) => ViewTemplate = null;

  constructor( fn:Promise<T> , callback:( result:T ) => ViewTemplate ) {
    super( new AsyncAppendBindig( (x) => null ) );
    Object.assign( this , { fn , callback } );
  }

  createBehavior():any {

    let { targetNodeId } = this;

    return {
        bind : (source:HTMLView ) => {

          let target = source.targets[targetNodeId];

          this.fn
          .then(( result ) => {
            this.callback( result ).render( source , target instanceof HTMLElement ? target : target.parentElement );
          })
          .catch(( error ) => {
            console.error(error)
            html`<span>Error: ${error}</span>`.render( source , target instanceof HTMLElement ? target : target.parentElement );
          })

        },
        unbind : () => {
            // Nettoyage si nécessaire
        }
    };

  }

  static use<T>( fn:Promise<T> , callback:( result:T ) => ViewTemplate ){
    return new AsyncAppendDirective( fn , callback);
  }

}

HTMLDirective.define( AsyncAppendDirective );

export { Subscriber }

export const asyncAppend = <T = any>( fn:Promise<T> , callback:( result:T ) => ViewTemplate ) => AsyncAppendDirective.use<T>( fn , callback );