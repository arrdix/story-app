import * as bootstrap from 'bootstrap';
import { initNavbar } from "../utils/navbar";
import { renderStories } from '../utils/stories';

export async function initHome() {
  window.addEventListener('load', () => {
    const mainCarouselElement = document.getElementById('mainCarousel');
    mainCarouselElement.addEventListener('wheel', event => {
      const mainCarousel = new bootstrap.Carousel(document.getElementById('mainCarousel'));
      if (event.deltaY > 0) mainCarousel.next();
      if (event.deltaY < 0) mainCarousel.prev();

      const scrollOvelay = document.querySelector('.scroll-overlay');
      scrollOvelay.classList.add('d-none');
    })

    const leftCol = document.querySelector('#left-col');
    setTimeout(() => {
      leftCol.classList.add('show');
    }, 0);

    const mainCol = document.querySelector('#main-col');
    setTimeout(() => {
      mainCol.classList.add('show');
    }, 500);

    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        document.querySelectorAll('[device]').forEach(element => {
          element.setAttribute('device', 'mobile');
        })
      } else {
        document.querySelectorAll('[device]').forEach(element => {
          element.setAttribute('device', '');
        })
      }
    })
  })

  // activate tooltips
  async function activateTooltips() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTrigger => new bootstrap.Tooltip(tooltipTrigger));
  }

  function displayDetailPage() {
    const detailBtns = document.querySelectorAll('.btn-detail');
    detailBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const mainCol = document.getElementById('main-col');
        const leftCol = document.getElementById('left-col');
        const detailCol = document.getElementById('detail-col');

        leftCol.classList.remove('show');
        mainCol.classList.remove('show');
        detailCol.classList.add('d-md-flex');
        
        setTimeout(() => {
          leftCol.classList.remove('d-md-flex');
          detailCol.classList.add('show');
          mainCol.classList.add('show');
        }, 750);
      })
    })
  }

  function backToHome() {
    const backBtn = document.getElementById('btn-back');
    backBtn.addEventListener('click', () => {
      const mainCol = document.getElementById('main-col');
      const leftCol = document.getElementById('left-col');
      const detailCol = document.getElementById('detail-col');

      mainCol.classList.remove('show');
      detailCol.classList.remove('show');

      setTimeout(() => {
        leftCol.classList.add('d-md-flex');
      }, 500);

      setTimeout(() => {
        detailCol.classList.remove('d-md-flex');
        mainCol.classList.add('show');
        leftCol.classList.add('show');
      }, 750);
    })
  }

  await renderStories();
  initNavbar();
  activateTooltips();
  displayDetailPage();
  backToHome();
}