import { html } from 'lit';
import { msg } from '@lit/localize';
import { LitLightDom } from './base/LitLightDom';
import SessionUtils from '../utils/sessionUtils';
import Config from '../config/config';

export class FloatingNavbar extends LitLightDom {
  render() {
    return html`
      <nav class="col-12 d-md-none d-flex justify-content-center fixed-bottom mb-5">
        <div
          class="d-flex justify-content-between align-items-center rounded-pill bg-primary w-75 gap-1 px-4 py-0 mx-5"
        >
          <a href="/new-post.html" class="btn-secondary rounded-circle p-0">
            <i class="bi bi-plus fs-1"></i>
          </a>
          <img src="/logo-long-dark.png" class="w-30 rounded-circle" alt="StoryApp Logo" />
          <div class="btn-group dropup">
            <button
              type="button"
              class="btn dropdown-toggle fs-10 p-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-list fs-3"></i>
            </button>
            <ul class="dropdown-menu">
              <a href="/" class="dropdown-item btn btn-logout fs-10">${msg('Home')}</a>
              <a href="/new-post.html" class="dropdown-item btn btn-logout fs-10"
                >${msg('New Post')}</a
              >
              <a href="/about.html" class="dropdown-item btn btn-logout fs-10">${msg('About')}</a>
              <a
                href="/login.html"
                @click=${this._logOutHandler}
                class="dropdown-item btn btn-logout fs-10"
                >${msg('Log Out')}</a
              >
            </ul>
          </div>
        </div>
      </nav>
    `;
  }

  _logOutHandler() {
    SessionUtils.destroySession(Config.USER_TOKEN_KEY);
  }
}

customElements.define('floating-navbar', FloatingNavbar);
