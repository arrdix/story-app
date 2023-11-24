import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import { components } from './components';

import { initLogin } from './login';
import { initHome } from './home';
import { initNewPost } from './newPost';
import { fetchDataFromAPI } from './dataSource';
import { initAbout } from './components/about';

// activate tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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
}

function detectRoute() {
  return routes[window.location.pathname];
}
window.addEventListener('DOMContentLoaded', initPages);

function initPages() {
  const isFetched = localStorage.getItem('fetched');
  if (!isFetched) {
    fetchDataFromAPI();
    localStorage.setItem('fetched', true);
  }

  const route = detectRoute();
  route();
}