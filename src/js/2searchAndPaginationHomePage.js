const API_KEY = '91085a172e1ffb2047d72641d0a91356';

const MyApi = new MovieApi(API_KEY);

const ul = document.querySelector('.test');
console.log(ul);
MyApi.movieSearch().then(results =>
  results.forEach(el => {
    return ul.append(createFilmCard(el));
  }),
);

form.addEventListener('submit', e => {
  e.preventDefault();
  let query = e.target.elements.query.value;
  console.dir(query);
  movieSearch(query);
});

//ТЕСТОВЫЙ СПИСОК

// ТЕСТОВАЯ ОТРИСОВКА. ТРЕБУЮТСЯ ГОТОВЫЙ ШАБЛОН КАРТЫ С КЛАССАМИ
const createFilmCard = function (arr) {
  const li = document.createElement('li');
  const description = document.createElement('p');
  const name = document.createElement('h1');
  const mainPic = document.createElement('img');

  description.textContent = arr.overview;
  name.textContent = arr.name || arr.title;
  mainPic.src = MyApi.IMAGE_BASE_URL + arr.backdrop_path;
  li.append(name, mainPic, description);
  return li;
};
