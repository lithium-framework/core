import { WebComponent, ViewTemplate } from '../../webComponent/index.js';
import RouteRecognizer from 'route-recognizer';
interface BaseRouteConfig {
    name?: string | undefined;
    render?: ViewTemplate<{
        [key: string]: string | undefined;
    }>;
    enter?: (params: {
        [key: string]: string | undefined;
    }) => Promise<boolean> | boolean;
}
interface PathRouteConfig extends BaseRouteConfig {
    path: string;
}
interface URLPatternRouteConfig extends BaseRouteConfig {
    pattern: URLPattern;
}
type RouteConfig = PathRouteConfig | URLPatternRouteConfig;
declare class Routes extends RouteRecognizer {
    routeConfig: any;
    constructor(router: Router, routeConfig: RouteConfig[]);
}
declare class Router extends WebComponent {
    type: 'pathname-router' | 'hash-router';
    private _config;
    private _routes;
    header: ViewTemplate<Router>;
    footer: ViewTemplate<Router>;
    get routes(): Routes;
    get config(): RouteConfig[];
    set config(newConfig: RouteConfig[]);
    constructor(config: RouteConfig[]);
    outlet(): void;
    onHashChange(event: HashChangeEvent): void;
    normalizeHashLocation(hash: string): string;
    get pathname(): string;
    get hash(): string;
    clear(): void;
    connectedCallback(): void;
}
export declare namespace global {
    interface HTMLElementTagNameMap {
        'lithium-router': Router;
    }
}
export { BaseRouteConfig, PathRouteConfig, URLPatternRouteConfig, RouteConfig, Routes, Router };
