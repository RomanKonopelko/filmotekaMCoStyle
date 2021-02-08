'use strict';

history.scrollRestoration = 'manual';

MyApi.checkBackdropImgSize();
MyApi.checkPosterImgSize();

MyApi.fetchPopularFilmsList();
MyApi.dailyBestMovie();
MyApi.fetchGenres();

btnTop.addEventListener('click', () => {
  scrollToTop();
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

window.onscroll = () => {
  parallaxCheck();
  handleScroll();
};

function handleScroll() {
  let bodyScrollTop = document.body.scrollTop;
  let elementScrollTop = document.documentElement.scrollTop;

  if (bodyScrollTop > 500 || elementScrollTop > 500) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
}

backdrop.addEventListener('click', onBeckDropCkick);

function onHandleTrailerError() {
  player.src = `https://www.youtube.com/embed/Zq_zgig9DqQ?autoplay=1`;
}

function openModal(event) {
  event.preventDefault();

  body.classList.add('overflow');

  MyApi.fetchVideoById().then(key => {
    player.src = `https://www.youtube.com/embed/${key}?autoplay=1`;
  });

  backdrop.classList.remove('backdrop--hidden');
  window.addEventListener('keydown', onKeybordPress);
}

function closeModal() {
  player.src = '';
  backdrop.classList.add('backdrop--hidden');
  body.classList.remove('overflow');
  window.removeEventListener('keydown', onKeybordPress);
}

function onKeybordPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function onBeckDropCkick(event) {
  if (event.target.nodeName === 'DIV') {
    closeModal();
  }
}
