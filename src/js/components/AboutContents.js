import { LitElement, html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

export class AboutContents extends LitElement {
  static styles = [
    css`
      .desc-wrapper,
      .features-wrapper,
      .tech-wrapper {
        text-align: center;

        .desc-title,
        .features-title,
        .tech-title {
          font-size: 1rem;
          font-weight: 700;
          margin-block: 1rem;
        }

        .desc-text,
        .features-text {
          font-size: 0.8rem;
          margin-bottom: 2rem;
        }
      }
      .tech-content {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
      }
      .tech-image {
        width: 10%;
      }
    `,
  ];

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="desc-wrapper">
        <h5 class="desc-title">${msg('Story Unfolds in a Snap!')}</h5>
        <p class="desc-text">
          ${'With a user-friendly interface, StoryApp allows users to share moments, thoughts, and updates with a captivating blend of images and text!'}
        </p>
      </div>

      <div class="features-wrapper">
        <h5 class="features-title">${msg('Features')}</h5>
        <p class="features-text">
          ${'Scrollable carousel'}<br />
          ${msg('Dynamic stories data')} <br />
          ${msg('Post new story')} <br />
          ${msg('Story preview')} <br />
          ${msg('Login')} <br />
        </p>
      </div>

      <div class="tech-wrapper">
        <h5 class="tech-title">${msg('Technologies')}</h5>
        <div class="tech-content">
          <img src="/javascript-dark.png" class="tech-image" alt="" />
          <img src="/bootstrap-dark.png" class="tech-image" alt="" />
          <img src="/sass-dark.png" class="tech-image" alt="" />
          <img src="/lit-dark.png" class="tech-image" alt="" />
          <img src="/git-dark.png" class="tech-image" alt="" />
          <img src="/html-dark.png" class="tech-image" alt="" />
        </div>
      </div>
    `;
  }
}

customElements.define('about-contents', AboutContents);
