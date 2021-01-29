class MovieApi {
  constructor(key, paginationWrapper, cardWrapper) {
    this.API_KEY = key;
    this.BASE_URL = 'https://api.themoviedb.org/3/';
    this.IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
    this.DEFAULT_IMAGE = '../images/image-not-found.jpg';
    this.currentPage;
    this.params = {
      generalSearchUrl: 'search/movie?',
      popularSearchUrl: 'movie/popular?',
      genreSearchUrl: 'genre/movie/list?',
      query: '',
      _page: '',
    };
    this.window = 5;
    this.pagination = {
      cardContainer: cardWrapper,
      paginationContainer: paginationWrapper,
      maxLeft: this.params._page - Math.floor(this.window / 2),
      maxRight: this.params._page + Math.floor(this.window / 2),
    };
    this.imgCards = {
      defaultBackdropImg: '',
      defaultPosterImg: '',
      currentSizes: {
        backdropSize: '',
        posterSize: '',
      },
      backdropSizes: {
        mobile: 'w342',
        tablet: 'w500',
        desktop: 'w780',
      },
      posterSizes: {
        mobile: 'w342',
        tablet: 'w500',
        desktop: 'w780',
      },
    };
  }

  fetchPopularFilmsList() {
    return fetch(
      `${this.BASE_URL}${this.params.popularSearchUrl}api_key=${this.API_KEY}&language=en-US&page=${this.params._page}`,
    )
      .then(response => response.json())
      .then(resp => {
        this.totalPages = resp.total_pages;
        this.checkPaginationRatio(resp);
        this.setRatioButtons(resp);
        return resp;
      })
      .then(({ results }) => results);
  }

  fetchGenres() {
    return fetch(
      `${this.BASE_URL}${this.params.genreSearchUrl}api_key=${this.API_KEY}`,
    )
      .then(response => response.json())
      .then(({ genres }) => genres);
  }

  movieSearch() {
    return fetch(
      `${this.BASE_URL}${this.params.generalSearchUrl}api_key=${this.API_KEY}&language=en-US&query=${this.params.query}&page=${this.params._page}`,
    )
      .then(data => data.json())
      .then(results => results);
  }

  createFilmCard(arr) {
    const li = document.createElement('li');
    const description = document.createElement('p');
    const name = document.createElement('h1');
    const mainPic = document.createElement('img');
    mainPic.width = 300;

    description.textContent = arr.overview;
    name.textContent = arr.name || arr.title;
    mainPic.src = arr.backdrop_path
      ? this.IMAGE_BASE_URL + arr.backdrop_path
      : this.DEFAULT_IMAGE;
    li.append(name, mainPic, description);
    return li;
  }

  checkPaginationRatio(data) {
    if (this.pagination.maxLeft < 1) {
      this.pagination.maxLeft = 1;
      this.pagination.maxRight = this.window;
    }
    if (this.pagination.maxRight > data.total_pages) {
      this.pagination.maxLeft = this.params._page - (this.window - 1);
      this.pagination.maxRight = data.total_pages;
    }
    console.log(
      this.pagination.maxLeft,
      'left',
      this.pagination.maxRight,
      'right',
      this.params._page,
    );
  }

  setRatioButtons() {
    this.pagination.paginationContainer.innerHTML = '';
    let btnArray = [];
    for (let i = this.pagination.maxLeft; i <= this.pagination.maxRight; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.addEventListener('click', e => {
        this.page = +e.target.textContent;
        this.pagination.cardContainer.innerHTML = '';
        console.log(
          this.pagination.maxLeft,
          'left',
          this.pagination.maxRight,
          'right',
          this.params._page,
        );
        this.movieSearch()
          .then(data => {
            console.log(data.total_pages);
            this.checkPaginationRatio(data);
            this.setRatioButtons();
            return data;
          })
          .then(({ results }) => {
            results.forEach(el => {
              return this.pagination.cardContainer.append(
                this.createFilmCard(el),
              );
            });
          });
      });
      btnArray.push(button);
      console.log(btnArray);
    }
    this.pagination.paginationContainer.append(...btnArray);
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

  checkBackdropImgSize() {
    if (window.innerWidth >= 1200) {
      this.imgCards.currentSizes.backdropSize = this.imgCards.backdropSizes.desktop;
      this.imgCards.defaultBackdropImg = './images/default_backdrop.jpeg';
      return;
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      this.imgCards.currentSizes.backdropSize = this.imgCards.backdropSizes.tablet;
      this.imgCards.defaultBackdropImg = './images/default_backdrop.jpeg';
      return;
    }
    if (window.innerWidth < 768) {
      this.imgCards.currentSizes.backdropSize = this.imgCards.backdropSizes.mobile;
      this.imgCards.defaultBackdropImg = './images/default_backdrop.jpeg';
      return;
    }
  }

  checkPosterImgSize() {
    if (window.innerWidth >= 1200) {
      this.imgCards.currentSizes.posterSize = this.imgCards.posterSizes.desktop;
      this.imgCards.defaultPosterImg = './images/default_poster.jpg';
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      this.imgCards.currentSizes.posterSize = this.imgCards.posterSizes.tablet;
      this.imgCards.defaultPosterImg = './images/default_poster.jpg';
    }
    if (window.innerWidth < 768) {
      this.imgCards.currentSizes.posterSize = this.imgCards.posterSizes.mobile;
      this.imgCards.defaultPosterImg = './images/default_poster.jpg';
    }
  }
}

const API_KEY = '91085a172e1ffb2047d72641d0a91356';

// const ul = document.querySelector('.test');
const MyApi = new MovieApi(API_KEY, paginationWrapper, ulForCards);
