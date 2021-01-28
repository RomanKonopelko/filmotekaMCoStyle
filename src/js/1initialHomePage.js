'use strict';

const movieList = document.querySelector('.container__list');

const API_KEY = '91085a172e1ffb2047d72641d0a91356';

const configurationAPI = {
  apiKey: API_KEY,
  baseUrl: 'https://api.themoviedb.org/3/',
  searchQuery: '',
  totalPages: 1,
  pageNumber: 1,

  fetchPopularFilmsList() {
    return fetch(
      `${this.baseUrl}movie/popular?api_key=${this.apiKey}&language=en-US&page=${this.pageNumber}`,
    )
      .then(response => response.json())
      .then(resp => {
        this.totalPages = resp.total_pages;
        return resp;
      })
      .then(({ results }) => results);
  },

  fetchGenres() {
    return fetch(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}`)
      .then(response => response.json())
      .then(({ genres }) => genres);
  },
};

// Создает одну карточку фильма, "li"

function createCardFunc(imgPath, filmTitle, movieId, rating, data) {
  const baseImageUrl = 'https://image.tmdb.org/t/p/w300/';
  const yearOfRelease = data.slice(0, 4);

  const cardImg = document.createElement('img');
  cardImg.setAttribute('src', `${baseImageUrl}${imgPath}`);
  cardImg.setAttribute('alt', filmTitle);

  const title = document.createElement('p');
  title.textContent = `${filmTitle}(${yearOfRelease})`;

  const spanRating = document.createElement('span');
  spanRating.textContent = rating;

  const item = document.createElement('li');
  item.append(cardImg, title, spanRating);

  item.addEventListener('click', () => {
    activeDetailsPage(movieId, false);
  });
  return item;
}

// Рендерит всю галерию карточек популярных фильмов

configurationAPI
  .fetchPopularFilmsList()
  .then(collection =>
    collection.map(
      ({ backdrop_path, title, id, vote_average, release_date }) => {
        return createCardFunc(
          backdrop_path,
          title,
          id,
          vote_average,
          release_date,
        );
      },
    ),
  )
  .then(item => movieList.append(...item));

function activeDetailsPage(movieId, status) {
  //   console.log('movieID', movieId, status);
}

let renderFilms = configurationAPI.fetchPopularFilmsList(); // содержит массив объектов популярных фильмов
const genres = configurationAPI.fetchGenres(); // содержит коллекцию жанров
