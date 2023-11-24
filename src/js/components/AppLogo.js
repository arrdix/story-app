import { html } from "lit";
import { LitLightDom } from "./base/litLightDom";

export class AppLogo extends LitLightDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="row justify-content-md-center mb-5">
        <img src="/logo-long-dark.png" class="${this._isAboutPage() ? "w-75" : "w-50"}" alt="StoryApp Logo">
      </div>
    `;
  }

  _isAboutPage() {
    const currentPage = window.location.pathname;
    const aboutPage = '/about.html';
    return currentPage === aboutPage;
  }
}

customElements.define('app-logo', AppLogo);