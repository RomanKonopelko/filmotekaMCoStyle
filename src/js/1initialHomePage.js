// modal // 
 refs.modalBtn.addEventListener('click', closeModal)
 refs.filmImage.addEventListener('click', openModal)
 refs.backdrop.addEventListener('click' , onBeckDropCkick)

 function closeModal() {
     refs.backdrop.classList.add('backdrop--hidden');  

    //  window.removeEventListener("keydown", onKeybordPress); 
}

function openModal(event) {
    event.preventDefault();
    
    refs.backdrop.classList.remove('backdrop--hidden');
    refs.modalText.textContent = refs.aboutFilmText.textContent;
    
    window.addEventListener("keydown", onKeybordPress);
}


function onKeybordPress(event) {
    if (event.code === "Escape") {
    closeModal();
  }
}
    
function onBeckDropCkick(event) {
    if (event.target.nodeName === "DIV") {
    closeModal();
  }
}