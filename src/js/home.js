import * as bootstrap from 'bootstrap';
import { initNavbar } from "./navbar";
import { renderStories } from "./stories";

export function initHome() {
  window.addEventListener('load', () => {
    // activate tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTrigger => new bootstrap.Tooltip(tooltipTrigger));

    const leftCol = document.querySelector('#left-col');
    setTimeout(() => {
      leftCol.classList.add('show');
    }, 500);

    const mainCol = document.querySelector('#main-col');
    setTimeout(() => {
      mainCol.classList.add('show');
    }, 1000);

    renderStories();
    initNavbar();
  })
}