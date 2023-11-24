import { html } from "lit";
import { LitLightDom } from "./base/litLightDom";

export class MainProfile extends LitLightDom {
  static properties = {
    name: { type: String, reflect: true },
    username: { type: String, reflect: true },
    image: { type: String, reflect: true },
  }

  constructor() {
    super();
  }

  render() {
    return html`
      ${this._isHomePage()
        ? html `
            <div class="row justify-content-center ${this._isHomePage() ? "mb-2" : "mb-3"}">
              <img src="/${this.image}" class="w-50 rounded-pill border border-3 border-light p-0 d-none d-lg-block" alt="Profile Picture">
            </div>
            <div class="row">
              <div class="col-12 d-flex justify-content-center align-items-end gap-2">
                <p class="m-0 text-dark fs-6">@${this.username}</p>
                <a href="/" class="btn p-0" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Log out">
                  <i class="bi bi-gear-fill fs-8"></i>
                </a>
              </div>
            </div>
            <div class="row text-center">
              <h5 class="m-0 text-dark">${this.name}</h5>
            </div>
          `
        : html`
            <div class="row justify-content-center mb-3">
              <img src="/${this.image}" class="w-60 rounded-pill border border-3 border-light p-0 d-none d-lg-block" alt="Profile Picture">
            </div>
            <div class="row text-center mb-1">
              <h5 class="m-0 text-dark">${this.name}</h5>
            </div>
            <div class="row text-center">
              <p class="fs-10">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus neque asperiores inventore vel doloribus amet 
                soluta eius excepturi non sit?
              </p>
            </div>
          `
      }
    `;
  }

  _isHomePage() {
    const currentPage = window.location.pathname;
    const homePage = '/home.html'
    return currentPage === homePage;
  }
}

customElements.define('main-profile', MainProfile);

