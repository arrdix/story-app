import { msg,updateWhenLocaleChanges } from "@lit/localize";
import { LitElement, html, css } from "lit";

export class AboutProfile extends LitElement {
  static properties = {
    image: { type: String, reflect: true },
    name: { type: String, reflect: true },
  }

  static styles = [
    css`
      .image-wrapper {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;

        @media screen and (max-width: 768px) {
          padding-top: 3rem;
        }

        .about-image {
          width: 60%;
          border-radius: 50%;
          border: 1px solid #272727;
        }
      }
      .name-wrapper {
        text-align: center;

        .about-name {
          font-size: 1rem;
          font-weight: 700;
          margin: 0;
          margin-bottom: 0.5rem;
        }
      }
      .desc-wrapper {
        text-align: center;
        
        .about-desc {
          font-size: 0.8rem;
          margin: 0;
        }
      }
    `
  ]

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="image-wrapper">
        <img src="/${this.image}" class="about-image" alt="Profile Picture">
      </div>
      <div class="name-wrapper">
        <h5 class="about-name">${this.name}</h5>
      </div>
      <div class="desc-wrapper">
        <p class="about-desc">
          ${msg(`I'm a passionate front-end developer who loves to connecting the dots between design and functionality.`)}
        </p>
      </div>
    `;
  }
}

customElements.define('about-profile', AboutProfile);