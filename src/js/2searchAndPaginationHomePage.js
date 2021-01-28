const API_KEY = '91085a172e1ffb2047d72641d0a91356';

const MyApi = new MovieApi(API_KEY);

const ul = document.querySelector('.test');

form.addEventListener('submit', e => {
  e.preventDefault();
  let inputValue = e.target.elements.query.value;
  MyApi.params.query = inputValue;
  MyApi.movieSearch()
    .then(data => {
      console.log(data.total_pages);
      pagination(data);
      return data;
    })
    .then(({ results }) =>
      results.forEach(el => {
        return ul.append(createFilmCard(el));
      }),
    );
});

//ТЕСТОВЫЙ СПИСОК

// ТЕСТОВАЯ ОТРИСОВКА. ТРЕБУЮТСЯ ГОТОВЫЙ ШАБЛОН КАРТЫ С КЛАССАМИ
const createFilmCard = function (arr) {
  const li = document.createElement('li');
  const description = document.createElement('p');
  const name = document.createElement('h1');
  const mainPic = document.createElement('img');
  mainPic.width = 300;

  description.textContent = arr.overview;
  name.textContent = arr.name || arr.title;
  mainPic.src = arr.backdrop_path
    ? MyApi.IMAGE_BASE_URL + arr.backdrop_path
    : MyApi.DEFAULT_IMAGE;
  li.append(name, mainPic, description);
  return li;
};

function pagination(data) {
  const totalPages = data.total_pages;
  let btnArr = [];
  for (let i = 1; i <= totalPages; i++) {
    const paginationBtn = document.createElement('button');
    paginationBtn.addEventListener('click', e => {
      ul.innerHTML = '';
      console.log(e.target.textContent);
      MyApi.params._page = +e.target.textContent;
      console.log(MyApi.params._page, 'api');
      console.log(MyApi.params.query);
      MyApi.movieSearch().then(({ results }) =>
        results.forEach(el => {
          return ul.append(createFilmCard(el));
        }),
      );
    });
    paginationBtn.textContent = i;
    console.log(i);
    btnArr.push(paginationBtn);
  }
  console.dir(btnArr);
  return paginationWrapper.append(...btnArr);
}

btnNext.addEventListener('click', () => {
  MyApi.incrementPage();
  ul.innerHTML = '';
  console.log(MyApi.params._page);
  MyApi.movieSearch().then(({ results }) =>
    results.forEach(el => {
      return ul.append(createFilmCard(el));
    }),
  );
});

btnPrev.addEventListener('click', () => {
  MyApi.decrementPage();
  ul.innerHTML = '';
  console.log(MyApi.params._page);
  MyApi.movieSearch().then(({ results }) =>
    results.forEach(el => {
      return ul.append(createFilmCard(el));
    }),
  );
});
