const refs = {
  thrillerRef: document.querySelector('[data-thriller]'),
  comedyRef: document.querySelector('[data-comedy]'),
  animationRef: document.querySelector('[data-animation]'),
  actionRef: document.querySelector('[data-action]'),
  westernRef: document.querySelector('[data-western]'),
  fantasyRef: document.querySelector('[data-fantasy]'),
  dramaRef: document.querySelector('[data-drama]'),
  mainContainer: document.querySelector('.main__container'),
};

const {
  thrillerRef,
  comedyRef,
  actionRef,
  animationRef,
  westernRef,
  fantasyRef,
  dramaRef,
  mainContainer,
} = refs;
let searchGenre = '';

// console.log(MyApi);
thrillerRef.addEventListener('click', () => {
  MyApi.resetGalleryCard();
  MyApi.activeLoader();
  MyApi.resetPage();
  detailsSection.classList.add('is-hidden');
  libraryFilrt.classList.add('is-hidden');
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  searchGenre = thrillerRef.innerHTML.toLowerCase();
  thrillerRef.classList.add('current');
  comedyRef.classList.remove('current');
  animationRef.classList.remove('current');
  actionRef.classList.remove('current');
  westernRef.classList.remove('current');
  fantasyRef.classList.remove('current');
  dramaRef.classList.remove('current');
  setTimeout(() => {
    drawFilmListByGenre()
  }, 2000);  
});

comedyRef.addEventListener('click', () => {
  MyApi.resetGalleryCard();
  MyApi.activeLoader();
  MyApi.resetPage();
  detailsSection.classList.add('is-hidden');
  libraryFilrt.classList.add('is-hidden');
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  searchGenre = comedyRef.innerHTML.toLowerCase();
  thrillerRef.classList.remove('current');
  comedyRef.classList.add('current');
  animationRef.classList.remove('current');
  actionRef.classList.remove('current');
  westernRef.classList.remove('current');
  fantasyRef.classList.remove('current');
  dramaRef.classList.remove('current');
  setTimeout(() => {
    drawFilmListByGenre()
  }, 2000);
});

actionRef.addEventListener('click', () => {
  MyApi.resetGalleryCard();
  MyApi.activeLoader();
  MyApi.resetPage();
  detailsSection.classList.add('is-hidden');
  libraryFilrt.classList.add('is-hidden');
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  searchGenre = actionRef.innerHTML.toLowerCase();
  thrillerRef.classList.remove('current');
  comedyRef.classList.remove('current');
  animationRef.classList.remove('current');
  actionRef.classList.add('current');
  westernRef.classList.remove('current');
  fantasyRef.classList.remove('current');
  dramaRef.classList.remove('current');
  setTimeout(() => {
    drawFilmListByGenre()
  }, 2000);
});

animationRef.addEventListener('click', () => {
  MyApi.resetGalleryCard();
  MyApi.activeLoader();
  MyApi.resetPage();
  detailsSection.classList.add('is-hidden');
  libraryFilrt.classList.add('is-hidden');
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  searchGenre = animationRef.innerHTML.toLowerCase();
  thrillerRef.classList.remove('current');
  comedyRef.classList.remove('current');
  animationRef.classList.add('current');
  actionRef.classList.remove('current');
  westernRef.classList.remove('current');
  fantasyRef.classList.remove('current');
  dramaRef.classList.remove('current');
  setTimeout(() => {
    drawFilmListByGenre()
  }, 2000);
});

westernRef.addEventListener('click', () => {
  MyApi.resetGalleryCard();
  MyApi.resetGalleryCard();
  MyApi.activeLoader();
  MyApi.resetPage();
  detailsSection.classList.add('is-hidden');
  libraryFilrt.classList.add('is-hidden');
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  searchGenre = westernRef.innerHTML.toLowerCase();
  thrillerRef.classList.remove('current');
  comedyRef.classList.remove('current');
  animationRef.classList.remove('current');
  actionRef.classList.remove('current');
  westernRef.classList.add('current');
  fantasyRef.classList.remove('current');
  dramaRef.classList.remove('current');
  setTimeout(() => {
    drawFilmListByGenre()
  }, 2000);
});

fantasyRef.addEventListener('click', () => {
  MyApi.resetGalleryCard();
  MyApi.activeLoader();
  MyApi.resetPage();
  detailsSection.classList.add('is-hidden');
  libraryFilrt.classList.add('is-hidden');
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  searchGenre = fantasyRef.innerHTML.toLowerCase();
  thrillerRef.classList.remove('current');
  comedyRef.classList.remove('current');
  animationRef.classList.remove('current');
  actionRef.classList.remove('current');
  westernRef.classList.remove('current');
  fantasyRef.classList.add('current');
  dramaRef.classList.remove('current');
  setTimeout(() => {
    drawFilmListByGenre()
  }, 2000);
});

dramaRef.addEventListener('click', () => {
  MyApi.resetGalleryCard();
  MyApi.activeLoader();
  MyApi.resetPage();
  detailsSection.classList.add('is-hidden');
  libraryFilrt.classList.add('is-hidden');
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  searchGenre = dramaRef.innerHTML.toLowerCase();
  thrillerRef.classList.remove('current');
  comedyRef.classList.remove('current');
  animationRef.classList.remove('current');
  actionRef.classList.remove('current');
  westernRef.classList.remove('current');
  fantasyRef.classList.remove('current');
  dramaRef.classList.add('current');
  setTimeout(() => {
    drawFilmListByGenre()
  }, 2000);
});

function drawFilmListByGenre() {
  let genres, result;
  MyApi.fetchGenres()
    .then(res => {
      genres = res;
    })
    .then(() =>
      genres.forEach(element => {
        if (element.name.toLowerCase() === searchGenre) {
          result = element.id;
        }
      }),
    )
    .then(() => MyApi.fetchFilmsListByGenre(result))
    .catch(console.log.bind(console));
}