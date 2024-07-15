import { Router, RouteConfig } from '../router/index.js';
declare class MainApplication extends Router {
    type: 'pathname-router' | 'hash-router';
    constructor(config: RouteConfig[]);
    connectedCallback(): void;
}
export declare namespace global {
    interface HTMLElementTagNameMap {
        'main-application': MainApplication;
    }
}
export { MainApplication };
