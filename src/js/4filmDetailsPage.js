let btnAddQueue = ''; // в разметке buttonSecond
let btnAddWatched = ''; //в разметке buttonFirst
let selectFilm = ''; //обьект фильма который открывается
// в activeDetailsPage() добавлял:
// btnAddWatched = buttonFirst;
// btnAddQueue = buttonSecond;
// selectFilm = item;
// monitorButtonStatusText();

//     selectFilm = item - активный фильм
//     monitorButtonStatusText(); - следит за состоянием текста в кнопке
// и чтобы не менять разметку(делал до изменений) btnAddWatched = buttonFirst; btnAddQueue = buttonSecond;

// - пишем функцию monitorButtonStatusText которая следит за состоянием(значок и текст в кнопке) читает
// local storage по ключу filmsQueue и  filmsWatched и меняет текст и значки в кнопках:
// Delete from queue / Add to queue; Delete from watched / Add to watched.

function monitorButtonStatusText() {
  let arrFilmsQueue = JSON.parse(localStorage.getItem('filmsQueue'));
  if (arrFilmsQueue === null) {
    btnAddQueue.textContent = 'Add to queue';
  } else {
    let arrFilmsidx = arrFilmsQueue.map((elem, idx) => {
      return elem.id;
    });
    let idxFilm = arrFilmsidx.indexOf(selectFilm.id);
    if (idxFilm != -1) {
      btnAddQueue.textContent = 'Delete from queue';
    } else {
      btnAddQueue.textContent = 'Add to queue';
    }
  }
  let arrFilmsWatched = JSON.parse(localStorage.getItem('filmsWatched'));
  if (arrFilmsWatched === null) {
    btnAddWatched.textContent = 'Add to watched';
  } else {
    let arrFilmsidx = arrFilmsWatched.map((elem, idx) => {
      return elem.id;
    });
    let idxFilm = arrFilmsidx.indexOf(selectFilm.id);
    if (idxFilm != -1) {
      btnAddWatched.textContent = 'Delete from watched';
    } else {
      btnAddWatched.textContent = 'Add to watched';
    }
  }
}
