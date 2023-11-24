import { html } from "lit";
import { LitLightDom } from "./base/litLightDom";

export class StoryPreview extends LitLightDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="card h-100 text-light rounded-5">
        <img src="https://placehold.co/1200x700/272727/fff?text=please+upload+your+story+image+from+public/img+directory" class="card-img object-fit-cover h-100 rounded-5 p-0" id="image-preview" alt="Story Image">
        <div class="card-backdrop position-absolute rounded-5"></div>
        <div class="card-img-overlay">
          <div class="card-title d-flex justify-content-start ps-2 pt-1 gap-2">
            <img src="/julia-garner.jpg" class="rounded-pill border border-3 border-light w-5" alt="">
            <div class="d-flex flex-column">
              <p class="m-0">Julia Garner</p>
              <p class="fs-12 m-0">Story Preview</p>
            </div>
          </div>
          <div class="card-body p-0 ps-2">
            <p class="card-text fs-8" id="description-preview">Please write your story description.</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('story-preview', StoryPreview);