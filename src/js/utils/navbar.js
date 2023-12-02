export function initNavbar() {
  const btnMenu = document.getElementById('btn-menu');
  btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('rotate-active');
  });

  if (window.innerWidth > 768) {
    setTimeout(() => {
      btnMenu.click();
    }, 2000);
    setTimeout(() => {
      btnMenu.click();
    }, 4500);
  }
}
