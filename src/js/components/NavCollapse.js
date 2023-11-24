import { html } from "lit";
import { LitLightDom } from "./base/litLightDom";

export class NavCollapse extends LitLightDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="col-3 d-flex justify-content-center align-items-center">
        <p>HOME</p>
      </div>
      <div class="col-9 text-dark d-flex flex-row justify-content-between mb-2 pb-2 px-5">
        <div class="d-flex justify-content-around align-items-center gap-5">
          <a class="link-dark link-underline link-underline-opacity-0 link-opacity-75-hover fs-8" href="home.html" type="button">Home</a>
          <a class="link-dark link-underline link-underline-opacity-0 link-opacity-75-hover fs-8" href="about.html" type="button">About</a>
        </div>
        <div class="btn-group dropup">
          <button type="button" class="btn dropdown-toggle fs-10 p-0" data-bs-toggle="dropdown" aria-expanded="false">
            English (US)
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item fs-10" href="#">English (US)</a></li>
            <li><a class="dropdown-item fs-10" href="#">Indonesia (ID)</a></li>
            <li><a class="dropdown-item fs-10" href="#">German (DE)</a></li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('nav-collapse', NavCollapse);