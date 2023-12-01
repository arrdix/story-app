import { css, html } from "lit";
import { LitLightDom } from "./base/litLightDom";
import { updateWhenLocaleChanges } from "@lit/localize";
import Auth from "../network/auth";

export class MainProfile extends LitLightDom {
  static properties = {
    name: { type: String, reflect: true },
    username: { type: String, reflect: true },
    createdAt: { type: String, reflect: true },
    description: { type: String, reflect: true },
    photoUrl: { type: String, reflect: true },
    owner: { type: String, reflect: true },
  }

  constructor() {
    super();
    this.name = Auth.USER_NAME;
    updateWhenLocaleChanges(this);
  }

  render() {    
    return html`
      <div class="row justify-content-center align-items-end mb-2">
        <img src="${this.owner ? "https://source.unsplash.com/1000x1000/?face" : this.photoUrl}" class="detail-dp object-fit-cover rounded-pill border border-3 border-light p-0 d-none d-md-block" id="detail-dp" alt="Profile Picture">
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-center align-items-center gap-1">
          <h5 class="m-0 text-dark fw-normal fw-bold">${this.name}</h5>
          ${this.owner
          ? html`
            <a href="/login.html" class="btn btn-logout p-0" id="btn-logout" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Log out">
              <i class="bi bi-gear-fill fs-8"></i>
            </a>
            `
          : ""}
        </div>
      </div>
      <div class="row text-center">
          <p class="m-0 text-dark fs-8 fw-light">${this.owner ? " " : this.createdAt}</p>
        ${this.owner
          ? ""
          : html`
            <p class="fs-10 mt-1">${this.description}</p>
          `
        }
      </div>
    `;
  }
}

customElements.define('main-profile', MainProfile);

