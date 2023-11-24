import { html } from "lit";
import { allLocales } from "../../generated/locale-codes";
import { getLocale, localeNames, setLocaleFromUrl } from "../localization";
import { LitLightDom } from "./base/litLightDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

export class NavCollapse extends LitLightDom {
  static properties = {
    title: { type: String, reflect: true },
    lang: { type: String, reflect: true }
  }

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="col-3 d-flex justify-content-center align-items-center">
        <p>${this.title}</p>
      </div>
      <div class="col-9 text-dark d-flex flex-row justify-content-between mb-2 pb-2 px-5">
        <div class="d-flex justify-content-around align-items-center gap-5">
          <a class="link-dark link-underline link-underline-opacity-0 link-opacity-75-hover fs-8" href="home.html" type="button">${msg(`Home`)}</a>
          <a class="link-dark link-underline link-underline-opacity-0 link-opacity-75-hover fs-8" href="about.html" type="button">${msg(`New Post`)}</a>
          <a class="link-dark link-underline link-underline-opacity-0 link-opacity-75-hover fs-8" href="about.html" type="button">${msg(`About`)}</a>
        </div>
        <div class="btn-group dropup">
          <button type="button" class="btn dropdown-toggle fs-10 p-0" data-bs-toggle="dropdown" aria-expanded="false">
            ${ this.lang ? this.lang : "English (EN)" }
          </button>
          <ul class="dropdown-menu">
            ${allLocales.map((locale) => 
              html`
                <li><a @click=${this._localeChanged} class="dropdown-item fs-10" type="button" aria-label="${locale}" href="#">${localeNames[locale]} (${locale.toUpperCase()})</a></li>
              `
            )}
          </ul>
        </div>
      </div>
    `;
  }

  _localeChanged(event) {
    this.lang = event.target.textContent;
    const rawNewLocale = event.target;
    const newLocale = rawNewLocale.getAttribute('aria-label').toUpperCase();
 
    if (newLocale !== getLocale()) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLocale);
 
      window.history.pushState(null, '', url.toString());
      setLocaleFromUrl();
    }
  }
}

customElements.define('nav-collapse', NavCollapse);