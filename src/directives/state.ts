// import { ViewTemplate, HTMLBindingDirective, ExecutionContext } from '@microsoft/fast-element';
import { State , createState } from '@lithium-framework/state';
import { ViewTemplate, HTMLDirective , HTMLBindingDirective, HTMLView , Binding, BindingDirective, ExpressionObserver, Subscriber } from '@microsoft/fast-element';

export class StateBindig extends Binding{

  createObserver(subscriber: Subscriber, directive: BindingDirective): ExpressionObserver<any, any, any> {

    console.log({ subscriber , directive })

    return {
      bind(controller){
        console.log({ controller })
      }
    }

  }
  
}

export class StateDirective<T = any> extends HTMLBindingDirective {

    _state:State<T> = null;
    get state(){ return this._state.mutator[0] }
    set state( value:T ){ this._state.mutator[1](value) }

    _callback:( newValue:T ) => ViewTemplate = null;

    constructor( state: State<T> , callback:( newValue:T ) => ViewTemplate ) {
        super( new StateBindig( (x) => null ) );
        this._state = state;
        this._callback = callback;
    }

  createBehavior():any {

    let { targetNodeId } = this;
    let view:HTMLView = null;

    return {
        bind : (source:HTMLView) => {

            let target = source.targets[targetNodeId];

            if(this._callback){

                this._state.subscribe(() => {
                    view.dispose();
                    view = this._callback( this.state ).render( source , target.parentElement );
                });

                view = this._callback( this.state ).render( source , target.parentElement );

            }

            else{

                this._state.subscribe(() => {
                    if("textContent" in target){
                        target.textContent = `${this.state}`;
                    }
                });

                if("textContent" in target){
                    target.textContent = `${this.state}`;
                }

            }

        },
        unbind : () => {
            // Nettoyage si nécessaire
        }
    };

  }

  static use<T = any>( state , callback ){
    return new StateDirective<T>( state , callback )
  }

}

HTMLDirective.define( StateDirective )

export const useState = <T>( state: State<T> , callback?:( newValue:T ) => ViewTemplate ) => StateDirective.use<T>( state , callback );