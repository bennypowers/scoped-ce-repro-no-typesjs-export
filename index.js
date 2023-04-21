// @ts-check
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
class SAL extends HTMLElement {
}
class SBL extends HTMLElement {
}
class XL extends ScopedElementsMixin(HTMLElement) {
    static scopedElements = {
        'a-l': SAL,
        'b-l': SBL,
    };
    connectedCallback() {
        this.attachShadow({ mode: 'open' }).innerHTML = `
      <a-l></a-l>
      <b-l></b-l>
    `;
    }
}
customElements.define('x-l', XL);
