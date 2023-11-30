import { html } from "lit";
import { LitLightDom } from "./base/litLightDom";
import { updateWhenLocaleChanges } from "@lit/localize";

export class MainProfile extends LitLightDom {
  static properties = {
    name: { type: String, reflect: true },
    username: { type: String, reflect: true },
    image: { type: String, reflect: true },
  }

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {    
    return html`
      <div class="row justify-content-center align-items-end mb-2">
        <img src="/${this.image}" class="w-50 rounded-pill border border-3 border-light p-0 d-none d-md-block" alt="Profile Picture">
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-center align-items-center gap-1">
          <p class="m-0 text-dark fs-8 fw-light">@${this.username}</p>
          <a href="/login.html" class="btn btn-logout p-0" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Log out">
            <i class="bi bi-gear-fill fs-8"></i>
          </a>
        </div>
      </div>
      <div class="row text-center">
        <h5 class="m-0 text-dark fw-normal fw-bold">${this.name}</h5>
      </div>
    `;
  }
}

customElements.define('main-profile', MainProfile);

