import { initNavbar } from '../utils/navbar';

export function initAbout() {
  window.addEventListener('load', () => {
    const loadingElement = document.querySelector('.loading-element');
    loadingElement.classList.add('d-none');

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
  });
}
