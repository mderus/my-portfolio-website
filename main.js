const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 500,
});

const scrollBtn = new SmoothScroll('a[href*="#"]', {
  speed: 500,
});

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const openMenu = document.querySelector('.openMenu');
const menu = document.querySelector('.navbar ul');
const menuElements = document.querySelectorAll('.navbar ul li');
const closeMenu = document.querySelector('.closeMenu');
const headingTitle = document.querySelector('.main-title');
const slider = document.querySelector('.swiper');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
menuElements.forEach((menuEl) => menuEl.addEventListener('click', close));

function show() {
  slider.style.display = 'none';
  menu.style.display = 'flex';
  menu.style.top = '0';
}

function close() {
  slider.style.display = 'block';
  menu.style.top = '-100vh';
}

if (navigator.userAgent.match(/Mobile/)) {
  headingTitle.innerHTML = `Hi, <br/> I'm Matt, <br/> Frontend Dev`;
}
