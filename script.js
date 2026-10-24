// Año en el footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Menú móvil
function toggleMenu(){
  const menu = document.getElementById('menu');
  if (menu) menu.classList.toggle('open');
}

// Swiper “peek” con lazy robusto
const expSwiper = new Swiper('.experiences-swiper', {
  loop: true,
  centeredSlides: true,
  grabCursor: true,

  // 1 sola slide con “peek”
  slidesPerView: 1.1,
  spaceBetween: 24,

  // lazy load robusto
  preloadImages: false,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 2,
    loadOnTransitionStart: true
  },

  // en tamaños grandes seguimos con 1.x para mantener el “peek”
  breakpoints: {
    700:  { slidesPerView: 1.15, spaceBetween: 24 },
    1024: { slidesPerView: 1.2,  spaceBetween: 24 }
  },

  navigation: {
    nextEl: '.experiences-swiper .swiper-button-next',
    prevEl: '.experiences-swiper .swiper-button-prev'
  },
  pagination: {
    el: '.experiences-swiper .swiper-pagination',
    clickable: true
  },
  on: {
    slideChangeTransitionEnd(swiper){
      swiper.slides.forEach(s => s.classList.remove('is-center'));
      const active = swiper.slides[swiper.activeIndex];
      active && active.classList.add('is-center');
    }
  }
});
