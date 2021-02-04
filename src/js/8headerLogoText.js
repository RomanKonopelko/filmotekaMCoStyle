// const refs = {
//   logoText: document.querySelector('[data-logoText]'),
// };

// console.log(refs.logoText);
// if (document.body.clientWidth <= 320) {
//   refs.logoText.classList.add('is-hidden');
// } else {
//   refs.logoText.classList.remove('is-hidden');
// }
function classToggle() {
  if (document.body.clientWidth <= 320) {
    logoText.classList.add('is-hidden');
  } else {
    logoText.classList.remove('is-hidden');
  }
}
classToggle();

window.addEventListener('resize', () => {
  if (document.body.clientWidth <= 320) {
    logoText.classList.add('is-hidden');
  } else {
    logoText.classList.remove('is-hidden');
  }
});
