console.log(form);
form.addEventListener('submit', e => {
  e.preventDefault();
  MyApi.resetPage();
  MyApi.searchMode = 'default';
  let inputValue = e.target.elements.query.value;
  console.log(inputValue);
  MyApi.params.query = inputValue;
  MyApi.movieSearch();
  form.reset();
});
