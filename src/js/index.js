import '../scss/styles.scss';
import './components';

import * as bootstrap from 'bootstrap';

import { initLogin } from './pages/login';
import { initHome } from './pages/home';
import { initNewPost } from './pages/newPost';
import { initAbout } from './pages/about';
import { setLocale } from './localization';
import { initRegister } from './pages/register';
import { checkUserAuth } from './auth/check-user-auth';
import Config from './config/config';
import SessionUtils from './utils/sessionUtils';

window.addEventListener('DOMContentLoaded', initPages);

function initPages() {
  const route = detectRoute();
  route();

  logOutHandler();
  adjustWrapperSize();
  setLanguage();

  checkUserAuth.checkLoginState();
}

// logout button handler
function logOutHandler() {
  const logOutBtn = document.getElementById('btn-logout');
  logOutBtn?.addEventListener('click', () => {
    SessionUtils.destroySession(Config.USER_TOKEN_KEY);
  });
}

// adjust wrapper height on small screen
function adjustWrapperSize() {
  const mainWrapper = document.querySelector('.main-wrapper');
  window.addEventListener('resize', () => {
    adjustWrapper();
  });

  function adjustWrapper() {
    if (window.innerWidth < 768) {
      mainWrapper.classList.remove('vh-70');
      mainWrapper.classList.add('vh-100');
    } else {
      mainWrapper.classList.remove('vh-100');
      mainWrapper.classList.add('vh-70');
    }
  }

  adjustWrapper();
}

// activate toast
const toastLiveExample = document.getElementById('mainToast');
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
setTimeout(() => {
  toastBootstrap.show();
}, 1000);

// routing
const routes = {
  '/': initHome,
  '/new-post.html': initNewPost,
  '/about.html': initAbout,
  '/login.html': initLogin,
  '/register.html': initRegister,
};

function detectRoute() {
  return routes[window.location.pathname];
}

// set current language
function setLanguage() {
  const defaultLanguage = 'en';
  const currentLanguge = sessionStorage.getItem('lang') || defaultLanguage;
  const url = new URL(window.location.href);

  url.searchParams.set('lang', currentLanguge);
  setLocale(currentLanguge);

  window.history.pushState(null, '', url.toString());
}
