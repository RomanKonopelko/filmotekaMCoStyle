btnQueue.addEventListener('click', drawQueueFilmList);
btnWatched.addEventListener('click', drawWatchedFilmList);

btnMyLibrary.addEventListener('click', openLibrary);

const queue = `You do not have to queue movies to watch. Add them.`;
const watch = `You do not have watched movies. Add them.`;
const filmsQueueKey = 'filmsQueue';
const filmsWatchedKey = 'filmsWatched';

function drawQueueFilmList(key) {
  const filmsQueueLocalStorage = localStorage.getItem(filmsQueueKey, key);
  const parsedFilmsQueue = JSON.parse(filmsQueueLocalStorage);
  MyApi.pagination.cardContainer.classList.remove('is-hidden');

  MyApi.resetGalleryCard();
  btnQueue.classList.add('active');
  btnWatched.classList.remove('active');
  btnWatched.disabled = false;
  btnQueue.disabled = true;

  if (parsedFilmsQueue === null || parsedFilmsQueue.length === 0) {
    createPlugTitle(queue, filmsLibrary);
  } else {
    createParseFilms(parsedFilmsQueue, filmsLibrary);
  }
}

function drawWatchedFilmList(key) {
  const filmsWatchedLocalStorage = localStorage.getItem(filmsWatchedKey, key);
  const parsedFilmsWatched = JSON.parse(filmsWatchedLocalStorage);

  MyApi.pagination.cardContainer.classList.remove('is-hidden');

  MyApi.resetGalleryCard();
  btnQueue.classList.remove('active');
  btnWatched.classList.add('active');
  btnWatched.disabled = true;
  btnQueue.disabled = false;


  if (parsedFilmsWatched === null || parsedFilmsWatched.length === 0) {
    createPlugTitle(watch, filmsLibrary);
  } else {
    createParseFilms(parsedFilmsWatched, filmsLibrary);
  }
}

function createParseFilms(film, library) {
  film.forEach(el => {
    const LibraryCard = MyApi.createCardFunc(el);
    library.append(LibraryCard);
    return library;
  });
}


  
let messageTitle = document.getElementsByClassName('message-title');
function createPlugTitle(title, library) {
  if (messageTitle.length === 0) {
    messageTitle = document.createElement('h2');
    messageTitle.textContent = title;
    messageTitle.classList.add('message-title');
    library.insertAdjacentElement('beforebegin', messageTitle)
  } else {
    messageTitle.textContent = title;
    }
  // messageTitle.textContent = title;
  // library.classList.remove('gallery__list');
  // library.append(messageTitle);
  return library;
}

// кнопка My Library //

btnMyLibrary.addEventListener('click', openLibrary);
//btnHome.addEventListener('click', goHome);


function openLibrary() {
  window.scrollTo({
    top: document.body.children[2].clientHeight,
    behavior: 'smooth',
  });
  MyApi.resetGalleryCard();
  btnQueue.disabled = false;
  btnWatched.disabled = false;
  detailsSection.innerHTML = '';
  paginationWrapper.innerHTML = '';
  form.innerHTML = '';
  libraryFilrt.classList.remove('is-hidden');
  main.classList.remove('is-hidden');
}