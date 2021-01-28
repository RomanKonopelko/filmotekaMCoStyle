(() => {
    const refs = {
          iconButton: document.querySelector('[data-icon]'),
    homeButton: document.querySelector('[data-home]'),
    libraryButton: document.querySelector('[data-library]'),
    // modal: document.querySelector('[data-modal]'),
  };

    refs.homeButton.addEventListener('click', homeEfect);
    refs.iconButton.addEventListener('click', homeEfect);
  refs.libraryButton.addEventListener('click', libraryEfect);

  function homeEfect() {
    refs.homeButton.classList.add('current');

    }
    function libraryEfect() {
        refs.libraryButton.classList.toggle('current');
    }
})();