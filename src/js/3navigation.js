(() => {
    const refs = {
        homePage: document.querySelector('[data-home]'),
        libraryPage: document.querySelector('[data-library]'),
    };

    refs.homePage.addEventListener('click', homePageShow);
    refs.libraryPage.addEventListener('click', libraryPageShow);

    function homePageShow() {
        refs.libraryPage.classList.add("is-hidden");
        refs.homePage.classList.remove("is-hidden");
    }
      function libraryPageShow() {
        refs.homePage.classList.add("is-hidden");
        refs.libraryPage.classList.remove("is-hidden");
    }
})