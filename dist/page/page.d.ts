import { ViewTemplate } from '../webComponent/index.js';
export type PageDefinition = {
    template: ViewTemplate;
    plugins?: (() => Promise<any>)[];
};
export declare function Page(options: PageDefinition): () => Promise<HTMLElement>;
