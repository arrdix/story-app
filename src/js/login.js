export function initLogin() {
  const form = document.getElementById('login-form');
  form.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated')

    if (name === 'julia' && password === 'garner') {
      window.location.href = '/home.html';
    }
  }
}