import Auth from "../network/auth";

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

  function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated')
    getRegistered(name, email, password);
  }

  async function getRegistered(name, email, password) {
    try {
      const response = await Auth.register({
        name: name,
        email: email,
        password: password,
      })
      window.location.href = '/home.html';
    } catch (error) {
      window.alert(error);
    }
  }
}