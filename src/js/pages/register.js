import Auth from '../network/auth';

export function initRegister() {
  const leftCol = document.querySelector('#left-col');
  setTimeout(() => {
    leftCol.classList.add('show');
  }, 500);

  const mainCol = document.querySelector('#main-col');
  setTimeout(() => {
    mainCol.classList.add('show');
  }, 1000);

  const form = document.getElementById('register-form');
  form.addEventListener('submit', handleSubmit);

  const registerShowPassowordBtn = document.getElementById('register-btn-show-password');
  registerShowPassowordBtn.addEventListener('click', showOrHidePassword);

  function showOrHidePassword() {
    const registerEyeIcon = document.getElementById('register-eye-icon');
    const eyeIconAtt = registerEyeIcon.getAttribute('class');
    const password = document.getElementById('password');
    const passwordTypeAtt = password.getAttribute('type');
    password.setAttribute('type', passwordTypeAtt === 'password' ? 'text' : 'password');
    registerEyeIcon.setAttribute(
      'class',
      eyeIconAtt === 'bi bi-eye' ? 'bi bi-eye-slash' : 'bi bi-eye',
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
    getRegistered(name, email, password);
  }

  async function getRegistered(name, email, password) {
    try {
      const registerSpinner = document.getElementById('register-spinner');
      registerSpinner.classList.remove('d-none');

      await Auth.register({
        name,
        email,
        password,
      });
      window.location.href = '/login.html';
    } catch (error) {
      const registerSpinner = document.getElementById('register-spinner');
      registerSpinner.classList.add('d-none');

      const authStatus = document.getElementById('register-auth-status');
      const responseMessage = error.response.data.message;
      authStatus.textContent = `Sorry, ${responseMessage.toLowerCase()}.`;
    }
  }
}
