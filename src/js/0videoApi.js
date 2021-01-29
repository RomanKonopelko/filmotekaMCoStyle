class MovieApi {
  constructor(key, paginationWrapper, cardWrapper) {
    this.API_KEY = key;
    this.BASE_URL = 'https://api.themoviedb.org/3/';
    this.IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
    this.DEFAULT_IMAGE = '../images/image-not-found.jpg';
    this.searchMode = 'popular';
    this.params = {
      generalSearchUrl: 'search/movie?',
      popularSearchUrl: 'movie/popular?', //Api url of popular movie
      genreSearchUrl: 'genre/movie/list?', // Api url of genre search
      query: '',
      _page: 1,
    };
    this.pagination = {
      window: 5, //quantity of pagination buttons
      cardContainer: cardWrapper, //gallery cards container
      paginationContainer: paginationWrapper, //pagination buttons container
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
        tablet: 'w342',
        desktop: 'w500',
      },
      posterSizes: {
        mobile: 'w342',
        tablet: 'w500',
        desktop: 'w780',
      },
    };
  }

  fetchPopularFilmsList() {
    this.searchMode = 'popular';
    this.resetGalleryCard();
    return fetch(
      `${this.BASE_URL}${this.params.popularSearchUrl}api_key=${this.API_KEY}&language=en-US&page=${this.params._page}`,
    )
      .then(response => response.json())
      .then(resp => {
        this.setRatioButtons(resp);
        return resp;
      })
      .then(({ results }) => results)
      .then(collection =>
        collection.map(el => {
          return this.createCardFunc(el);
        }),
      )
      .then(item => MyApi.pagination.cardContainer.append(...item));
  }

  fetchGenres() {
    return fetch(
      `${this.BASE_URL}${this.params.genreSearchUrl}api_key=${this.API_KEY}`,
    )
      .then(response => response.json())
      .then(data => {
        this.setRatioButtons(data);
        return data;
      })
      .then(({ genres }) => genres);
  }

  movieSearch() {
    console.log(this.searchMode);
    this.searchMode = 'default';
    this.resetGalleryCard();
    return fetch(
      `${this.BASE_URL}${this.params.generalSearchUrl}api_key=${this.API_KEY}&language=en-US&query=${this.params.query}&page=${this.params._page}`,
    )
      .then(data => data.json())
      .then(data => {
        this.setRatioButtons(data);
        console.log(data.total_pages);
        return data;
      })
      .then(resp => {
        if (resp.results.length === 0) {
          this.fetchPopularFilmsList();
          throw Error('Sorry we dont watch this kind of movies!');
        }
        this.setRatioButtons(resp);
        return resp;
      })
      .then(({ results }) => results)
      .then(collection =>
        collection.map(el => {
          return this.createCardFunc(el);
        }),
      )
      .then(item => MyApi.pagination.cardContainer.append(...item))
      .catch(error => console.log(error));
  }

  resetGalleryCard() {
    this.pagination.cardContainer.innerHTML = '';
  }

  // createFilmCard(arr) {
  //   const li = document.createElement('li');
  //   const name = document.createElement('h1');
  //   const mainPic = document.createElement('img');
  //   mainPic.width = 300; //test card image width

  //   name.textContent = arr.name || arr.title;
  //   mainPic.src = arr.backdrop_path
  //     ? `${this.IMAGE_BASE_URL}${MyApi.imgCards.currentSizes.backdropSize}${arr.backdrop_path}`
  //     : this.DEFAULT_IMAGE;
  //   li.append(name, mainPic);
  //   return li;
  // }

  createCardFunc(itemData) {
    const { backdrop_path, title, id, vote_average, release_date } = itemData;
    const imgCardSize = backdrop_path
      ? `${MyApi.IMAGE_BASE_URL}${MyApi.imgCards.currentSizes.backdropSize}${backdrop_path}`
      : MyApi.imgCards.defaultBackdropImg;

    const yearOfRelease = release_date ? `(${release_date.slice(0, 4)})` : '';

    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', imgCardSize);
    cardImg.classList.add('galllery__item-image');
    cardImg.setAttribute('alt', title);
    if (!backdrop_path) {
      cardImg.width = 342;
    }

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('movie__image');
    imgContainer.append(cardImg);

    const filmTitle = document.createElement('p');
    filmTitle.classList.add('movie__title');
    filmTitle.textContent = `${title} ${yearOfRelease}`;

    const spanRating = document.createElement('span');
    spanRating.classList.add('movie__title');
    spanRating.textContent = vote_average;

    // const itemLink = document.createElement('a');
    // itemLink.classList.add('galllery__item-link');
    // itemLink.append(cardImg, filmTitle, spanRating);
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('gallery__card-movie');
    cardContainer.append(imgContainer, filmTitle, spanRating);

    const item = document.createElement('li');
    item.classList.add('gallery__list-item');
    item.append(cardContainer);

    item.addEventListener('click', () => {
      activeDetailsPage(id, false);
    });
    return item;
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
      this.searchMode === 'popular'
        ? this.fetchPopularFilmsList()
        : this.movieSearch();
    });
    nextBtn.addEventListener('click', () => {
      this.incrementPage();
      this.resetGalleryCard();
      this.searchMode === 'popular'
        ? this.fetchPopularFilmsList()
        : this.movieSearch();
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
      if (maxLeft < 1) maxLeft = 1;
    }
    this.pagination.paginationContainer.innerHTML = '';
    let btnArray = [];
    for (let i = maxLeft; i <= maxRight; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.addEventListener('click', e => {
        this.page = +e.target.textContent;
        console.log(this.searchMode);
        console.log(data.total_pages);
        this.pagination.cardContainer.innerHTML = '';
        this.searchMode === 'popular'
          ? this.fetchPopularFilmsList()
          : this.movieSearch();
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

  checkBackdropImgSize() {
    if (window.innerWidth >= 1200) {
      this.imgCards.currentSizes.backdropSize = this.imgCards.backdropSizes.desktop;
      this.imgCards.defaultBackdropImg = '../images/image-not-found.jpg';
      return;
    }
    if (window.innerWidth < 1200) {
      this.imgCards.currentSizes.backdropSize = this.imgCards.backdropSizes.tablet;
      this.imgCards.defaultBackdropImg = '../images/image-not-found.jpg';
      return;
    }
    // if (window.innerWidth < 768) {
    //   this.imgCards.currentSizes.backdropSize = this.imgCards.backdropSizes.mobile;
    //   this.imgCards.defaultBackdropImg = '../images/image-not-found.jpg';
    //   return;
    // }
  }

  checkPosterImgSize() {
    if (window.innerWidth >= 1200) {
      this.imgCards.currentSizes.posterSize = this.imgCards.posterSizes.desktop;
      this.imgCards.defaultPosterImg = '../images/default_poster.jpg';
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      this.imgCards.currentSizes.posterSize = this.imgCards.posterSizes.tablet;
      this.imgCards.defaultPosterImg = '../images/default_poster.jpg';
    }
    if (window.innerWidth < 768) {
      this.imgCards.currentSizes.posterSize = this.imgCards.posterSizes.mobile;
      this.imgCards.defaultPosterImg = '../images/default_poster.jpg';
    }
  }
}

const API_KEY = '91085a172e1ffb2047d72641d0a91356';
const MyApi = new MovieApi(API_KEY, paginationWrapper, ulForCards);
