/* eslint-disable indent */

import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import { LitLightDom } from './base/LitLightDom';

export class MainForm extends LitLightDom {
  static properties = {
    idName: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  // eslint-disable-next-line consistent-return
  render() {
    switch (this.idName) {
      case 'login-form':
        return html`
          <form class="needs-validation" id="${this.idName}" novalidate>
            <div class="mx-4 mb-2 mt-5">
              <input type="text" class="form-control form-control-sm fs-10" id="email" minlength="8" placeholder="Email" required>
              <div class="invalid-feedback">${msg('Please enter a valid username.')}</div>
            </div>
            <div class="mx-4 mb-2">
              <div class="input-group input-group-sm">
                <input type="password" class="form-control form-control-sm fs-10" id="password" minlength="8" placeholder="Password" required>
                <button class="input-group-text" type="button" id="login-btn-show-password">
                  <i class="bi bi-eye" id="login-eye-icon"></i>
                </button>
                <div class="invalid-feedback" id="">${msg('Please enter a valid password.')}</div>  
              </div>
            </div>
            <div class="mx-4 mb-4 text-dark d-flex justify-content-end">
              <a href="" class="link-dark link-opacity-75-hover link-underline-opacity-0 fs-10">${msg(
                'Forgot password?',
              )}</a></p>
            </div>
            <div class="d-grid mx-4 mb-2">
              <button class="btn btn-dark fs-8 fw-1" type="submit">
                <span class="spinner-border spinner-border-sm d-none" id="login-spinner" aria-hidden="true"></span>
                <span role="status">${msg('Log in')}</span>
              </button>
            </div>
            <div class="mx-4 mb-3 text-dark d-flex justify-content-center">
              <p class="fs-10">${msg(
                // eslint-disable-next-line quotes
                `Dont have an account?`,
              )} <a href="/register.html" class="link-dark link-opacity-75-hover link-offset-1">${msg(
                'Sign up',
              )}</a>.</p>
            </div>
            <div class="mx-4 mb-2 text-dark d-flex justify-content-center">
              <p class="fs-10 text-danger" id="login-auth-status"></p>
            </div>
          </form>
        `;
      case 'register-form':
        return html`
          <form class="needs-validation" id="${this.idName}" novalidate>
            <div class="mx-4 mb-2 mt-5">
              <input
                type="text"
                class="form-control form-control-sm fs-10"
                id="name"
                minlength="8"
                placeholder="Name"
                required
              />
              <div class="invalid-feedback">${msg('Please enter a valid username.')}</div>
            </div>
            <div class="mx-4 mb-2">
              <input
                type="text"
                class="form-control form-control-sm fs-10"
                id="email"
                minlength="8"
                placeholder="Email"
                required
              />
              <div class="invalid-feedback">${msg('Please enter a valid password.')}</div>
            </div>
            <div class="mx-4 mb-4">
              <div class="input-group input-group-sm">
                <input
                  type="password"
                  class="form-control form-control-sm fs-10"
                  id="password"
                  minlength="8"
                  placeholder="Password"
                  required
                />
                <button class="input-group-text" type="button" id="register-btn-show-password">
                  <i class="bi bi-eye" id="register-eye-icon"></i>
                </button>
                <div class="invalid-feedback" id="">${msg('Please enter a valid password.')}</div>
              </div>
            </div>
            <div class="d-grid mx-4 mb-2">
              <button class="btn btn-dark fs-8 fw-1" type="submit">
                <span
                  class="spinner-border spinner-border-sm d-none"
                  id="register-spinner"
                  aria-hidden="true"
                ></span>
                <span role="status">${msg('Sign Up')}</span>
              </button>
            </div>
            <div class="mx-4 mb-2 text-dark d-flex justify-content-center">
              <p class="fs-10">
                ${msg('Already have an account?')}
                <a href="/login.html" class="link-dark link-opacity-75-hover link-offset-1"
                  >${msg('Log in')}</a
                >.
              </p>
            </div>
            <div class="mx-4 mb-2 text-dark d-flex justify-content-center">
              <p class="fs-10 text-danger" id="register-auth-status"></p>
            </div>
          </form>
        `;
      case 'new-post-form':
        return html`
          <form class="needs-validation" id="${this.idName}" novalidate>
            <div class="mx-4 mb-2">
              <label for="image" class="form-label fs-10 m-1">${msg('Upload a photo')}</label>
              <input
                class="form-control form-control-sm fs-10"
                id="image"
                type="file"
                accept="image/*"
                required
              />
              <div class="invalid-feedback fs-10">${msg('Please upload your story photo.')}</div>
            </div>
            <div class="mx-4 mb-2">
              <textarea
                class="form-control form-control form-control-sm fs-10"
                id="description"
                rows="3"
                placeholder="Story description"
                required
              ></textarea>
              <div class="invalid-feedback fs-10">
                ${msg('Please write your story description.')}
              </div>
            </div>
            <div class="mx-4 mb-4 d-flex align-items-center">
              <input
                class="form-check-input bg-dark m-0 me-1"
                id="anonymous-check"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label fs-10" for="flexCheckDefault"
                >${msg('Post as anonymous')}</label
              >
            </div>
            <div class="d-grid mx-4 mb-2">
              <button class="btn btn-dark fs-8 fw-1" type="submit">
                <span
                  class="spinner-border spinner-border-sm d-none"
                  id="post-spinner"
                  aria-hidden="true"
                ></span>
                <span role="status">${msg('Post')}</span>
              </button>
            </div>
          </form>
        `;
    }
  }

  _isLoginPage() {
    const currentPage = window.location.pathname;
    return currentPage === '/';
  }
}

customElements.define('main-form', MainForm);
