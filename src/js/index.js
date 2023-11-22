import '../scss/styles.scss';
import * as bootstrap from 'bootstrap'

// activate tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// activate toast
const toastLiveExample = document.getElementById('newPostToast')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
setTimeout(() => {
  toastBootstrap.show()
}, 1000);

// var form = document.getElementById('login-form');
// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   var name = document.getElementById('username').value;
//   var email = document.getElementById('password').value;

//   if (!form.checkValidity()) {
//     event.preventDefault()
//     event.stopPropagation()
//   }
//   form.classList.add('was-validated')
// }

const btnMenu = document.getElementById('btn-menu');
setTimeout(() => {
  btnMenu.click();
}, 1500);
setTimeout(() => {
  btnMenu.click();
}, 3500);