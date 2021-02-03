'use strict';
history.scrollRestoration = 'manual'; //kills auto scroll after page reload

MyApi.checkBackdropImgSize();
MyApi.checkPosterImgSize();

MyApi.fetchGenres();

// MyApi.fetchVideoById();

// Button UP Logic

btnTop.addEventListener('click', () => {
  scrollToTop();
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

window.onscroll = () => {
  parallaxCheck();
  handleScroll();
};

function handleScroll() {
  let bodyScrollTop = document.body.scrollTop;
  let elementScrollTop = document.documentElement.scrollTop;

  if (bodyScrollTop > 500 || elementScrollTop > 500) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
}

// Modal on Details Page Logic

modalBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', onBeckDropCkick); // Close Modal on Backdrop click

function onHandleTrailerError() {
  player.src = `http://www.youtube.com/embed/Zq_zgig9DqQ?autoplay=1`;
}

function openModal(event) {
  event.preventDefault();
  // youTubeSizes();

  MyApi.fetchVideoById().then(key => {
    // if (!key) {
    // player.src = `http://www.youtube.com/embed/Zq_zgig9DqQ?autoplay=1`;
    // }
    player.src = `http://www.youtube.com/embed/${key}?autoplay=1`;
  });

  backdrop.classList.remove('backdrop--hidden');
  window.addEventListener('keydown', onKeybordPress);
}

function closeModal() {
  player.src = '';
  backdrop.classList.add('backdrop--hidden');
  window.removeEventListener('keydown', onKeybordPress);
}
// Close Modal by cleck on Btn Escape
function onKeybordPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}
// Close Modal by cleck on Backdrop
function onBeckDropCkick(event) {
  if (event.target.nodeName === 'DIV') {
    closeModal();
  }
}

///Logic of URL GEt and Post action
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let idFromUrl = parseUrlQuery();
MyApi.movieID = +idFromUrl.value;

function parseUrlQuery() {
  let data = {};

  if (window.location.search) {
    var pair = window.location.search.substr(1).split('&');
    for (let i = 0; i < pair.length; i++) {
      let param = pair[i].split('=');
      data[param[0]] = param[1];
    }
  }
  return data;
}

onCheckUrl();
console.log(window.location.search);
function onCheckUrl() {
  if (!window.location.search) {
    MyApi.fetchPopularFilmsList();
  } else {
    MyApi.fetchMovieInformationByID();
    setTimeout(() => {
      MyApi.activeDetailsPage(MyApi.movieID);
    }, 1000);
  }
}

// console.log(idFromUrl);
// console.log(MyApi.movieID);
console.log(window.location.pathname);
// console.log(url.searchParams);
// console.log(document.title);
// Создает одну карточку фильма, "li", с
// Load the IFrame Player API code asynchronously.
// var tag = document.createElement('script');
// tag.src = 'https://www.youtube.com/player_api';
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // Replace the 'ytplayer' element with an <iframe> and
// // YouTube player after the API code downloads.
// var player;
// function onYouTubePlayerAPIReady() {
//   player = new YT.Player('ytplayer', {
//     height: '360',
//     width: '640',
//     videoId: 'u8ZsUivELbs',
//     autoplay: 1,
//   });
// }

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

//Функция для клика по карточке и открытия

// function activeDetailsPage(movieId, status) {
//   // console.log('movieID', movieId, status);
// }

// let renderFilms = MyApi.fetchPopularFilmsList();
//console.log(renderFilms); // содержит массив объектов популярных фильмов
// const genres = ; // содержит коллекцию жанров
// console.log(genres);

//ЛОГИКА МОДАЛЬНОГО ОКНА
