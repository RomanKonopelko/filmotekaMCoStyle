class MovieApi {
  constructor(key, paginationWrapper, cardWrapper) {
    this.API_KEY = key;
    this.BASE_URL = 'https://api.themoviedb.org/3/';
    this.IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300';
    this.DEFAULT_IMAGE = '../images/image-not-found.jpg';
    this.currentPage;
    this.params = {
      generalSearchUrl: 'search/movie?',
      popularSearchUrl: '', //Api url of popular movies
      genreSearchUrl: '', // Api url of genre search
      query: '',
      _page: 1,
    };
    this.pagination = {
      window: 5, //quantity of pagination buttons
      cardContainer: cardWrapper, //gallery cards container
      paginationContainer: paginationWrapper, //pagination buttons container
    };
  }
  movieSearch() {
    this.resetGalleryCard();
    return fetch(
      `${this.BASE_URL}${this.params.generalSearchUrl}api_key=${this.API_KEY}&language=en-US&query=${this.params.query}&page=${this.params._page}`,
    )
      .then(data => data.json())
      .then(data => {
        this.setRatioButtons(data);
        return data;
      })
      .then(({ results }) => {
        results.forEach(el => {
          return this.pagination.cardContainer.append(this.createFilmCard(el));
        });
      });
  }

  resetGalleryCard() {
    this.pagination.cardContainer.innerHTML = '';
  }

  createFilmCard(arr) {
    const li = document.createElement('li');
    const name = document.createElement('h1');
    const mainPic = document.createElement('img');
    mainPic.width = 300; //test card image width

    name.textContent = arr.name || arr.title;
    mainPic.src = arr.backdrop_path
      ? this.IMAGE_BASE_URL + arr.backdrop_path
      : this.DEFAULT_IMAGE;
    li.append(name, mainPic);
    return li;
  }

  setPrevNextButtons(data) {
    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');
    if (this.page === 1) {
      prevBtn.classList.add('is-hidden');
      prevBtn.disabled = true;
    }

    if (this.page === data.total_pages) {
      nextBtn.classList.add('is-hidden');
      nextBtn.disabled = true;
    }
    prevBtn.addEventListener('click', () => {
      this.decrementPage();
      this.resetGalleryCard();
      this.movieSearch();
    });
    nextBtn.addEventListener('click', () => {
      this.incrementPage();
      this.resetGalleryCard();
      this.movieSearch();
    });
    prevBtn.textContent = 'Prev';
    nextBtn.textContent = 'Next';
    this.pagination.paginationContainer.prepend(prevBtn);
    this.pagination.paginationContainer.append(nextBtn);
  }

  setRatioButtons(data) {
    let maxLeft = this.params._page - Math.floor(this.pagination.window / 2);
    let maxRight = this.params._page + Math.floor(this.pagination.window / 2);
    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = this.pagination.window;
    }
    if (maxRight > data.total_pages) {
      maxLeft = this.params._page - (this.pagination.window - 1);
      maxRight = data.total_pages;
    }
    this.pagination.paginationContainer.innerHTML = '';
    let btnArray = [];
    for (let i = maxLeft; i <= maxRight; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.addEventListener('click', e => {
        this.page = +e.target.textContent;
        this.pagination.cardContainer.innerHTML = '';
        this.movieSearch();
      });
      btnArray.push(button);
    }
    this.pagination.paginationContainer.append(...btnArray);
    this.setPrevNextButtons(data);
  }
  get page() {
    return this.params._page;
  }

  set page(value) {
    return (this.params._page = value);
  }

  incrementPage() {
    return (this.params._page += 1);
  }

  decrementPage() {
    return (this.params._page -= 1);
  }

  resetPage() {
    return (this.params._page = 1);
  }
}
