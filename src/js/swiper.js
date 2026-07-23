import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DESKTOP_BREAKPOINT = 1440;

let featuresSwiper = null;
let howSwiper = null;
let reviewsSwiper = null;

function createSwiper({
  swiperSelector,
  prevButtonSelector,
  nextButtonSelector,
  paginationSelector,
  autoplay = false,
  loop = false,
}) {
  const swiperElement = document.querySelector(swiperSelector);

  if (!swiperElement) {
    return null;
  }

  return new Swiper(swiperElement, {
    modules: [Navigation, Pagination, Autoplay],

    slidesPerView: 1,
    spaceBetween: 16,
    speed: 700,
    loop,

    navigation: {
      prevEl: prevButtonSelector,
      nextEl: nextButtonSelector,
    },

    pagination: {
      el: paginationSelector,
      clickable: true,
    },

    autoplay: autoplay
      ? {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }
      : false,
  });
}

function initSwipers() {
  if (!featuresSwiper) {
    featuresSwiper = createSwiper({
      swiperSelector: '.features-swiper',
      prevButtonSelector: '.features-button-prev',
      nextButtonSelector: '.features-button-next',
      paginationSelector: '.features-pagination',
       autoplay: true,
      loop: true,     
    });
  }

  if (!howSwiper) {
    howSwiper = createSwiper({
      swiperSelector: '.how-swiper',
      prevButtonSelector: '.how-button-prev',
      nextButtonSelector: '.how-button-next',
      paginationSelector: '.how-pagination',
      autoplay: true,
      loop: true,
    });
  }

  if (!reviewsSwiper) {
    reviewsSwiper = createSwiper({
      swiperSelector: '.reviews-swiper',
      prevButtonSelector: '.reviews-button-prev',
      nextButtonSelector: '.reviews-button-next',
      paginationSelector: '.reviews-pagination',
      autoplay: true,
      loop: true,
    });
  }
}

function destroySwiper(swiperInstance) {
  if (!swiperInstance) {
    return null;
  }

  swiperInstance.destroy(true, true);

  return null;
}

function destroySwipers() {
  featuresSwiper = destroySwiper(featuresSwiper);
  howSwiper = destroySwiper(howSwiper);
  reviewsSwiper = destroySwiper(reviewsSwiper);
}

function handleSwipers() {
  if (window.innerWidth < DESKTOP_BREAKPOINT) {
    initSwipers();
  } else {
    destroySwipers();
  }
}

handleSwipers();

window.addEventListener('resize', handleSwipers);