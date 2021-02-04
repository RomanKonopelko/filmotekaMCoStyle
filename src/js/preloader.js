const preloader = document.getElementById('load');

window.addEventListener('load', () => {
  setTimeout(() => {
    preloader.classList.add('done');
  }, 3000);
});
