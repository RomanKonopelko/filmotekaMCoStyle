//берем из DOM  ul в которой будет или список очереди просмотра или список просмотренных фильмов;

const refs = {
  filmsLibrary: document.querySelector('.films-library'), // ul в которой будет или список очереди просмотра или список просмотренных фильмов
  btnWatched: document.querySelector('.btnWatched'), // нужно в файле myFilmLibraryPage.html добавить уникальный класс кнопке btnWatched
  btnQueue: document.querySelector('.btnQueue'), // нужно в файле myFilmLibraryPage.html добавить уникальный класс кнопке btnQueue
};

const { filmsLibrary, btnWatched, btnQueue } = refs;

//создаем функцию createLibraryCardFunc, принимает параметрами imgPath, filmTitle, movieId, voteAverage,
// создает li согласно макета, вешает на нее слушателем функцию activeDetailsPage c параметрами movieId и флагом true так как фильм из библиотеки
// (смотри пункт “3) ” создание activeDetailsPage);

function createLibraryCardFunc(imgPath, filmTitle, movieId, voteAverage) {
  createFilmCard(); // нужно попробовать функцию создания карточки из файла 2searchAndPaginationHomePage.js
  // какой-то li.addEventListener('click', activeDetailsPage)
}

function activeDetailsPage(movieId) {
  movieId = true;
}

// создаем функцию drawQueueFilmList, создает в себе переменную фрагмент,
// читает во вторую переменую из local storage ключ filmsQueue и если ее значение не пустое и не равно нулю длина массива то проходим по нему
// и в созданный фрагмент в цикле кладем созданную li функцией createLibraryCardFunc,
// потом зачищаем все в ul списке библиотеки и кладем фрагмент в нее,
// в другом случае если в local storage пустота то и длина массива равна нулю то отрисовать заглушку “You do not have to queue movies to watch.Add them.”,
// и удаляет класс активной кнопки у просмотренных фильмов и добавляет такой класс кнопке очереде просомотра;

function drawQueueFilmList(fragment, key) {
  const filmsQueueLocalStorage = localStorage.getItem(key);
  const parsedFilmsQueue = JSON.parse(filmsQueueLocalStorage);

  clearFilmList(filmsLibrary);

  if (parsedFilmsQueue === null || parsedFilmsQueue.length === 0) {
    btnWatched.disabled = false;
    btnQueue.disabled = true;

    const messageTitle = document.createElement('h2');
    messageTitle.textContent = `You do not have to queue movies to watch. Add them.`;
    filmsLibrary.append(messageTitle);
    return filmsLibrary;
  }

  parsedFilmsQueue.forEach(el => {
    const LibraryCard = fragment.append(createLibraryCardFunc(el));
    filmsLibrary.append(LibraryCard);
    return filmsLibrary;
  });
}

// создаем функцию drawWatchedFilmList, создает в себе переменную фрагмент,
// читает во вторую переменую из local storage ключ filmsWatched и если ее значение не пустое и не равно нулю длина массива то проходим по нему
// и в созданный фрагмент в цикле кладем созданную li функцией createLibraryCardFunc,
// потом зачищаем все в ul списке библиотеки и кладем фрагмент в нее,
// в другом случае если в local storage пустота то и длина массива равна нулю то отрисовать заглушку “You do not have watched movies.Add them.”,
// и удаляет класс активной кнопки у кнопки очереди просомотра и добавляет такой класс кнопке просмотренных фильмов.

function drawWatchedFilmList(fragment, key) {
  const filmsWatchedLocalStorage = localStorage.getItem(key);
  const parsedFilmsWatched = JSON.parse(filmsWatchedLocalStorage);

  clearFilmList(filmsLibrary);

  if (parsedFilmsWatched === null || parsedFilmsWatched.length === 0) {
    btnWatched.disabled = true;
    btnQueue.disabled = false;

    const messageTitle = document.createElement('h2');
    messageTitle.textContent = `You do not have watched movies. Add them.`;
    filmsLibrary.append(messageTitle);
    return filmsLibrary;
  }

  parsedFilmsWatched.forEach(el => {
    const LibraryCard = fragment.append(createLibraryCardFunc(el));
    filmsLibrary.append(LibraryCard);
    return filmsLibrary;
  });
}

function clearFilmList(gallery) {
  gallery.innerHTML = '';
}
