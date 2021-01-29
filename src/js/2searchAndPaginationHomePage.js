// const API_KEY = '91085a172e1ffb2047d72641d0a91356';

// const ul = document.querySelector('.test');
// const MyApi = new MovieApi(API_KEY, paginationWrapper, ul);

form.addEventListener('submit', e => {
  e.preventDefault();
  let inputValue = e.target.elements.query.value;
  MyApi.params.query = inputValue;
  MyApi.movieSearch()
    .then(data => {
      console.log(data.total_pages);
      MyApi.checkPaginationRatio(data);
      MyApi.setRatioButtons(data);
      return data;
    })
    .then(({ results }) =>
      results.forEach(el => {
        return MyApi.pagination.paginationContainer.append(
          MyApi.createFilmCard(el),
        );
      }),
    );
});

//ТЕСТОВЫЙ СПИСОК

// ТЕСТОВАЯ ОТРИСОВКА. ТРЕБУЮТСЯ ГОТОВЫЙ ШАБЛОН КАРТЫ С КЛАССАМИ

// function pagination(data) {
//   const totalPages = data.total_pages;
//   let btnArr = [];
//   for (let i = 1; i <= totalPages; i++) {
//     const paginationBtn = document.createElement('button');
//     paginationBtn.addEventListener('click', e => {
//       ul.innerHTML = '';
//       console.log(e.target.textContent);
//       MyApi.params._page = +e.target.textContent;
//       MyApi.movieSearch().then(({ results }) =>
//         results.forEach(el => {
//           return ul.append(createFilmCard(el));
//         }),
//       );
//     });
//     paginationBtn.textContent = i;
//     console.log(i);
//     btnArr.push(paginationBtn);
//   }
//   console.dir(btnArr);
//   return paginationWrapper.append(...btnArr);
// }

btnNext.addEventListener('click', () => {
  MyApi.incrementPage();
  ul.innerHTML = '';
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
