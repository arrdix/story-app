import { html } from "lit";
import { LitLightDom } from "./base/litLightDom";

export class NavButtons extends LitLightDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container rounded-pill d-flex justify-content-center w-10 px-0 m-0 pop-button">
        <button
          type="button"
          class="btn secondary rounded-pill rotatable"
          id="btn-menu"
          data-bs-toggle="collapse" data-bs-target="#collapseNav"
          aria-controls="collapseNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-pause fs-3"></i>
        </button>
      </div>
      <div class="container rounded-pill d-flex justify-content-center w-10 px-0 m-0 pop-button">
        <button
          type="button"
          class="btn btn-secondary btn-prev rounded-pill"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev"
        >
          <i class="bi bi-chevron-left"></i>
        </button>
      </div>
      <div class="container rounded-pill d-flex justify-content-center w-10 px-0 m-0 pop-button">
        <button
          type="button"
          class="btn btn-secondary btn-next rounded-pill"
          data-bs-target="#mainCarousel"
          data-bs-slide="next"
        >
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
      <div class="container rounded-pill d-flex justify-content-center w-10 px-0 m-0 pop-button">
        <a href="/new-post.html" class="btn btn-secondary btn-prev rounded-pill">
          <i class="bi bi-plus-lg"></i>
        </a>
      </div>
    `;
  }
}

customElements.define('nav-buttons', NavButtons);