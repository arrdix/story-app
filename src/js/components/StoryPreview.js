/* eslint-disable indent */

import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import { LitLightDom } from './base/LitLightDom';
import Auth from '../network/auth';

export class StoryPreview extends LitLightDom {
  static properties = {
    name: { type: String, reflect: true },
    createdAt: { type: String, reflect: true },
    description: { type: String, reflect: true },
    photoUrl: { type: String, reflect: true },
    owner: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.name = Auth.USER_NAME;
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="card h-100 text-light rounded-5">
        <img
          src="${this.owner
            ? 'https://placehold.co/1200x700/272727/fff?text=Image+preview+will+be+displayed+here.'
            : this.photoUrl}"
          class="card-img object-fit-cover h-100 rounded-5 p-0"
          id="image-preview"
          alt="Story Image"
        />
        <div class="card-backdrop position-absolute rounded-5" id="card-backdrop"></div>
        <div class="card-img-overlay" id="card-img-overlay">
          <div class="card-title d-flex justify-content-start ps-2 pt-1 gap-2">
            <img
              src="${this.owner ? 'https://source.unsplash.com/1000x1000/?face' : this.photoUrl}"
              class="stories-dp object-fit-cover rounded-pill border border-3 border-light w-5"
              alt=""
            />
            <div class="d-flex flex-column">
              <p class="m-0">${this.name}</p>
              <p class="fs-12 m-0">${this.owner ? msg('Story Preview') : this.createdAt}</p>
            </div>
          </div>
          <div class="card-body p-0 ps-2">
            <p class="card-text fs-8" id="description-preview">
              ${this.owner ? msg('Please write your story description.') : this.description}
            </p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('story-preview', StoryPreview);
