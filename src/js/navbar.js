export function initNavbar() {
  const btnMenu = document.getElementById('btn-menu');
  btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('rotate-active');
  })

  setTimeout(() => {
    btnMenu.click();
  }, 1500);
  setTimeout(() => {
    btnMenu.click();
  }, 3500);
}