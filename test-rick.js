var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
let TestRick = class TestRick extends LitElement {
    constructor() {
        super(...arguments);
        this.name = 'World';
        this.count = 0;
    }
    render() {
        return html `
      <h1>Hello..., ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
    }
    _onClick() {
        this.count++;
    }
    foo() {
        return 'foo';
    }
};
TestRick.styles = css `
    :host {
      display: block;
      border: solid 1px red;
      padding: 16px;
      max-width: 800px;
    }
  `;
__decorate([
    property()
], TestRick.prototype, "name", void 0);
__decorate([
    property({ type: Number })
], TestRick.prototype, "count", void 0);
TestRick = __decorate([
    customElement('test-rick')
], TestRick);
export { TestRick };
//# sourceMappingURL=test-rick.js.map