class MovieApi {
  constructor(key, paginationWrapper, cardWrapper) {
    this.API_KEY = key;
    this.BASE_URL = 'https://api.themoviedb.org/3/';
    this.IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
    this.DEFAULT_IMAGE = '../images/default_backdrop2.jpg';
    this.VIDEO_BASE_URL = 'https://api.themoviedb.org/3/movie/';
    this.movieID = 0;
    this.searchMode = 'popular';

    this.popularFilmItem = []; // test
    this.genres = [];

    this.currentPage = 1;

    this.params = {
      generalSearchUrl: 'search/movie?',
      popularSearchUrl: 'movie/popular?', //Api url of popular movie
      genreSearchUrl: 'genre/movie/list?', // Api url of genre search
      byGenreSearchUrl: 'discover/movie?',
      query: '',
      _page: 1,
      lastPage: '',
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
        mobile: 'w500',
        tablet: 'w500',
        desktop: 'w500',
      },
      posterSizes: {
        mobile: 'w342',
        tablet: 'w500',
        desktop: 'w780',
      },
    };
  }

  activeLoader() {
    this.pagination.paginationContainer.classList.add('is-hidden');
    const loaderArr = [...loaderPartOne, ...loaderPartTwo];
    loaderArr.map(part => {
      part.classList.remove('is-hidden');
    });
  }

  hideLoader() {
    this.pagination.paginationContainer.classList.remove('is-hidden');
    const loaderArr = [...loaderPartOne, ...loaderPartTwo];
    loaderArr.map(part => {
      part.classList.add('is-hidden');
    });
  }
  fetchVideoById() {
    return fetch(
      `${this.VIDEO_BASE_URL}${this.movieID}/videos?api_key=${this.API_KEY}`,
    )
      .then(response => response.json())
      .then(resp => {
        return resp;
      })
      .then(({ results }) => results[0])
      .then(({ key }) => key);
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
      .then(({ results }) => {
        this.popularFilmItem = results; // test
        return results; // test
      })
      .then(collection =>
        collection.map(el => {
          return this.createCardFunc(el);
        }),
      )
      .then(item => MyApi.pagination.cardContainer.append(...item))
      .finally(() => {
        ulForCards.classList.remove('is-hidden');
        this.hideLoader();
      });
  }
  //////////////////////////////
  fetchDramaFilmsList() {
    this.searchMode = 'popular';
    this.resetGalleryCard();
    return fetch(
      `${this.BASE_URL}${this.params.byGenreSearchUrl}api_key=${this.API_KEY}&language=en-US&page=${this.params._page}&with_genres=18`,
    )
      .then(response => response.json())
      .then(resp => {
        this.setRatioButtons(resp);
        return resp;
      })
      .then(({ results }) => {
        this.popularFilmItem = results; // test
        return results; // test
      })
      .then(collection =>
        collection.map(el => {
          return this.createCardFunc(el);
        }),
      )
      .then(item => MyApi.pagination.cardContainer.append(...item))
      .finally(() => {
        ulForCards.classList.remove('is-hidden');
        this.hideLoader();
      });
  }

  fetchThrillerFilmsList() {
    this.searchMode = 'popular';
    this.resetGalleryCard();
    return fetch(
      `${this.BASE_URL}${this.params.byGenreSearchUrl}api_key=${this.API_KEY}&language=en-US&page=${this.params._page}&with_genres=53`,
    )
      .then(response => response.json())
      .then(resp => {
        this.setRatioButtons(resp);
        return resp;
      })
      .then(({ results }) => {
        this.popularFilmItem = results; // test
        return results; // test
      })
      .then(collection =>
        collection.map(el => {
          return this.createCardFunc(el);
        }),
      )
      .then(item => MyApi.pagination.cardContainer.append(...item))
      .finally(() => {
        ulForCards.classList.remove('is-hidden');
        this.hideLoader();
      });
  }

  fetchComedyFilmsList() {
    this.searchMode = 'popular';
    this.resetGalleryCard();
    return fetch(
      `${this.BASE_URL}${this.params.byGenreSearchUrl}api_key=${this.API_KEY}&language=en-US&page=${this.params._page}&with_genres=35`,
    )
      .then(response => response.json())
      .then(resp => {
        this.setRatioButtons(resp);
        return resp;
      })
      .then(({ results }) => {
        this.popularFilmItem = results; // test
        return results; // test
      })
      .then(collection =>
        collection.map(el => {
          return this.createCardFunc(el);
        }),
      )
      .then(item => MyApi.pagination.cardContainer.append(...item))
      .finally(() => {
        ulForCards.classList.remove('is-hidden');
        this.hideLoader();
      });
  }

  fetchAnimationFilmsList() {
    this.searchMode = 'popular';
    this.resetGalleryCard();
    return fetch(
      `${this.BASE_URL}${this.params.byGenreSearchUrl}api_key=${this.API_KEY}&language=en-US&page=${this.params._page}&with_genres=16`,
    )
      .then(response => response.json())
      .then(resp => {
        this.setRatioButtons(resp);
        return resp;
      })
      .then(({ results }) => {
        this.popularFilmItem = results; // test
        return results; // test
      })
      .then(collection =>
        collection.map(el => {
          return this.createCardFunc(el);
        }),
      )
      .then(item => MyApi.pagination.cardContainer.append(...item))
      .finally(() => {
        ulForCards.classList.remove('is-hidden');
        this.hideLoader();
      });
  }

  fetchActionFilmsList() {
    this.searchMode = 'popular';
    this.resetGalleryCard();
    return fetch(
      `${this.BASE_URL}${this.params.byGenreSearchUrl}api_key=${this.API_KEY}&language=en-US&page=${this.params._page}&with_genres=28`,
    )
      .then(response => response.json())
      .then(resp => {
        this.setRatioButtons(resp);
        return resp;
      })
      .then(({ results }) => {
        this.popularFilmItem = results; // test
        return results; // test
      })
      .then(collection =>
        collection.map(el => {
          return this.createCardFunc(el);
        }),
      )
      .then(item => MyApi.pagination.cardContainer.append(...item))
      .finally(() => {
        ulForCards.classList.remove('is-hidden');
        this.hideLoader();
      });
  }

  fetchWesternFilmsList() {
    this.searchMode = 'popular';
    this.resetGalleryCard();
    return fetch(
      `${this.BASE_URL}${this.params.byGenreSearchUrl}api_key=${this.API_KEY}&language=en-US&page=${this.params._page}&with_genres=37`,
    )
      .then(response => response.json())
      .then(resp => {
        this.setRatioButtons(resp);
        return resp;
      })
      .then(({ results }) => {
        this.popularFilmItem = results; // test
        return results; // test
      })
      .then(collection =>
        collection.map(el => {
          return this.createCardFunc(el);
        }),
      )
      .then(item => MyApi.pagination.cardContainer.append(...item))
      .finally(() => {
        ulForCards.classList.remove('is-hidden');
        this.hideLoader();
      });
  }

  fetchFantasyFilmsList() {
    this.searchMode = 'popular';
    this.resetGalleryCard();
    return fetch(
      `${this.BASE_URL}${this.params.byGenreSearchUrl}api_key=${this.API_KEY}&language=en-US&page=${this.params._page}&with_genres=14`,
    )
      .then(response => response.json())
      .then(resp => {
        this.setRatioButtons(resp);
        return resp;
      })
      .then(({ results }) => {
        this.popularFilmItem = results; // test
        return results; // test
      })
      .then(collection =>
        collection.map(el => {
          return this.createCardFunc(el);
        }),
      )
      .then(item => MyApi.pagination.cardContainer.append(...item))
      .finally(() => {
        ulForCards.classList.remove('is-hidden');
        this.hideLoader();
      });
  }
  ///////////////////
  fetchGenres() {
    return fetch(
      `${this.BASE_URL}${this.params.genreSearchUrl}api_key=${this.API_KEY}`,
    )
      .then(response => response.json())
      .then(data => {
        this.setRatioButtons(data);
        return data;
      })
      .then(({ genres }) => {
        return (this.genres = genres);
      })
      .finally(() => {
        ulForCards.classList.remove('is-hidden');
        this.hideLoader();
      });
  }

  movieSearch() {
    // console.log(this.searchMode);
    this.searchMode = 'default';
    // this.resetGalleryCard();
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
        this.resetGalleryCard();
        this.setRatioButtons(resp);
        return resp;
      })
      .then(({ results }) => {
        // console.log(results);
        this.popularFilmItem = results;
        return results;
      })
      .then(collection =>
        collection.map(el => {
          return this.createCardFunc(el);
        }),
      )
      .then(item => MyApi.pagination.cardContainer.append(...item))
      .catch(error => this.handlErrors(error))
      .finally(() => {
        ulForCards.classList.remove('is-hidden');
        this.hideLoader();
      });
  }

  handlErrors(text) {
    errorNotification.classList.remove('is-hidden');
    errorNotification.textContent = text.message;
    setTimeout(() => {
      errorNotification.classList.add('is-hidden');
    }, 3000);
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
    //test start //
    main.classList.remove('is-hidden');
    // test end //

    const { backdrop_path, title, id, vote_average, release_date } = itemData;
    const imgCardSize = backdrop_path
      ? `${MyApi.IMAGE_BASE_URL}${MyApi.imgCards.currentSizes.backdropSize}${backdrop_path}`
      : MyApi.imgCards.defaultBackdropImg;

    const yearOfRelease = release_date ? `(${release_date.slice(0, 4)})` : '';

    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', imgCardSize);
    cardImg.classList.add('gallery__item-image');
    cardImg.setAttribute('alt', title);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('movie__image');
    imgContainer.append(cardImg);

    const filmTitle = document.createElement('p');
    filmTitle.classList.add('movie__title');
    filmTitle.textContent = `${title} ${yearOfRelease}`;

    const spanRating = document.createElement('span');
    spanRating.classList.add('movie__genre');
    spanRating.textContent = `☆  ` + `${vote_average}`;

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('gallery__card-movie');
    cardContainer.append(imgContainer, filmTitle, spanRating);

    const item = document.createElement('li');
    item.classList.add('gallery__list-item');
    item.append(cardContainer);

    item.addEventListener('click', () => {
      // клік на картку //
      ulForCards.classList.add('is-hidden');
      this.activeLoader();
      setTimeout(() => {
        this.activeDetailsPage(id, false);
      }, 2000);
    });
    return item;
  }

  activeDetailsPage(id) {
    //Прячит пагинацию и форму поиска
    form.style.display = 'none';
    btnTop.classList.add('is-hidden');

    //Скролит вверх
    window.scrollTo(0, 80);

    this.movieID = id;

    // серед масиву об'єктів знаходить об'єкт з необхідним id //
    const array = this.popularFilmItem.filter(item => {
      if (item.id === id) return item;
    });
    const item = array[0];
    const genresArray = [];

    // шукаємо жанри фільма //
    const itemGenres = item.genre_ids;
    itemGenres.filter(item => {
      for (let key of this.genres) {
        if (item === key.id) return genresArray.push(key.name);
      }
    });
    const genresText = genresArray.join(', ');

    // створюємо розмтіку сторінки //

    const tdGenre = document.createElement('td');
    tdGenre.textContent = 'genre';
    const tdGenreName = document.createElement('td');
    tdGenreName.textContent = genresText;

    const trGenre = document.createElement('tr');
    trGenre.append(tdGenre, tdGenreName);
    trGenre.classList.add('details-page__rows');

    const tdTitle = document.createElement('td');
    tdTitle.textContent = 'original title';
    const tdTitleName = document.createElement('td');
    tdTitleName.textContent = item.original_title;
    const trTitle = document.createElement('tr');
    trTitle.classList.add('details-page__rows');
    trTitle.append(tdTitle, tdTitleName);

    const tdPopularity = document.createElement('td');
    tdPopularity.textContent = 'popularity';
    const tdPopularityName = document.createElement('td');
    tdPopularityName.textContent = item.popularity;
    const trPopularity = document.createElement('tr');
    trPopularity.classList.add('details-page__rows');
    trPopularity.append(tdPopularity, tdPopularityName);

    const tdVote = document.createElement('td');
    tdVote.textContent = 'vote / votes';
    const spanVote = document.createElement('span');
    spanVote.classList.add('rows__vote');
    spanVote.textContent = item.vote_average;

    const tdVoteName = document.createElement('td');
    tdVoteName.textContent = `/ ${item.vote_count}`;

    spanVote.appendChild(tdVoteName);

    const trVotes = document.createElement('tr');
    trVotes.classList.add('details-page__rows');
    trVotes.append(tdVote, spanVote);

    const table = document.createElement('table');
    table.classList.add('details-page__table');

    table.append(trVotes, trPopularity, trTitle, trGenre);

    const title = document.createElement('h2');
    title.classList.add('details-page__title');
    title.textContent = item.title;

    const div = document.createElement('div');
    div.append(title, table);

    const divPage = document.createElement('div');
    divPage.classList.add('details-page__about');
    const titleText = document.createElement('h3');
    titleText.classList.add('details-page__title', 'second');
    titleText.textContent = 'About';
    const textAbout = document.createElement('p');
    textAbout.classList.add('details-page__text');
    textAbout.textContent = item.overview;

    divPage.append(titleText, textAbout);

    const buttonFirst = document.createElement('button');
    buttonFirst.classList.add('button__add', 'first');
    buttonFirst.setAttribute('type', 'submite');
    buttonFirst.textContent = 'add to watched';
    buttonFirst.addEventListener('click', this.onWatchedClick);

    const buttonSecond = document.createElement('button');
    buttonSecond.classList.add('button__add');
    buttonSecond.setAttribute('type', 'submite');
    buttonSecond.textContent = 'add to queue';
    buttonSecond.addEventListener('click', this.onQueueClick);

    const buttonTrailer = document.createElement('button');
    buttonTrailer.classList.add('button__add');
    buttonTrailer.setAttribute('type', 'submite');
    buttonTrailer.textContent = 'watch the trailer';
    buttonTrailer.addEventListener('click', this.onTrailerClick);

    const divBtn = document.createElement('div');
    divBtn.classList.add('details-page__button');
    divBtn.append(buttonFirst, buttonSecond, buttonTrailer);

    const detailsPageDecr = document.createElement('div');
    detailsPageDecr.classList.add('details-page__description');
    detailsPageDecr.append(div, divPage, divBtn);

    const img = document.createElement('img');
    img.setAttribute(
      'src',
      `${MyApi.IMAGE_BASE_URL}${MyApi.imgCards.currentSizes.posterSize}${item.poster_path}`,
    );
    img.setAttribute('alt', img.title);
    img.setAttribute('width', '100%');
    img.setAttribute('data', 'poster');

    const aImg = document.createElement('a');
    aImg.setAttribute('href', '#');

    aImg.appendChild(img);

    //TEST Btn that close DetailsPage
    const btnClose = document.createElement('a');
    btnClose.classList.add('details-page__button-close');

    const btnCloseI = document.createElement('i');
    btnCloseI.textContent = 'cancel';
    btnCloseI.classList.add('material-icons', 'active');
    btnClose.append(btnCloseI);

    const divImage = document.createElement('div');
    divImage.classList.add('details-page__foto');

    divImage.append(aImg, btnClose);

    const container = document.createElement('div');
    container.classList.add('container', 'details-page__film');
    container.append(divImage, detailsPageDecr);

    detailsSection.classList.remove('is-hidden');
    detailsSection.appendChild(container);

    buttonTrailer.addEventListener('click', this.onTrailerClick);
    main.classList.add('is-hidden');
    this.hideLoader();

    // добавил присвоение значений глобадьнім переменным
    btnAddWatched = buttonFirst;
    btnAddQueue = buttonSecond;
    selectFilm = item;

    monitorButtonStatusText(); //следит за состоянием текста в кнопке
    //Затирает карточку после закрытия страницы

    btnClose.addEventListener('click', () => {
      form.style.display = 'block';
      this.pagination.paginationContainer.classList.remove('is-hidden');
      detailsSection.classList.add('is-hidden');
      ulForCards.classList.remove('is-hidden');
      btnTop.classList.remove('is-hidden');
      detailsSection.innerHTML = '';
      main.classList.remove('is-hidden');
    });

    // Вызов видео
  }
  onTrailerClick() {
    openModal(event);
  }
  onWatchedClick() {
    // клік на кнопку Watched
    let films = JSON.parse(localStorage.getItem('filmsWatched'));

    if (films === null) {
      films = [];
      addFilm();
    } else {
      let arrFilmsidx = films.map((elem, idx) => {
        return elem.id;
      });
      let idxFilm = arrFilmsidx.indexOf(selectFilm.id);

      if (idxFilm != -1) {
        deleteFilm(idxFilm);
      } else {
        addFilm();
      }
    }

    function addFilm() {
      films.push(selectFilm);

      localStorage.setItem('filmsWatched', JSON.stringify(films));
    }
    function deleteFilm(idxFilm) {
      let newFilms = films.reduce((acc, elem, idx) => {
        if (idx != idxFilm) {
          acc.push(elem);
        }
        return acc;
      }, []);

      if (newFilms.length === 0) {
        localStorage.removeItem('filmsWatched');
      } else {
        localStorage.setItem('filmsWatched', JSON.stringify(newFilms));
      }
    }
    monitorButtonStatusText();
  }
  onQueueClick() {
    // клік на Queue
    let films = JSON.parse(localStorage.getItem('filmsQueue'));
    if (films === null) {
      films = [];
      addFilm();
    } else {
      let arrFilmsidx = films.map((elem, idx) => {
        return elem.id;
      });
      let idxFilm = arrFilmsidx.indexOf(selectFilm.id);

      if (idxFilm != -1) {
        deleteFilm(idxFilm);
      } else {
        addFilm();
      }
    }

    function addFilm() {
      films.push(selectFilm);

      localStorage.setItem('filmsQueue', JSON.stringify(films));
    }
    function deleteFilm(idxFilm) {
      let newFilms = films.reduce((acc, elem, idx) => {
        if (idx != idxFilm) {
          acc.push(elem);
        }
        return acc;
      }, []);

      if (newFilms.length === 0) {
        localStorage.removeItem('filmsQueue');
      } else {
        localStorage.setItem('filmsQueue', JSON.stringify(newFilms));
      }
    }

    monitorButtonStatusText();
  }

  setPrevNextButtons(data) {
    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');

    const lastBtn = document.createElement('button');
    const firsBtn = document.createElement('button');
    lastBtn.textContent = 'Last';
    firsBtn.textContent = 'First';
    lastBtn.classList.add('pagination__turning-btn');
    firsBtn.classList.add('pagination__turning-btn');

    prevBtn.textContent = 'Prev';
    prevBtn.classList.add('pagination__turning-btn');
    nextBtn.textContent = 'Next';
    nextBtn.classList.add('pagination__turning-btn');
    if (this.page === 1) {
      prevBtn.classList.add('is-hidden');
      firsBtn.classList.add('is-hidden');
      firsBtn.disabled = true;
      //prevBtn.disabled = true; // їх же і так не видно, навіщо disabled?
    }

    if (this.page === data.total_pages) {
      nextBtn.classList.add('is-hidden');
      lastBtn.classList.add('is-hidden');
      //nextBtn.disabled = true; // їх же і так не видно, навіщо disabled?
    }

    if (this.page < 4) {
      firsBtn.classList.add('is-hidden');
    }

    if (data.total_pages < 6) {
      firsBtn.classList.add('is-hidden');
      lastBtn.classList.add('is-hidden');
      nextBtn.classList.add('is-hidden');
    }

    prevBtn.addEventListener('click', () => {
      this.pagesScroll();
      this.decrementPage();
    });
    nextBtn.addEventListener('click', () => {
      this.incrementPage();
      this.pagesScroll();
    });

    firsBtn.addEventListener('click', () => {
      this.resetPage();
      this.pagesScroll();
    });

    lastBtn.addEventListener('click', () => {
      this.pagesScroll();
      this.params._page = this.params.lastPage;
      console.log(data.total_pages);
      //this.params._page += data.total_pages;
    });

    this.pagination.paginationContainer.prepend(firsBtn, prevBtn);
    this.pagination.paginationContainer.append(nextBtn, lastBtn);
  }
  pagesScroll() {
    window.scrollTo(0, 0);
    this.activeLoader();

    this.resetGalleryCard();
    this.searchMode === 'popular'
      ? setTimeout(() => {
          this.fetchPopularFilmsList();
        }, 2000)
      : setTimeout(() => {
          this.movieSearch();
        }, 2000);
  }

  setRatioButtons(data) {
    let maxLeft = this.params._page - Math.floor(this.pagination.window / 2);
    let maxRight = this.params._page + Math.floor(this.pagination.window / 2);
    this.params.lastPage = data.total_pages;
    this.pagination.paginationContainer.innerHTML = '';
    if (maxLeft < 1) {
      maxLeft = 1;
      maxRight = this.pagination.window;
    }
    if (maxRight > data.total_pages) {
      maxLeft = this.params._page - (this.pagination.window - 1);
      maxRight = data.total_pages;
      if (maxLeft < 1) maxLeft = 1;
    }

    let btnArray = [];
    for (let i = maxLeft; i <= maxRight; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.classList.add('pagination__btn'); // добавляет класс для стилей

      if (+button.textContent === this.params._page)
        button.classList.add('active');
      button.addEventListener('click', e => {
        window.scrollTo(0, 0);
        this.activeLoader();
        this.page = +e.target.textContent;
        this.currentPage = this.page;
        this.pagination.cardContainer.innerHTML = '';
        this.searchMode === 'popular'
          ? setTimeout(() => {
              this.fetchPopularFilmsList();
            }, 2000)
          : setTimeout(() => {
              this.movieSearch();
            }, 2000);
      });
      btnArray.push(button);
    }

    this.pagination.paginationContainer.append(...btnArray);
    if (this.loaderStatus === 'active') {
      button.classList.add('is-hidden');
    }
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
    if (window.innerWidth >= 1024) {
      this.imgCards.currentSizes.backdropSize = this.imgCards.backdropSizes.desktop;
      this.imgCards.defaultBackdropImg = this.DEFAULT_IMAGE;
      return;
    }
    if (window.innerWidth < 1024) {
      this.imgCards.currentSizes.backdropSize = this.imgCards.backdropSizes.tablet;
      this.imgCards.defaultBackdropImg = this.DEFAULT_IMAGE;
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
