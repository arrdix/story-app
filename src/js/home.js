import { initNavbar } from "./navbar";
import { renderStories } from "./stories";

export function initHome() {
  window.addEventListener('load', () => {
    renderStories();
    initNavbar();
  })
}