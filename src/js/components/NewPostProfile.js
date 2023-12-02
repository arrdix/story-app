import { updateWhenLocaleChanges } from '@lit/localize';
import { html } from 'lit';
import { LitLightDom } from './base/LitLightDom';
import Auth from '../network/auth';

class NewPostProfile extends LitLightDom {
  static properties = {
    name: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.name = Auth.USER_NAME;
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="d-flex justify-content-center align-items-center gap-2">
        <img
          src="https://source.unsplash.com/1000x1000/?face"
          class="rounded-pill border border-2 border-dark w-20"
          alt="Profile Picture"
        />
        <div class="d-flex flex-column">
          <p class="m-0">${this.name}</p>
          <p class="fs-12 m-0">Post new story</p>
        </div>
      </div>
    `;
  }
}

customElements.define('newpost-profile', NewPostProfile);
