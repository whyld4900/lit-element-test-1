import {TestRick} from '../test-rick.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('test-rick', () => {
  test('is defined', () => {
    const el = document.createElement('test-rick');
    assert.instanceOf(el, TestRick);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<test-rick></test-rick>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<test-rick name="Test"></test-rick>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<test-rick></test-rick>`)) as TestRick;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
