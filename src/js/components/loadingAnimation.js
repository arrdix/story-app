import { html } from 'lit';
import { LitLightDom } from './base/LitLightDom';

export class LoadingAnimation extends LitLightDom {
  render() {
    return html`
      <div class="loading-element position-absolute top-50 start-50 translate-middle fs-1">
        <div class="spinner-grow text-dark" style="width: 3rem; height: 3rem;" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `;
  }
}

customElements.define('loading-animation', LoadingAnimation);
