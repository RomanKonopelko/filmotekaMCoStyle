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
    if (!refs.homeButton.classList.contains("current")) {
      refs.homeButton.classList.add('current');
      if (refs.libraryButton.classList.contains("current")) {
        refs.libraryButton.classList.remove('current');
      }
    }
  }
  
    function libraryEfect() {
       if (!refs.libraryButton.classList.contains("current")) {
      refs.libraryButton.classList.add('current');
      if (refs.homeButton.classList.contains("current")) {
        refs.homeButton.classList.remove('current');
      }
    }
    }
})();