import { html } from "lit";
import { LitLightDom } from "./base/litLightDom";

export class FloatingNavbar extends LitLightDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <nav class="col-12 d-md-none d-flex justify-content-center fixed-bottom mb-5">
        <div class="d-flex justify-content-between align-items-center rounded-pill bg-primary w-75 gap-1 px-4 py-0 mx-5">
          <a href="/new-post.html" class="btn-secondary rounded-circle p-0">
            <i class="bi bi-plus fs-1"></i>
          </a>
          <img src="/logo-long-dark.png" class="w-30 rounded-circle" alt="StoryApp Logo">
          <div class="btn-group dropup">
            <button type="button" class="btn dropdown-toggle fs-10 p-0" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-list fs-3"></i>
            </button>
            <ul class="dropdown-menu">
              <a href="/home.html" class="dropdown-item btn btn-logout fs-10">Home</a>
              <a href="/new-post.html" class="dropdown-item btn btn-logout fs-10">New Post</a>
              <a href="/about.html" class="dropdown-item btn btn-logout fs-10">About</a>
              <a href="/" class="dropdown-item btn btn-logout fs-10">Logout</a>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('floating-navbar', FloatingNavbar);