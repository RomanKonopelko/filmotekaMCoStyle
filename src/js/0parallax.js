function parallax(event) {
  let speed = layer.getAttribute('data-speed');
  let item;
  layer.style.transform = `translateX(${
    (event.clientX * speed) / 500
  }px) translateY(${(event.clientY * speed) / 1000}px)`;
  title.style.transform = `translateX(${
    (-event.clientX * 10) / 300
  }px) translateY(${(-event.clientY * 6) / 300}px)`;

  item = [...title2].forEach(el => {
    el.style.transform = `translateX(${
      (-event.clientX * 4) / 800
    }px) translateY(${(-event.clientY * 2) / 800}px)`;
  });
}

const layer = document.querySelector('.layer__bg');
const title = document.querySelector('.parallax-logo');
const title2 = document.querySelectorAll('.parallax-item');

document.addEventListener('mousemove', parallax);
