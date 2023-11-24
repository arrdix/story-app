import { initNavbar } from "./navbar";

export function initAbout() {
  window.addEventListener('load', () => {
    const leftCol = document.querySelector('#left-col');
    setTimeout(() => {
      leftCol.classList.add('show');
    }, 500);

    const rightCol = document.querySelector('#right-col');
    setTimeout(() => {
      rightCol.classList.add('show');
    }, 750);

    const mainCol = document.querySelector('#main-col');
    setTimeout(() => {
      mainCol.classList.add('show');
    }, 1000);

    initNavbar();
  })
}