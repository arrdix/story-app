import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import { components } from './components';

import { initLogin } from './pages/login';
import { initHome } from './pages/home';
import { initNewPost } from './pages/newPost';
import { fetchDataFromAPI } from './utils/dataSource';
import { initAbout } from './pages/about';
import { setLocale } from './localization';
import { initRegister } from './pages/register';

window.addEventListener('DOMContentLoaded', initPages);

function initPages() {
  const isFetched = localStorage.getItem('fetched');
  if (!isFetched) {
    fetchDataFromAPI();
    localStorage.setItem('fetched', true);
  }

  const route = detectRoute();
  route();

  const mainWrapper = document.querySelector('.main-wrapper');
  window.addEventListener('resize', () => {
    adjustWrapperSize();
  })

  function adjustWrapperSize() {
    if (window.innerWidth < 768) {
      mainWrapper.classList.remove('vh-70');
      mainWrapper.classList.add('vh-100');
    } else {
      mainWrapper.classList.remove('vh-100');
      mainWrapper.classList.add('vh-70');
    }
  }

  adjustWrapperSize();
  setLanguage();
}

// activate toast
const toastLiveExample = document.getElementById('mainToast')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
setTimeout(() => {
  toastBootstrap.show()
}, 1000);

// routing
const routes = {
  '/': initLogin,
  '/home.html': initHome,
  '/new-post.html': initNewPost,
  '/about.html': initAbout,
  '/register.html': initRegister,
}

function detectRoute() {
  return routes[window.location.pathname];
}

function setLanguage() {
  const defaultLanguage = 'en';
  const currentLanguge = sessionStorage.getItem('lang') || defaultLanguage;
  const url = new URL(window.location.href);

  url.searchParams.set('lang', currentLanguge);
  setLocale(currentLanguge);

  window.history.pushState(null, '', url.toString());
}