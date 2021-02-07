const refs = {
  //2videoApi
  loaderPartOne: document.querySelectorAll('.bars-common'),
  loaderPartTwo: document.querySelectorAll('.squares-common'),
  errorNotification: document.querySelector('.main__error-notification'),
  main: document.querySelector('.main'),
  detailsSection: document.querySelector('.details-page'),
  libraryFilrt: document.querySelector('.library-filter'),
  paginationWrapper: document.querySelector('.pagination'),
  ulForCards: document.querySelector('.gallery__list'),
  reviewCard: document.querySelector('.review'),
  sliderContainer: document.querySelector('.my-slider'),
  body: document.querySelector('.body'),

  //3initialHomePage
  btnTop: document.querySelector('.main__btn-scroll'),
  modalBtn: document.querySelector('.backdrop__modal__btn'),
  backdrop: document.querySelector('.backdrop'),
  player: document.querySelector('#player'),

  //4searchAndPaginationHomePage
  form: document.querySelector('.main__search-form'),

  //6libraryPage
  btnMyLibrary: document.querySelector('.library'),

  filmsLibrary: document.querySelector('.js-gallery'),
  btnWatched: document.querySelector('.btnWatched'),
  btnQueue: document.querySelector('.btnQueue'),

  //7genreselect
  thrillerRef: document.querySelector('[data-thriller]'),
  comedyRef: document.querySelector('[data-comedy]'),
  animationRef: document.querySelector('[data-animation]'),
  actionRef: document.querySelector('[data-action]'),
  westernRef: document.querySelector('[data-western]'),
  fantasyRef: document.querySelector('[data-fantasy]'),
  dramaRef: document.querySelector('[data-drama]'),

  //8headerLogoText
  logoText: document.querySelector('[data-logoText]'),

  //9navigation
  homePage: document.querySelector('[data-home]'),
  libraryPage: document.querySelector('[data-library]'),

  //10parallax
  layer: document.querySelector('.layer__bg'),
  title: document.querySelector('.parallax-logo'),
  title2: document.querySelectorAll('.parallax-item'),
  decor1: document.querySelector('.decoration-first'),
  decor2: document.querySelector('.decoration-second'),

  //12navigationEfectSwitch
  iconButton: document.querySelector('[data-icon]'),

  //Authorization
  welcomeTextSignIn: document.querySelector('.auth__title.sign-in'),
  welcomeTextSignUp: document.querySelector('.auth__title.sign-up'),
  // demandText: document.querySelector('.auth__title-demand'),
  // signUpSuccess: document.querySelector('.auth__title-congratulations'),
  // signInSuccess: document.querySelector('.auth__title-success'),


  //
  // heroContainer: document.getElementsByClassName('hero'), 
  // galleryListItem: document.getElementsByClassName('gallery__list-item'),

};

const {
  loaderPartOne,
  loaderPartTwo,
  errorNotification,
  main,
  detailsSection,
  libraryFilrt,
  paginationWrapper,
  ulForCards,
  btnTop,
  modalBtn,
  backdrop,
  player,
  form,
  btnMyLibrary,
  filmsLibrary,
  btnWatched,
  btnQueue,
  thrillerRef,
  comedyRef,
  actionRef,
  animationRef,
  westernRef,
  fantasyRef,
  dramaRef,
  logoText,
  homePage,
  libraryPage,
  layer,
  title,
  title2,
  decor1,
  decor2,
  iconButton,
  reviewCard,
  sliderContainer,

  welcomeTextSignIn,
  welcomeTextSignUp,

  // heroContainer,
  // galleryListItem,
  body,
} = refs;

console.log(welcomeTextSignIn);
