() => {
  homePage.addEventListener('click', homePageShow);
  libraryPage.addEventListener('click', libraryPageShow);

  function homePageShow() {
    libraryPage.classList.add('is-hidden');
    homePage.classList.remove('is-hidden');
  }
  function libraryPageShow() {
    homePage.classList.add('is-hidden');
    libraryPage.classList.remove('is-hidden');
  }
};
