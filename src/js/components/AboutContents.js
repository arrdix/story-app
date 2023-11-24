import { html } from "lit";
import { LitLightDom } from "./base/litLightDom";

export class AboutContents extends LitLightDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="row text-center mb-3">
        <h5 class="m-0 mb-2">
          Where Your Story Unfolds in a Snap!
        </h5>
        <p class="fs-10">
          StoryApp allows users to share moments, thoughts, and updates with a captivating blend of images and text. 
          With a user-friendly interface, StoryApp provides a seamless and enjoyable experience for sharing your life's 
          highlights in a unique and compelling way!
        </p>
      </div>
      <div class="row text-center mb-3">
        <h5 class="m-0 mb-2">
          Features
        </h5>
        <p class="fs-10">
          Scrollable carousel <br>
          Dynamic stories data <br>
          Post new story <br>
          Story preview <br>
          Login <br>
        </p>
      </div>
      <div class="row text-center mb-3">
        <h5 class="m-0 mb-3">
          Technologies
        </h5>
        <div class="d-flex justify-content-center align-items-center gap-2">
          <img src="/javascript-dark.png" class="w-10" alt="">
          <img src="/bootstrap-dark.png" class="w-10" alt="">
          <img src="/sass-dark.png" class="w-10" alt="">
          <img src="/lit-dark.png" class="w-10" alt="">
          <img src="/git-dark.png" class="w-10" alt="">
          <img src="/html-dark.png" class="w-10" alt="">
        </div>
      </div>
    `;
  }
}

customElements.define('about-contents', AboutContents);