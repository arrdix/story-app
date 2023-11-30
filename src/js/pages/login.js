import Config from "../config/config";
import Auth from "../network/auth";
import TokenUtils from "../utils/tokenUtils";

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

    function handleSubmit(event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated')
      getLogged(email, password)
    }

    async function getLogged(email, password) {
      try {
        const loginSpinner = document.getElementById('login-spinner');
        loginSpinner.classList.remove('d-none');

        const response = await Auth.login({
          email: email,
          password: password
        })

        TokenUtils.setUserToken(Config.USER_TOKEN_KEY, response.data.loginResult.token);
        window.location.href = '/';
      } catch (error) {
        window.alert(error);
      }
    }
  })
}