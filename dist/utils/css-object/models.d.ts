import { CSSObject } from './types.js';
/** La classe `_cssObject` fournit des méthodes statiques pour travailler avec des objets CSS dans
TypeScript, notamment l'encodage, le décodage, l'aplatissement, la normalisation et la compilation
d'objets CSS. */
export declare class _cssObject {
    private _css;
    static init(css: CSSObject): _cssObject;
    constructor(css: CSSObject);
    _toCssString(): string;
    [Symbol.toPrimitive](): string;
    /**
     * La fonction génère un UUID aléatoire en codant trois groupes de quatre zéros et en les concaténant
     * avec des traits de soulignement.
     * @returns une chaîne composée de trois parties séparées par des traits de soulignement. Chaque
     * partie est un UUID (Universally Unique Identifier) codé sous la forme d'une chaîne de longueur
     * fixe de 4 caractères.
     */
    static randomUUID(): string;
}
