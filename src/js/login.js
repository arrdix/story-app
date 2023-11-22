function initLogin() {
  const form = document.getElementById('login-form');
  form.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    const name = document.getElementById('username').value;
    const email = document.getElementById('password').value;

    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    form.classList.add('was-validated')
  }
}