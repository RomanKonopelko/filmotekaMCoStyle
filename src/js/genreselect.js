const refs = {
    thrillerRef: document.querySelector('[data-thriller]'),
    comedyRef: document.querySelector('[data-comedy]'),
    animationRef: document.querySelector('[data-animation]'),
    actionRef: document.querySelector('[data-action]'),
    westernRef: document.querySelector('[data-western]'),
    fantasyRef: document.querySelector('[data-fantasy]'),
    dramaRef: document.querySelector('[data-drama]'),
};
const { thrillerRef, comedyRef, actionRef, animationRef, westernRef, fantasyRef, dramaRef } = refs;

thrillerRef.addEventListener('click', drawThrillerList);
comedyRef.addEventListener('click', drawComedyList);
actionRef.addEventListener('click', drawActionList);
animationRef.addEventListener('click', drawAnimationList);
westernRef.addEventListener('click', drawWesternList);
fantasyRef.addEventListener('click', drawFantasyList);
dramaRef.addEventListener('click', drawDramaList);

function drawThrillerList() {
    MyApi.resetGalleryCard();
    MyApi.fetchThrillerFilmsList();
    thrillerRef.classList.add('current');
    comedyRef.classList.remove('current');
    animationRef.classList.remove('current');
    actionRef.classList.remove('current');
    westernRef.classList.remove('current');
    fantasyRef.classList.remove('current');
    dramaRef.classList.remove('current');
}
function drawComedyList() {
    MyApi.resetGalleryCard();
    MyApi.fetchComedyFilmsList();
    thrillerRef.classList.remove('current');
    comedyRef.classList.add('current');
    animationRef.classList.remove('current');
    actionRef.classList.remove('current');
    westernRef.classList.remove('current');
    fantasyRef.classList.remove('current');
    dramaRef.classList.remove('current');
}
function drawActionList() {
    MyApi.resetGalleryCard();
    MyApi.fetchActionFilmsList();
    thrillerRef.classList.remove('current');
    comedyRef.classList.remove('current');
    animationRef.classList.remove('current');
    actionRef.classList.add('current');
    westernRef.classList.remove('current');
    fantasyRef.classList.remove('current');
    dramaRef.classList.remove('current');
}
function drawWesternList() {
    MyApi.resetGalleryCard();
    MyApi.fetchWesternFilmsList();
    thrillerRef.classList.remove('current');
    comedyRef.classList.remove('current');
    animationRef.classList.remove('current');
    actionRef.classList.remove('current');
    westernRef.classList.add('current');
    fantasyRef.classList.remove('current');
    dramaRef.classList.remove('current');
}
function drawFantasyList() {
    MyApi.resetGalleryCard();
    MyApi.fetchFantasyFilmsList();
    thrillerRef.classList.remove('current');
    comedyRef.classList.remove('current');
    animationRef.classList.remove('current');
    actionRef.classList.remove('current');
    westernRef.classList.remove('current');
    fantasyRef.classList.add('current');
    dramaRef.classList.remove('current');
}
function drawDramaList() {
    MyApi.resetGalleryCard();
    MyApi.fetchDramaFilmsList();
    thrillerRef.classList.remove('current');
    comedyRef.classList.remove('current');
    animationRef.classList.remove('current');
    actionRef.classList.remove('current');
    westernRef.classList.remove('current');
    fantasyRef.classList.remove('current');
    dramaRef.classList.add('current');
}
function drawAnimationList() {
    MyApi.resetGalleryCard();
    MyApi.fetchAnimationFilmsList();
    thrillerRef.classList.remove('current');
    comedyRef.classList.remove('current');
    animationRef.classList.add('current');
    actionRef.classList.remove('current');
    westernRef.classList.remove('current');
    fantasyRef.classList.remove('current');
    dramaRef.classList.remove('current');
}