import { html } from "lit";
import { LitLightDom } from "./base/litLightDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

export class MainForm extends LitLightDom {
  static properties = {
    idName: { type: String, reflect: true }
  }

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <form class="needs-validation" id="${this.idName}" novalidate>
        ${this._isLoginPage()
          ? html`
              <div class="mx-4 mb-2 mt-5">
                <input type="text" class="form-control form-control-sm fs-10" id="username" minlength="5" placeholder="Username" required>
                <div class="invalid-feedback">${msg(`Please enter a valid username.`)}</div>
              </div>
              <div class="mx-4 mb-2">
                <input type="password" class="form-control form-control-sm fs-10" id="password" minlength="5" placeholder="Password" required>
                <div class="invalid-feedback">${msg(`Please enter a valid password.`)}</div>
              </div>
              <div class="mx-4 mb-4 text-dark d-flex justify-content-end">
                <a href="" class="link-dark link-opacity-75-hover link-underline-opacity-0 fs-10">${msg(`Forgot password?`)}</a></p>
              </div>
              <div class="d-grid mx-4 mb-2">
                <button class="btn btn-dark fs-8 fw-1" type="submit">${msg(`Log in`)}</button>
              </div>
              <div class="mx-4 mb-2 text-dark d-flex justify-content-center">
                <p class="fs-10">${msg(`Don't have an account?`)} <a href="" class="link-dark link-opacity-75-hover link-offset-1">${msg(`Sign up`)}</a>.</p>
              </div>
            `
          : html`
              <div class="mx-4 mb-2">
                <label for="image" class="form-label fs-10 m-1">${msg(`Upload a photo`)}</label>
                <input class="form-control form-control-sm fs-10" id="image" type="file" accept="image/*" required>
                <div class="invalid-feedback fs-10">${msg(`Please upload your story photo.`)}</div>
              </div>
              <div class="mx-4 mb-4">
                <textarea class="form-control form-control form-control-sm fs-10" id="description" rows="3" placeholder="Story description" required></textarea>
                <div class="invalid-feedback fs-10">${msg(`Please write your story description.`)}</div>
              </div>
              <div class="d-grid mx-4 mb-2">
                <button class="btn btn-dark fs-8 fw-1" type="submit">${msg(`Post`)}</button>
              </div>
            `
        }
      </form>
    `;
  }

  _isLoginPage() {
    const currentPage = window.location.pathname;
    return currentPage === '/';
  }
}

customElements.define('main-form', MainForm);