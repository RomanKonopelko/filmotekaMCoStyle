const refs = {
        logoText: document.querySelector('[data-logoText]'),
    
};
if (document.body.clientWidth <= 320) {
    refs.logoText.classList.add("is-hiden")
}
else {
    refs.logoText.classList.remove("is-hiden")
}