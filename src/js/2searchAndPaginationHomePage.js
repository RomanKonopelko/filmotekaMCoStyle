form.addEventListener('submit', e => {
  e.preventDefault();
  MyApi.resetGalleryCard();
  MyApi.activeLoader();
  MyApi.resetPage();
  MyApi.searchMode = 'default';
  let inputValue = e.target.elements.query.value;
  if (inputValue.trim() === '') return alert('There is no nameless movies!');
  MyApi.params.query = inputValue;
  setTimeout(() => {
    MyApi.movieSearch();
  }, 4000);
  form.reset();
});
