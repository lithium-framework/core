import { TemplateResult } from '../flyComponent/index.js';
export type PageDefinition = {
    template: TemplateResult;
    plugins?: (() => Promise<any>)[];
};
export declare function Page(options: PageDefinition): () => Promise<HTMLElement>;
