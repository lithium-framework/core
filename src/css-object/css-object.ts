// const autoprefixer = require('autoprefixer')
// const postcss = require('postcss')

// import postcss from 'postcss';
// import autoprefixer from 'autoprefixer';
// import autoprefixer = require('autoprefixer');
// import { default as ObjectCSS } from 'json-to-css';
import type { Properties as CSSProperties } from 'csstype'; 
// import { flatten } from 'uni-flatten';
import { uuid , FixedLengthString } from '@lithium-framework/huid';
import decamelize from 'decamelize';

export { CSSProperties };
export type CSSObject = Partial<CSSProperties>;
// export type SmartCSSProperties = CSSProperties & Partial<{ [key:`${string} = ${string}`] : SmartCSSProperties }> | Partial<{ [key:string] : SmartCSSProperties }>;

// export const StyleSheets:Map<string,StylePatern> = new Map();

// export type StyleDeclarationProxy = Partial<typeof Proxy> & { key : string , declaration : CSSProperties };
// export type StyleProxy< T extends string[] > = Partial<typeof Proxy> & StylePatern & Record< T[number] , string & StyleDeclarationProxy>;

// export type StylePatern = {
//   token: string;
//   cssObject: CSSProperties;
//   result: ({token:string} & postcss.Result);
// };

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

  // /**
  //  * La fonction renvoie une instance d'ObjectCSS avec le cssObject fourni.
  //  * @param {CssObject} [cssObject] - Le paramètre `cssObject` est un objet qui représente les
  //  * propriétés CSS et leurs valeurs. Il peut être utilisé pour définir le style d'un élément HTML.
  //  * @returns une instance de la classe ObjectCSS.
  //  */
  // static of(cssObject?:CssObject){
  //   return ObjectCSS.of( cssObject )
  // }

  // /**
  //  * La fonction renvoie la version décamélisée d'une chaîne.
  //  * @returns La fonction `decamelize` est renvoyée.
  //  */
  // static get decamelize(){ return decamelize }

  // /**
  //  * La fonction `normalize` prend un objet CSS en entrée et en renvoie une version normalisée, où les
  //  * clés sont converties en kebab-case et tous les objets imbriqués sont également normalisés.
  //  * @param {CssObject} cssObject - Le paramètre `cssObject` est un objet qui représente une
  //  * déclaration de style CSS. Il contient des sélecteurs comme clés et leurs déclarations de style
  //  * correspondantes comme valeurs. Chaque déclaration de style est également un objet, où les clés
  //  * sont des noms de propriétés CSS et les valeurs sont les valeurs de propriétés correspondantes.
  //  * @returns La fonction `normalize` renvoie un `CssObject` normalisé.
  //  */
  // static normalize( cssObject:CssObject ):CssObject{

  //   // console.log( { cssObject , flat } )

  //   let result = Object.fromEntries(
  //     new Map(
  //       Array.from( Object.keys( cssObject ) , ( selector ) => {

  //         let declaration = cssObject[ selector ];

  //         return [
  //           selector,
  //           // Gestion des camelCase & Gestion des SmartCSSObjects
  //           Object.fromEntries(
  //             new Map(
  //               Array.from( Object.keys( declaration ) , ( key ) => {

  //                 return [ _cssObject.decamelize( key , { separator : '-' } ) , declaration[key] ];

  //               } )
  //             )
  //           )
  //         ];

  //       } )
  //     )
  //   );

  //   return result;

  // }

  // static decode(){

  // }

  // /**
  //  * La fonction `encode` prend un objet CSS en entrée, génère une table de correspondance avec des
  //  * clés encodées et renvoie la table de correspondance avec l'objet CSS encodé.
  //  * @param {CssObject} cssObject - Le paramètre `cssObject` est un objet qui représente les styles
  //  * CSS. Il contient des paires clé-valeur où les clés sont des noms de propriétés CSS et les valeurs
  //  * sont les valeurs de propriétés correspondantes.
  //  * @returns La fonction `encode` renvoie un tableau contenant deux éléments. Le premier élément est
  //  * un objet « correspondanceTable » qui mappe les clés originales du « cssObject » à leurs clés
  //  * codées. Le deuxième élément est l'objet « encoded » qui est une version modifiée du « cssObject »
  //  * avec les clés remplacées par leurs versions codées.
  //  */
  // static encode( cssObject:CssObject ):[ Record<string,string> , CssObject ]{

  //   let correspondanceTable = {};
  //   let encoded = Object.fromEntries(
  //     new Map(
  //       Array.from( Object.keys( cssObject ) , ( key:string ) => {
  //         let value = cssObject[key];
  //         let newKey = `${key}_${_cssObject.randomUUID()}`;
  //         correspondanceTable[key] = newKey;
  //         return [ newKey , value ]
  //       } )
  //     )
  //   );

  //   return [ correspondanceTable , encoded ];

  // }

  // /**
  //  * La fonction prend un objet CSS et en renvoie une version aplatie avec des sélecteurs formatés.
  //  * @param {CssObject} cssObject - Le paramètre `cssObject` est un objet qui représente les styles
  //  * CSS. Il peut avoir des propriétés et des valeurs imbriquées.
  //  * @returns un objet qui contient les propriétés CSS aplaties. L'objet est structuré de manière à ce
  //  * que les sélecteurs soient les clés et les valeurs soient des objets contenant les propriétés CSS
  //  * et leurs valeurs correspondantes.
  //  */
  // static flat( cssObject:CssObject ):any{

  //   let flat = flatten( cssObject );
  //   let results = {};

  //   for(let key of Object.keys( flat )){

  //     let selector:any = key.split('.').filter(x => x);
  //     let property = selector.pop();

  //     /// Format selector
  //     selector = selector.join('').match(/(?:[^.[]+|\["(?:\\.|[^"\\]+)"\])(?:\.(?![^\[]*\]))?/g);
  //     let newSelector = selector.join(' > ').replace(/\["/g, '[').replace(/\"]/g, ']');

  //     if(!results[ newSelector ])results[newSelector] = {};
  //     results[newSelector][property] = flat[key];

  //   }

  //   return results;

  // }

  // /**
  //  * La fonction garantit que les clés d'un objet CSS donné sont correctement formatées.
  //  * @param {CssObject} [cssObject] - Le paramètre `cssObject` est un objet qui représente les styles
  //  * CSS. Il contient des paires clé-valeur où les clés sont des sélecteurs CSS (soit des noms de
  //  * classe, soit des noms d'éléments) et les valeurs sont les styles CSS correspondants à ces
  //  * sélecteurs.
  //  * @returns un nouvel objet créé à partir des entrées d'une carte. La carte est créée en itérant sur
  //  * les clés de l'entrée `cssObject`. Si la clé ne commence pas par un point (.), elle est préfixée
  //  * par un point avant d'être ajoutée à la carte. La valeur associée à chaque clé dans `cssObject` est
  //  * également ajoutée à la carte. Enfin, la carte est convertie
  //  */
  // static ensureObjectKeys(cssObject?:CssObject & any){
  //   return Object.fromEntries(
  //     new Map(
  //       Array.from( Object.keys( cssObject ) , ( key ) => {
  //         if( key[0] != "." )return [ `.${key}` , cssObject[key] ];
  //         else return [ key , cssObject[key] ];
  //       } )
  //     )
  //   );
  // }

  // isSmartCssObject( cssObject:CssObject ){



  // }

  // /**
  //  * La fonction vérifie si une chaîne de sélection donnée contient la sous-chaîne " = ".
  //  * @param {string} selector - Une chaîne représentant un sélecteur CSS.
  //  * @returns une valeur booléenne indiquant si la chaîne de sélection donnée contient la sous-chaîne '
  //  * = '.
  //  */
  // static isSmartSelector( selector:string ){
  //   return selector.includes( ' = ' );
  // }

}

export function createCSS( css:CSSObject ){
  return _cssObject.init( css );
}