const galleryList = document.getElementsByClassName('gallery__list');
const libraryButton = document.querySelector('[data-library]');
libraryButton.addEventListener('click',() => { 
    galleryList.innerHTML = "";
} )