function parallax(event) {
  let speed = layer.getAttribute('data-speed');
  let test;
  layer.style.transform = `translateX(${
    (event.clientX * speed) / 500
  }px) translateY(${(event.clientY * speed) / 1000}px)`;
  test = [...title].forEach(el => {
    el.style.transform = `translateX(${
      (-event.clientX * 2) / 300
    }px) translateY(${(-event.clientY * 2) / 300}px)`;
  });
}

const layer = document.querySelector('.layer__bg');
const title = document.querySelectorAll('.header__item');
document.addEventListener('mousemove', parallax);
