// const API_KEY = '91085a172e1ffb2047d72641d0a91356';

// const ul = document.querySelector('.test');
// const MyApi = new MovieApi(API_KEY, paginationWrapper, ul);

form.addEventListener('submit', e => {
  e.preventDefault();
  MyApi.resetPage();
  let inputValue = e.target.elements.query.value;
  MyApi.params.query = inputValue;
  MyApi.movieSearch();
  form.reset();
});
