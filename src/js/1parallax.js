const parallax = function (event) {
  //=================================================//parallsx header effect
  let speed = layer.getAttribute('data-speed');
  let items;

  layer.style.transform = `translateX(${
    //===============================================//bg-picture
    (event.clientX * speed) / 1000
  }px) translateY(${(event.clientY * speed) / 1000}px)`;

  title.style.transform = `translateX(${
    //===============================================//logo&logo text
    (event.clientX * 40) / 700
  }px) translateY(${(event.clientY * 40) / 400}px)`;

  decor2.style.transform = `translateX(${
    //===============================================//logo decoration
    (event.clientX * 40) / 600
  }px) translateY(${(event.clientY * 30) / 600}px)`;

  items = [...title2].forEach(el => {
    //==============================================//my lybrary and home btn
    el.style.transform = `translateX(${
      (event.clientX * 40) / 600
    }px) translateY(${(event.clientY * 30) / 500}px)`;
  });
  decor1.style.transform = `translateX(${
    //===============================================//my lybrary and home decoration
    (event.clientX * 40) / 800
  }px) translateY(${(event.clientY * 40) / 800}px)`;
};

const { layer, title, title2, decor1, decor2 } = refs;

let elementScrollTop1 = document.documentElement.scrollTop;
(function parallaxWidthCheck() {
  if (window.innerWidth >= 1024) {
    document.addEventListener('mousemove', parallax);
    return;
  }
  if (window.innerWidth < 1024) {
    document.removeEventListener('mousemove', parallax);
    return;
  }
})();
function parallaxCheck() {
  //=====================================================//conditions to toggle the event
  let elementHeight = document.body.children[2].clientHeight;
  let documentScroll = document.documentElement.scrollTop;

  if (documentScroll > elementHeight) {
    document.removeEventListener('mousemove', parallax);
    return;
  }
  if (
    documentScroll > 330 &&
    documentScroll < 600 &&
    window.innerWidth >= 1024
  ) {
    //====================================================//!!! НУЖНО НАЙТИ БОЛЕЕ ТОЧНЫЙ СПОСОБ УДАЛЕНИЕ СЛУШАТЕЛЯ
    document.addEventListener('mousemove', parallax);
    return;
  }
}
