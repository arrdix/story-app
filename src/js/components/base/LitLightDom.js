import { LitElement } from 'lit';

export class LitLightDom extends LitElement {
  createRenderRoot() {
    return this;
  }
}
