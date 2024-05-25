// import { html as lithtml , render as litRender , TemplateResult } from 'lit-html';
import * as Utils from './utils/index.js';
import { createPage } from './page/index.js';
import { WebComponent } from './webComponent/index.js';
import { FlyComponent } from './flyComponent/models.js';
(() => {
    if (!window["lithium"])
        window["lithium"] = {
            Utils,
            createPage,
            WebComponent,
            FlyComponent
        };
})();
//# sourceMappingURL=index.js.map