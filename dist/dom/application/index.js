var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, html } from '../../webComponent/index.js';
import { Router } from '../router/index.js';
/* The MainApplication class extends Router and specifies a type property for routing configuration. */
let MainApplication = class MainApplication extends Router {
    type = 'pathname-router';
    constructor(config) {
        super(config);
    }
    connectedCallback() {
        super.connectedCallback();
    }
};
MainApplication = __decorate([
    customElement({
        name: 'main-application',
        template: html `<slot></slot>`
    }),
    __metadata("design:paramtypes", [Array])
], MainApplication);
export { MainApplication };
//# sourceMappingURL=index.js.map