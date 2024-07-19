import { HTMLView, StatelessAttachedAttributeDirective } from '@microsoft/fast-element';
export interface IElementRef<T extends Node> {
    value: T | null;
}
export declare function createRef<T extends Node>(): IElementRef<T>;
export declare class RefDirective<T extends Node> extends StatelessAttachedAttributeDirective<IElementRef<T>> {
    options: IElementRef<T>;
    constructor(options: IElementRef<T>);
    bind(controller: HTMLView): void;
    static use<T extends Node>(options: IElementRef<T>): RefDirective<T>;
}
export declare const ref: <T extends Node>(options: IElementRef<T>) => RefDirective<T>;
