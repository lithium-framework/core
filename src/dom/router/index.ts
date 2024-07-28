import { render } from '../../dom/index.js';
import { customElement , WebComponent , ViewTemplate , html } from '../../webComponent/index.js';
import RouteRecognizer, { Params } from 'route-recognizer';

if ('URLPattern' in globalThis == false) { 
  import("urlpattern-polyfill").then(({ URLPattern }) => { window["URLPattern"] = URLPattern; })
}

/* The `BaseRouteConfig` interface is defining a structure for the configuration options that can be
provided for a route in the routing system. Here's a breakdown of each property within the
`BaseRouteConfig` interface: */
interface BaseRouteConfig {
  name?: string | undefined;
  render?: ViewTemplate<{ [key: string]: string | undefined }>;
  enter?: (params: {
      [key: string]: string | undefined;
  }) => Promise<boolean> | boolean;
}

/* The `interface PathRouteConfig` is extending the `BaseRouteConfig` interface and adding a new
property `path` of type string to it. This means that any object that implements the
`PathRouteConfig` interface must have all the properties defined in `BaseRouteConfig` interface
(like `name`, `render`, `enter`) along with the additional `path` property of type string. This
allows for more specific route configurations that include a path string for routing purposes. */
interface PathRouteConfig extends BaseRouteConfig {
  path: string;
}

/* The `interface URLPatternRouteConfig` is extending the `BaseRouteConfig` interface by adding a new
property `pattern` of type `URLPattern` to it. This means that any object that implements the
`URLPatternRouteConfig` interface must have all the properties defined in the `BaseRouteConfig`
interface (such as `name`, `render`, `enter`) along with the additional `pattern` property of type
`URLPattern`. */
interface URLPatternRouteConfig extends BaseRouteConfig {
  pattern: URLPattern;
}

type RouteConfig = PathRouteConfig | URLPatternRouteConfig;

/* The `Routes` class extends `RouteRecognizer` and constructs routes based on the provided
`routeConfig` array. */
class Routes extends RouteRecognizer{

  routeConfig;

  constructor( router:Router , routeConfig:RouteConfig[] ){
    super();

    routeConfig.forEach(( route:PathRouteConfig ) => {

      this.add([
        { 
          path : route.path , 
          handler : ( params ) => {
            render( route.render , router , params )
          },
        }
      ] , route.name ? { as : route.name } : null)

    })

  }

}

/* The `Router` class is a custom web component that handles routing based on either pathname or hash,
with configurable routes and templates for header and footer. */
@customElement({
  name : "lithium-router",
  template : html`<slot></slot>`
})
class Router extends WebComponent{

  /* The line `type : 'pathname-router' | 'hash-router' = 'hash-router';` is defining a property `type`
  in the `Router` class with a type of string literal union `'pathname-router' | 'hash-router'`.
  This means that the `type` property can only have one of two specific string values:
  `'pathname-router'` or `'hash-router'`. */
  type : 'pathname-router' | 'hash-router' = 'hash-router';

  /* `private _config:RouteConfig[] = [];` is defining a private property `_config` in the `Router`
  class with an initial value of an empty array of `RouteConfig` objects. This property is used to
  store the route configuration provided to the `Router` instance. */
  private _config:RouteConfig[] = [];

  /* The line `private _routes = new Routes(this, this._config || []);` is initializing a private
  property `_routes` in the `Router` class with a new instance of the `Routes` class. The `Routes`
  class is responsible for constructing routes based on the provided `routeConfig` array. */
  private _routes = new Routes(this, this._config || []);

  header:ViewTemplate<Router>;
  footer:ViewTemplate<Router>;

  get routes(){
    return new Proxy( this._routes , {
      get(){ return undefined; },
      set(){ return false; }
    } )
  }

  get config(){
    return this._config;
  }

  set config( newConfig:RouteConfig[] ){
    this._config = newConfig;
    this._routes = new Routes(this, newConfig || []);
  }

  constructor( config:RouteConfig[] ){
    super();
    this.config = config;
  }

  outlet(){

    this.clear();
    let url = this.type == 'pathname-router' ? this.pathname : this.hash;
    let result = this._routes.recognize( url );

    Array.from( { length : result.length } , ( i , iterator ) => {

      console.log({ i , iterator })

      let route = result[iterator];
      let handler = route.handler as ( params:Params ) => void;
      handler( route.params );

    });

  }

  onHashChange( event:HashChangeEvent ){
    this.outlet();
  }

  normalizeHashLocation( hash:string ){
    return hash.replace('#' , '');
  }

  get pathname(){
    return window.location.pathname;
  }

  get hash(){
    return this.normalizeHashLocation( window.location.hash );
  }

  clear(){
    this.childNodes.forEach((element) => {
      element.remove();
    })
  }

  connectedCallback(): void {

    super.connectedCallback();

    if(this.type == 'hash-router'){
      window.addEventListener( 'hashchange' , this.onHashChange.bind(this) );
    }

    this.outlet();

    if(!window.location.hash)window.location.hash = '/';

  }

};

export declare module global{
  interface HTMLElementTagNameMap{
    'lithium-router' : Router;
  }
}

export { 
  BaseRouteConfig,
  PathRouteConfig,
  URLPatternRouteConfig,
  RouteConfig,
  Routes,
  Router
}