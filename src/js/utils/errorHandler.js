export function errorHandler(error) {
  const alertElement = document.querySelector('.alert');
  alertElement.classList.add('alert-danger');
  alertElement.innerHTML = `${error.message}`;
}
