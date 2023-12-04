import * as bootstrap from 'bootstrap';
import { initNavbar } from '../utils/navbar';
import { renderStories } from '../utils/stories';
import { renderStoryDetail } from '../utils/storyDetail';

export async function initHome() {
  window.addEventListener('load', () => {
    const loadingElement = document.querySelector('.loading-element');
    loadingElement.classList.add('d-none');

    const mainCarouselElement = document.getElementById('mainCarousel');
    mainCarouselElement.addEventListener('wheel', scrollOnMainCarousel);
    mainCarouselElement.addEventListener('click', clickOnMainCarousel);

    function scrollOnMainCarousel(event) {
      const mainCarousel = new bootstrap.Carousel(document.getElementById('mainCarousel'));
      if (event.deltaY > 0) mainCarousel.next();
      if (event.deltaY < 0) mainCarousel.prev();

      const scrollOvelay = document.querySelector('.scroll-overlay');
      scrollOvelay.classList.add('d-none');
    }

    function clickOnMainCarousel() {
      const scrollOvelay = document.querySelector('.scroll-overlay');
      scrollOvelay.classList.add('d-none');
    }

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
        document.querySelectorAll('[device]').forEach((element) => {
          element.setAttribute('device', 'mobile');
        });
      } else {
        document.querySelectorAll('[device]').forEach((element) => {
          element.setAttribute('device', '');
        });
      }
    });
  });

  // activate tooltips
  async function activateTooltips() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTrigger) => new bootstrap.Tooltip(tooltipTrigger),
    );
  }

  function animateDetailPage() {
    const detailBtns = document.querySelectorAll('.btn-detail');
    detailBtns.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const storyId = event.currentTarget.id;
        renderStoryDetail(storyId);

        const mainCol = document.getElementById('main-col');
        const leftCol = document.getElementById('left-col');
        const detailCol = document.getElementById('detail-col');
        const mainDetailCol = document.getElementById('main-detail-col');

        leftCol.classList.add('pop-element-hide');
        mainCol.classList.add('pop-element-reverse-hide');

        setTimeout(() => {
          mainCol.classList.remove('d-md-block');
          mainCol.classList.add('d-none');
          leftCol.classList.remove('d-md-flex');

          detailCol.classList.remove('d-none');
          detailCol.classList.add('d-flex');
          mainDetailCol.classList.add('d-md-block');
        }, 500);

        setTimeout(() => {
          detailCol.classList.add('show');
          detailCol.classList.remove('pop-element-hide');

          mainDetailCol.classList.add('show');
          mainDetailCol.classList.remove('pop-element-reverse-hide');
        }, 750);
      });
    });
  }

  function animateBackToHome() {
    const backBtn = document.getElementById('btn-back');
    backBtn.addEventListener('click', () => {
      const mainCol = document.getElementById('main-col');
      const leftCol = document.getElementById('left-col');
      const detailCol = document.getElementById('detail-col');
      const mainDetailCol = document.getElementById('main-detail-col');

      mainDetailCol.classList.add('pop-element-reverse-hide');
      detailCol.classList.add('pop-element-hide');

      setTimeout(() => {
        detailCol.classList.remove('d-md-flex');
        mainDetailCol.classList.remove('d-md-block');

        leftCol.classList.add('d-md-flex');
        mainCol.classList.add('d-md-block');
        mainCol.classList.remove('d-none');
      }, 500);

      setTimeout(() => {
        mainCol.classList.remove('pop-element-reverse-hide');
        leftCol.classList.remove('pop-element-hide');
      }, 750);
    });
  }

  await renderStories();
  initNavbar();
  activateTooltips();
  animateDetailPage();
  animateBackToHome();
}
