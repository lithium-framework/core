import { State } from '@lithium-framework/state';
import { Directive , directive } from './../directives/index.js';
import { render } from '../index.js';

export class UseEffectDirective extends Directive{

  get parent(){ return this["_$parent"] }
  get part(){ return this["__part"] }

  private _isMounted = false;

  // get _$isConnected(){
  //   return this._isMounted;
  // }

  set _$isConnected( value ){
    alert(value)
    this._isMounted = value;
  }

  constructor( partInfo ){
    super( partInfo );
  }

  render( callback:( target:HTMLElement ) => any , observables:State<any>[] = [] ){

    callback( this.part.element || null );

  }
}

export const useEffect = directive( UseEffectDirective );