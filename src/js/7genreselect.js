let searchGenre = '';

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
});
thrillerRef.addEventListener('click', drawFilmListByGenre);

comedyRef.addEventListener('click', () => {
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

});
comedyRef.addEventListener('click', drawFilmListByGenre);

actionRef.addEventListener('click', () => {
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
});
actionRef.addEventListener('click', drawFilmListByGenre);

animationRef.addEventListener('click', () => {
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
});
animationRef.addEventListener('click', drawFilmListByGenre);

westernRef.addEventListener('click', () => {
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
});
westernRef.addEventListener('click', drawFilmListByGenre);

fantasyRef.addEventListener('click', () => {
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
});
fantasyRef.addEventListener('click', drawFilmListByGenre);

dramaRef.addEventListener('click', () => {
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
});
dramaRef.addEventListener('click', drawFilmListByGenre);


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

// function drawThrillerList() {
//     MyApi.resetGalleryCard();
//     MyApi.fetchThrillerFilmsList();
//     thrillerRef.classList.add('current');
//     comedyRef.classList.remove('current');
//     animationRef.classList.remove('current');
//     actionRef.classList.remove('current');
//     westernRef.classList.remove('current');
//     fantasyRef.classList.remove('current');
//     dramaRef.classList.remove('current');
// }
// function drawComedyList() {
//     MyApi.resetGalleryCard();
//     MyApi.fetchComedyFilmsList();
//     thrillerRef.classList.remove('current');
//     comedyRef.classList.add('current');
//     animationRef.classList.remove('current');
//     actionRef.classList.remove('current');
//     westernRef.classList.remove('current');
//     fantasyRef.classList.remove('current');
//     dramaRef.classList.remove('current');
// }
// function drawActionList() {
//     MyApi.resetGalleryCard();
//     MyApi.fetchActionFilmsList();
//     thrillerRef.classList.remove('current');
//     comedyRef.classList.remove('current');
//     animationRef.classList.remove('current');
//     actionRef.classList.add('current');
//     westernRef.classList.remove('current');
//     fantasyRef.classList.remove('current');
//     dramaRef.classList.remove('current');
// }
// function drawWesternList() {
//     MyApi.resetGalleryCard();
//     MyApi.fetchWesternFilmsList();
//     thrillerRef.classList.remove('current');
//     comedyRef.classList.remove('current');
//     animationRef.classList.remove('current');
//     actionRef.classList.remove('current');
//     westernRef.classList.add('current');
//     fantasyRef.classList.remove('current');
//     dramaRef.classList.remove('current');
// }
// function drawFantasyList() {
//     MyApi.resetGalleryCard();
//     MyApi.fetchFantasyFilmsList();
//     thrillerRef.classList.remove('current');
//     comedyRef.classList.remove('current');
//     animationRef.classList.remove('current');
//     actionRef.classList.remove('current');
//     westernRef.classList.remove('current');
//     fantasyRef.classList.add('current');
//     dramaRef.classList.remove('current');
// }
// function drawDramaList() {
//     MyApi.resetGalleryCard();
//     MyApi.fetchDramaFilmsList();
//     thrillerRef.classList.remove('current');
//     comedyRef.classList.remove('current');
//     animationRef.classList.remove('current');
//     actionRef.classList.remove('current');
//     westernRef.classList.remove('current');
//     fantasyRef.classList.remove('current');
//     dramaRef.classList.add('current');
// }
// function drawAnimationList() {
//     MyApi.resetGalleryCard();
//     MyApi.fetchAnimationFilmsList();
//     thrillerRef.classList.remove('current');
//     comedyRef.classList.remove('current');
//     animationRef.classList.add('current');
//     actionRef.classList.remove('current');
//     westernRef.classList.remove('current');
//     fantasyRef.classList.remove('current');
//     dramaRef.classList.remove('current');
// }

