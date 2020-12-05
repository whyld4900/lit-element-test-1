import { LitElement } from 'lit-element';
export declare class TestRick extends LitElement {
    static styles: import("lit-element").CSSResult;
    name: string;
    count: number;
    render(): import("lit-element").TemplateResult;
    private _onClick;
    foo(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'test-rick': TestRick;
    }
}
//# sourceMappingURL=test-rick.d.ts.map