const refs = {
  filmsLibrary: document.querySelector('.js-gallery'),
  btnWatched: document.querySelector('.btnWatched'),
  btnQueue: document.querySelector('.btnQueue'),
};

const { filmsLibrary, btnWatched, btnQueue } = refs;

// Test
const a = [
  {
    adult: false,
    backdrop_path: '/lOSdUkGQmbAl5JQ3QoHqBZUbZhC.jpg',
    genre_ids: (3)[(53, 28, 878)],
    id: 775996,
    original_language: 'en',
    original_title: 'Outside the Wire',
    overview:
      'In the near future, a drone pilot is sent into a deadly militarized zone and must work with an android officer to locate a doomsday device.',
    popularity: 3519.784,
    poster_path: '/e6SK2CAbO3ENy52UTzP3lv32peC.jpg',
    release_date: '2021-01-15',
    title: 'Outside the Wire',
    video: false,
    vote_average: 6.5,
    vote_count: 473,
  },
  {
    adult: false,
    backdrop_path: '/nz8xWrTKZzA5A7FgxaM4kfAoO1W.jpg',
    genre_ids: (2)[(878, 28)],
    id: 651571,
    original_language: 'en',
    original_title: 'Breach',
    overview:
      'A hardened mechanic must stay awake and maintain an interstellar ark fleeing the dying planet Earth with a few thousand lucky souls on board... the last of humanity. Unfortunately, humans are not the only passengers. A shapeshifting alien creature has taken residence, its only goal is to kill as many people as possible. The crew must think quickly to stop this menace before it destroys mankind.',
    popularity: 2038.568,
    poster_path: '/13B6onhL6FzSN2KaNeQeMML05pS.jpg',
    release_date: '2021-01-01',
    title: 'Breach',
    video: false,
    vote_average: 5,
    vote_count: 139,
  },
  {
    adult: false,
    backdrop_path: '/wzJRB4MKi3yK138bJyuL9nx47y6.jpg',
    genre_ids: (3)[(28, 53, 878)],
    id: 577922,
    original_language: 'en',
    original_title: 'Tenet',
    overview:
      'Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
    popularity: 1009.461,
    poster_path: '/k68nPLbIST6NP96JmTxmZijEvCA.jpg',
    release_date: '2020-08-22',
    title: 'Tenet',
    video: false,
    vote_average: 7.3,
    vote_count: 4158,
  },
];

localStorage.setItem('Queue', JSON.stringify(a));

btnQueue.addEventListener('click', drawQueueFilmList);
btnWatched.addEventListener('click', drawWatchedFilmList);

function drawQueueFilmList(fragment, key) {
  const filmsQueueLocalStorage = localStorage.getItem('Queue', key);
  const parsedFilmsQueue = JSON.parse(filmsQueueLocalStorage);

  MyApi.resetGalleryCard();
  btnWatched.disabled = false;
  btnQueue.disabled = true;

  if (parsedFilmsQueue === null || parsedFilmsQueue.length === 0) {
    const messageTitle = document.createElement('h2');
    messageTitle.textContent = `You do not have to queue movies to watch. Add them.`;
    messageTitle.classList.add('message-title');
    filmsLibrary.classList.remove('gallery__list');
    filmsLibrary.append(messageTitle);

    return filmsLibrary;
  }

  parsedFilmsQueue.forEach(el => {
    const LibraryCard = MyApi.createCardFunc(el);
    filmsLibrary.append(LibraryCard);
    return filmsLibrary;
  });
}

function drawWatchedFilmList(fragment, key) {
  const filmsWatchedLocalStorage = localStorage.getItem('Watched', key);
  const parsedFilmsWatched = JSON.parse(filmsWatchedLocalStorage);

  MyApi.resetGalleryCard();
  btnWatched.disabled = true;
  btnQueue.disabled = false;

  if (parsedFilmsWatched === null || parsedFilmsWatched.length === 0) {
    const messageTitle = document.createElement('h2');
    messageTitle.textContent = `You do not have watched movies. Add them.`;
    messageTitle.classList.add('message-title');
    filmsLibrary.classList.remove('gallery__list');
    filmsLibrary.append(messageTitle);
    return filmsLibrary;
  }

  parsedFilmsQueue.forEach(el => {
    const LibraryCard = MyApi.createCardFunc(el);
    filmsLibrary.append(LibraryCard);
    return filmsLibrary;
  });
}

// кнопка My Library //

btnMyLibrary.addEventListener('click', openLibrary);
//btnHome.addEventListener('click', goHome);

function openLibrary() {
  MyApi.resetGalleryCard();
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  form.innerHTML = '';
  libraryFilrt.classList.remove('is-hidden');
  console.log('ket');
}

// goHome() {
//   MyApi.fetchPopularFilmsList()
// }
