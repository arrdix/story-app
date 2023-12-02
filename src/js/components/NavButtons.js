import { html } from 'lit';
import { LitLightDom } from './base/LitLightDom';

export class NavButtons extends LitLightDom {
  render() {
    return html`
      <div class="container rounded-pill d-flex flex-row justify-content-center pop-button">
        <button
          type="button"
          class="btn btn-secondary rounded-pill rotatable p-0"
          id="btn-menu"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNav"
          aria-controls="collapseNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-pause fs-3"></i>
        </button>
        <p class="m-0 fs-6">Menu</p>
      </div>
    `;
  }
}

customElements.define('nav-buttons', NavButtons);
