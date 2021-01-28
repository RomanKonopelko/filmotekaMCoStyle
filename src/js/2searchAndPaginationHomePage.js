const API_KEY = '91085a172e1ffb2047d72641d0a91356';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

const movieSearch = function (query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&per_page=10`,
  )
    .then(data => data.json())
    .then(({ results }) => {
      console.dir(results);
      results.forEach(res => {
        console.log(res);
        ul.append(createFilmCard(res));
      });
    });
};

form.addEventListener('submit', e => {
  e.preventDefault();
  let query = e.target.elements.query.value;
  console.dir(query);
  movieSearch(query);
});

//ТЕСТОВЫЙ СПИСОК
const ul = document.querySelector('.test');

// ТЕСТОВАЯ ОТРИСОВКА. ТРЕБУЮТСЯ ГОТОВЫЙ ШАБЛОН КАРТЫ С КЛАССАМИ
const createFilmCard = function (arr) {
  const li = document.createElement('li');
  const description = document.createElement('p');
  const name = document.createElement('h1');
  const mainPic = document.createElement('img');

  description.textContent = arr.overview;
  name.textContent = arr.name || arr.title;
  mainPic.src = IMAGE_URL + arr.backdrop_path;
  li.append(name, mainPic, description);
  return li;
};
