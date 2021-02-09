searchByActor.addEventListener('click', () => {
  input.placeholder = 'Which actor you wish?';
  searchByMovie.classList.remove('selected-option');
  searchByActor.classList.add('selected-option');
});

searchByMovie.addEventListener('click', () => {
  input.placeholder = 'What movie you wish?';
  searchByMovie.classList.add('selected-option');
  searchByActor.classList.remove('selected-option');
});

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
    if (searchByActor.classList.contains('selected-option')) {
      MyApi.fetchActorsId(inputValue);
    } else {
      MyApi.movieSearch();
    }
  }, 4000);
  form.reset();
});