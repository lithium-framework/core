import { TemplateResult } from 'lit';
import { render } from '../index.js'

export type PageDefinition = {
  template : TemplateResult;
  plugins? : (() => Promise<any>)[]
}

export function Page( options:PageDefinition ):() => Promise<HTMLElement>{

  return () => {
    return new Promise((next) => {

      Promise.all( (options.plugins? options.plugins : []).reduce(( plugins:Promise<any>[] , pluginFn ) => {
        plugins.push( pluginFn( ) );
        return plugins;
      } , []) )
      .then(( loading ) => {
  
        next( render( options.template , document.createElement('div') ).parentNode as HTMLElement );
  
      })
      .catch((error) => {
  
      })
  
    })
  }
  

}