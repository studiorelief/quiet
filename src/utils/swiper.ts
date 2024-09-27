import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

export function swiperTestimonials() {
  const swiperTestimonialsContainers = document.querySelectorAll('.swiper.is-testimonials');

  swiperTestimonialsContainers.forEach((container) => {
    new Swiper(container, {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 32,
      mousewheel: {
        forceToAxis: true,
      },
      autoplay: {
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      speed: 2000,
      breakpoints: {
        768: {
          slidesPerView: 'auto',
          spaceBetween: 32,
        },
        0: {
          slidesPerView: 'auto',
          spaceBetween: 8,
          autoplay: {
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
            reverseDirection: true,
          },
        },
      },
    });
  });
}

export function swiperMarquee() {
  const swiperLine1Container = document.querySelectorAll('.swiper.is-app-scroll.is-1');
  const swiperLine2Container = document.querySelectorAll('.swiper.is-app-scroll.is-2');
  const swiperLine3Container = document.querySelectorAll('.swiper.is-app-scroll.is-3');

  swiperLine1Container.forEach((container) => {
    new Swiper(container, {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      autoplay: {
        delay: 0,
        reverseDirection: true,
      },
      speed: 5000,
    });
  });

  swiperLine2Container.forEach((container) => {
    new Swiper(container, {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      autoplay: {
        delay: 0,
        reverseDirection: false,
      },
      speed: 5000,
    });
  });

  swiperLine3Container.forEach((container) => {
    new Swiper(container, {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      autoplay: {
        delay: 0,
        reverseDirection: true,
      },
      speed: 3500,
    });
  });
}

export function swiperAbout() {
  const swiperAboutLine1Container = document.querySelectorAll('.swiper.is-about.is-1');
  const swiperAboutLine2Container = document.querySelectorAll('.swiper.is-about.is-2');
  const swiperAboutLine3Container = document.querySelectorAll('.swiper.is-about.is-3');

  swiperAboutLine1Container.forEach((container) => {
    new Swiper(container, {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 32,
      autoplay: {
        delay: 0,
        reverseDirection: true,
      },
      speed: 3000,
    });
  });

  swiperAboutLine2Container.forEach((container) => {
    new Swiper(container, {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 32,
      autoplay: {
        delay: 0,
        reverseDirection: false,
      },
      speed: 4000,
    });
  });

  swiperAboutLine3Container.forEach((container) => {
    new Swiper(container, {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 32,
      autoplay: {
        delay: 0,
        reverseDirection: true,
      },
      speed: 2000,
    });
  });
}
