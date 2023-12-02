import Config from '../config/config';
import Auth from '../network/auth';
import SessionUtils from '../utils/sessionUtils';

export function initLogin() {
  window.addEventListener('load', () => {
    const leftCol = document.querySelector('#left-col');
    setTimeout(() => {
      leftCol.classList.add('show');
    }, 500);

    const mainCol = document.querySelector('#main-col');
    setTimeout(() => {
      mainCol.classList.add('show');
    }, 1000);

    const form = document.getElementById('login-form');
    form.addEventListener('submit', handleSubmit);

    const showPassowordBtn = document.getElementById('btn-show-password');
    showPassowordBtn.addEventListener('click', showOrHidePassword);

    function showOrHidePassword() {
      const eyeIcon = document.getElementById('eye-icon');
      const eyeIconAtt = eyeIcon.getAttribute('class');
      const password = document.getElementById('password');
      const passwordTypeAtt = password.getAttribute('type');
      password.setAttribute('type', passwordTypeAtt === 'password' ? 'text' : 'password');
      eyeIcon.setAttribute('class', eyeIconAtt === 'bi bi-eye' ? 'bi bi-eye-slash' : 'bi bi-eye');
    }

    function handleSubmit(event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
      getLogged(email, password);
    }

    async function getLogged(email, password) {
      try {
        const loginSpinner = document.getElementById('login-spinner');
        loginSpinner.classList.remove('d-none');

        const response = await Auth.login({
          email,
          password,
        });

        SessionUtils.setSession(Config.USER_TOKEN_KEY, response.data.loginResult.token);
        SessionUtils.setSession(Config.USER_NAME_KEY, response.data.loginResult.name);
        window.location.href = '/';
      } catch (error) {
        const loginSpinner = document.getElementById('login-spinner');
        loginSpinner.classList.add('d-none');

        const authStatus = document.getElementById('login-auth-status');
        const responseMessage = error.response.data.message;
        authStatus.textContent = `Sorry, ${responseMessage.toLowerCase()}.`;
      }
    }
  });
}
