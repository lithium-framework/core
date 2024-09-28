import { HTMLDirective, HTMLView, Binding, BindingDirective, ExpressionObserver, Subscriber, StatelessAttachedAttributeDirective } from '@microsoft/fast-element';

export interface IElementRef< T extends Node >{
  value : T;
}

export function createRef< T extends Node >():IElementRef<T>{
  return {
    value : null
  }
}

export class RefDirective<T extends Node> extends StatelessAttachedAttributeDirective<IElementRef<T>> {

  options:IElementRef<T> = null;

  constructor( options:IElementRef<T> ) {
    super( options );
    Object.assign( this , { options } )
  }

  bind(controller: HTMLView): void {

    let { lastChild:target } = controller;

    this.options.value = target as any;

  }

  static use<T extends Node>( options:IElementRef<T> ){
    return new RefDirective<T>( options );
  }

}

HTMLDirective.define( RefDirective )

export const ref = <T extends Node>( options:IElementRef<T> ) => RefDirective.use<T>( options );