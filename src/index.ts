import './index.css';

import { hideCmsImage } from '$utils/cms-tricks';
import { contactFormSelect, submitFormHeading, validateAppUrls } from '$utils/contact/form';
import { initGlowingButton } from '$utils/glowing-button';
import { animateHeroLights, animatePortfolioScroll } from '$utils/home/gsap';
import { animateHeroLineBackground } from '$utils/home/gsap';
import { loadScript } from '$utils/load-script';
import { initFlashlightEffect } from '$utils/publishing/reveal-effect';
import { swiperAbout, swiperMarquee, swiperTestimonials } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  /* global */
  Promise.all([
    loadScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js'
    ),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsload@1/cmsload.js'),
  ]);

  hideCmsImage();
  animateHeroLineBackground();
  initGlowingButton();

  /* form */
  submitFormHeading();
  validateAppUrls();

  /* home */
  if (window.location.pathname === '/') {
    animateHeroLights();
    swiperTestimonials();
    animatePortfolioScroll();
    swiperMarquee();
  }

  /* publishing */
  if (window.location.pathname === '/publishing') {
    animateHeroLights();
    swiperTestimonials();
    if (window.matchMedia('(min-width: 1024px)').matches) {
      initFlashlightEffect();
    }
  }

  /* acquisition */
  if (window.location.pathname === '/acquisition') {
    animateHeroLights();
    swiperTestimonials();
  }

  /* about */
  if (window.location.pathname === '/about') {
    swiperAbout();
  }

  /* contact */
  if (window.location.pathname === '/contact') {
    contactFormSelect();
  }
});
