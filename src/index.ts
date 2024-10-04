import './index.css';

import { copyBlogLink } from '$utils/blog/copy-link';
import { hideCmsImage } from '$utils/cms-tricks';
import {
  checkEmailStructure,
  checkInputFields,
  contactFormSelect,
  // joinStudioFormSelect,
  placeholderSelect,
  submitFormHeading,
  validateAppUrls,
} from '$utils/contact/form';
import { initGlowingButton } from '$utils/glowing-button';
import { gradientText } from '$utils/gradient-text';
import { animateHeroLights, animatePortfolioScroll } from '$utils/home/gsap';
import { animateHeroLineBackground } from '$utils/home/gsap';
import { loadScript } from '$utils/load-script';
// import { initFlashlightEffect } from '$utils/publishing/reveal-effect';
import { swiperAbout, swiperMarquee, swiperTestimonials } from '$utils/swiper';
import { vanillaInit } from '$utils/vanilla-tilt';

window.Webflow ||= [];
window.Webflow.push(() => {
  /* global */
  Promise.all([
    loadScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js'
    ),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsload@1/cmsload.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-selectcustom@1/selectcustom.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-formsubmit@1/formsubmit.js'),
  ]);

  hideCmsImage();
  animateHeroLineBackground();
  initGlowingButton();
  gradientText();

  /* form */
  submitFormHeading();
  validateAppUrls();
  setTimeout(() => {
    contactFormSelect();
    // joinStudioFormSelect();
  }, 500);
  placeholderSelect();
  checkEmailStructure();
  checkInputFields();

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
    if (window.matchMedia('(min-width: 991px)').matches) {
      vanillaInit();
    }
    // if (window.matchMedia('(min-width: 1024px)').matches) {
    //   initFlashlightEffect();
    // }
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
  }

  /* blog */
  copyBlogLink();
  if (window.location.pathname === '/blog') {
  }
});
