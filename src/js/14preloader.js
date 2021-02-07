const preloader = document.getElementById('load');

window.addEventListener('load', () => {
  setTimeout(() => {
    setTimeout(() => {
      parallaxWidthCheck();
    }, 2000);
    preloader.classList.add('done');
  }, 2000);
});
