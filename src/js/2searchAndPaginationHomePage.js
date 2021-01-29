console.log(form);
form.addEventListener('submit', e => {
  e.preventDefault();
  MyApi.resetPage();
  MyApi.searchMode = 'default';
  let inputValue = e.target.elements.query.value;
  if (inputValue.trim() === '') return alert('There is no nameless movies!');
  MyApi.params.query = inputValue;
  MyApi.movieSearch();
  form.reset();
});
