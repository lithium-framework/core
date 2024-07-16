import { customElement , html } from '../../webComponent/index.js';
import { Router , RouteConfig } from '../router/index.js'

/* The MainApplication class extends Router and specifies a type property for routing configuration. */
@customElement({
  name : 'main-application',
  template : html`<slot></slot>`
})
class MainApplication extends Router{

  type : 'pathname-router' | 'hash-router' = 'pathname-router';

  constructor( config:RouteConfig[] ){
    super( config );
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

}

export declare module global{
  interface HTMLElementTagNameMap{
    'main-application' : MainApplication;
  }
}


export { 
  MainApplication 
};