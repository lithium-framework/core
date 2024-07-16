
import type { Properties as CSSProperties } from 'csstype'; 
import { uuid , FixedLengthString } from '@lithium-framework/huid';
import decamelize from 'decamelize';

import { CSSObject } from './types.js'

/** La classe `_cssObject` fournit des méthodes statiques pour travailler avec des objets CSS dans
TypeScript, notamment l'encodage, le décodage, l'aplatissement, la normalisation et la compilation
d'objets CSS. */
export class _cssObject{

  private _css : CSSObject = {};

  static init( css:CSSObject ){
    return new _cssObject( css );
  }

  constructor( css:CSSObject ){
    Object.assign( this._css , css );
  }

  // Transformation du cssObject en String
  _toCssString(){
    return `${Array.from( Object.keys( this._css ) , ( key ) => {
      return [ decamelize( key  , {separator: '-'} ) , this._css[key] ].join(':');
    } ).join(';')};`;
  }

  [Symbol.toPrimitive](){
    return this._toCssString();
  }

  /**
   * La fonction génère un UUID aléatoire en codant trois groupes de quatre zéros et en les concaténant
   * avec des traits de soulignement.
   * @returns une chaîne composée de trois parties séparées par des traits de soulignement. Chaque
   * partie est un UUID (Universally Unique Identifier) codé sous la forme d'une chaîne de longueur
   * fixe de 4 caractères.
   */
  static randomUUID(){
    return `${uuid.encode( '0000' as FixedLengthString<4> )}_${uuid.encode( '0000' as FixedLengthString<4> )}${uuid.encode( '0000' as FixedLengthString<4> )}`;
  }

}