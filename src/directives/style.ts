import { HTMLDirective, HTMLBindingDirective, HTMLView , Binding, BindingDirective, ExpressionObserver, Subscriber } from '@microsoft/fast-element';
import { CSSProperties } from '../utils/css-object';

export class StyleBindig extends Binding{

  createObserver(subscriber: Subscriber, directive: BindingDirective): ExpressionObserver<any, any, any> {

    console.log({ subscriber , directive })

    return {
      bind(controller){
        console.log({ controller })
      }
    }

  }
  
}

export class StyleDirective extends HTMLBindingDirective {

  css:CSSProperties = null;

  constructor( css:CSSProperties ) {
      super( new StyleBindig( (x) => null ) );
      Object.assign( this , { css } );

  }

createBehavior():any {

  let { targetNodeId } = this;
  let view:HTMLView = null;

  return {
      bind : (source:HTMLView) => {

        let target = source.targets[targetNodeId];
        if(target instanceof HTMLElement)Object.assign( target.style , this.css );

      },
      unbind : () => {
          // Nettoyage si nécessaire
      }
  };

}

static use( css:CSSProperties ){
  return new StyleDirective( css )
}

}

HTMLDirective.define( StyleDirective );

export const style = ( css:CSSProperties ) => StyleDirective.use( css );