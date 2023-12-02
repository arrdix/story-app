import { html } from 'lit';
import { LitLightDom } from './base/LitLightDom';

export class AppLogo extends LitLightDom {
  render() {
    return html`
      <div class="row justify-content-center">
        <img src="/logo-long-dark.png" class="logo w-50" alt="StoryApp Logo" />
      </div>
    `;
  }
}

customElements.define('app-logo', AppLogo);
