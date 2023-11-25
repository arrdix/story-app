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

        .about-image {
          width: 60%;
          border-radius: 50%;
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
          ${msg(`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus neque asperiores inventore vel doloribus amet 
          soluta eius excepturi non sit?`)}
        </p>
      </div>
    `;
  }
}

customElements.define('about-profile', AboutProfile);