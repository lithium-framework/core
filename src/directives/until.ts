import { ViewTemplate , html , HTMLDirective, HTMLBindingDirective, HTMLView , Binding, BindingDirective, ExpressionObserver, Subscriber } from '@microsoft/fast-element';

export class UntilBindig extends Binding{

  createObserver(subscriber: Subscriber, directive: BindingDirective): ExpressionObserver<any, any, any> {

    console.log({ subscriber , directive })

    return {
      bind(controller){
        console.log({ controller })
      }
    }

  }
  
}

export class UntilDirective extends HTMLBindingDirective {

  fn:Promise<ViewTemplate> = null;
  template:ViewTemplate = null;

  constructor( fn:Promise<ViewTemplate> , template:ViewTemplate ) {
    super( new UntilBindig( (x) => null ) );
    Object.assign( this , { fn , template } );
}

createBehavior():any {

  let { targetNodeId } = this;

  return {
    bind : (source:HTMLView) => {

      let target = source.targets[targetNodeId];
      let loading = this.template.render( source , target instanceof HTMLElement ? target : target.parentElement );

      this.fn
      .then(( result ) => {
        loading.dispose()
        result.render( source , target instanceof HTMLElement ? target : target.parentElement );
      })
      .catch(( error ) => {
        console.error(error);
        loading.dispose();
        html`<span>Error: ${error}</span>`.render( source , target instanceof HTMLElement ? target : target.parentElement );
      })

    },
    unbind : () => {
        // Nettoyage si nécessaire
    }
};

}

static use( fn:Promise<ViewTemplate> , template: ViewTemplate ){
  return new UntilDirective( fn , template);
}

}

HTMLDirective.define( UntilDirective );

export const until = ( fn:Promise<ViewTemplate> , template:ViewTemplate ) => UntilDirective.use( fn , template );