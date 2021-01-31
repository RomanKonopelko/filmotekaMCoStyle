'use strict';

MyApi.checkBackdropImgSize();
MyApi.checkPosterImgSize();

MyApi.fetchPopularFilmsList();

// Создает одну карточку фильма, "li", с

// function createCardFunc(itemData) {
//   const { backdrop_path, title, id, vote_average, release_date } = itemData;
//   const imgCardSize = backdrop_path
//     ? `${MyApi.IMAGE_BASE_URL}${MyApi.imgCards.currentSizes.backdropSize}${backdrop_path}`
//     : MyApi.imgCards.defaultBackdropImg;

//   const yearOfRelease = release_date.slice(0, 4);

//   const cardImg = document.createElement('img');
//   cardImg.setAttribute('src', imgCardSize);
//   cardImg.classList.add('galllery__item-img');
//   cardImg.setAttribute('alt', title);

//   const filmTitle = document.createElement('p');
//   filmTitle.textContent = `${title}(${yearOfRelease})`;

//   const spanRating = document.createElement('span');
//   spanRating.textContent = vote_average;

//   const itemLink = document.createElement('a');
//   itemLink.classList.add('galllery__item-link');
//   itemLink.append(cardImg, filmTitle, spanRating);

//   const itemContainer = document.createElement('div');
//   itemContainer.classList.add('gallery__item-card');
//   itemContainer.append(itemLink);

//   const item = document.createElement('li');
//   item.classList.add('gallery__item');
//   item.append(itemContainer);

//   item.addEventListener('click', () => {
//     activeDetailsPage(id, false);
//   });
//   return item;
// }

// Рендерит всю галерию карточек популярных фильмов в UL galleryCard.html

//Функция для клика по карточке и открытия

// function activeDetailsPage(movieId, status) {
//   // console.log('movieID', movieId, status);
// }

// let renderFilms = MyApi.fetchPopularFilmsList();
//console.log(renderFilms); // содержит массив объектов популярных фильмов
const genres = MyApi.fetchGenres(); // содержит коллекцию жанров
// console.log(genres);

//ЛОГИКА МОДАЛЬНОГО ОКНА
modalBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', onBeckDropCkick); // закриває модалку якщо клікнути на бекдроп

function openModal(event) {
  event.preventDefault();

  backdrop.classList.remove('backdrop--hidden');
  window.addEventListener('keydown', onKeybordPress);
}

function closeModal() {
  backdrop.classList.add('backdrop--hidden');
  window.removeEventListener('keydown', onKeybordPress);
}
// закриваємо модалку кнопкою Escape
function onKeybordPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}
// закриваємо модалку, при натисканні на бекдроп
function onBeckDropCkick(event) {
  if (event.target.nodeName === 'DIV') {
    closeModal();
  }
}
