import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animateHeroLights() {
  const heroLights = document.querySelector('.hero_lights-bottom');
  const heroSection = document.querySelector('.section_hero');

  if (!heroLights || !heroSection) return;

  gsap.fromTo(
    heroLights,
    {
      x: 0,
      opacity: 1,
    },
    {
      x: '-100%',
      opacity: 0,
      scrollTrigger: {
        markers: false,
        trigger: heroSection,
        start: '0% 25%',
        end: '200% 25%',
        scrub: true,
      },
    }
  );
}

export function animatePortfolioScroll() {
  const scrollWrappers = document.querySelectorAll('.portfolio_app-scroll-wrapper');

  scrollWrappers.forEach((scrollWrapper) => {
    const list1 = scrollWrapper.querySelector('.swiper.is-app-scroll.is-1');
    const list2 = scrollWrapper.querySelector('.swiper.is-app-scroll.is-2');
    const list3 = scrollWrapper.querySelector('.swiper.is-app-scroll.is-3');

    if (!list1 || !list2 || !list3) return;

    gsap.fromTo(
      list1,
      { x: '-5rem' },
      {
        x: '5rem',
        scrollTrigger: {
          markers: false,
          trigger: scrollWrapper,
          start: '-20% bottom',
          end: '120% top',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      list2,
      { x: '3rem' },
      {
        x: '-9rem',
        scrollTrigger: {
          markers: false,
          trigger: scrollWrapper,
          start: '-20% bottom',
          end: '120% top',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      list3,
      { x: '-3rem' },
      {
        x: '8rem',
        scrollTrigger: {
          markers: false,
          trigger: scrollWrapper,
          start: '-20% bottom',
          end: '120% top',
          scrub: true,
        },
      }
    );
  });
}

export function animateHeroLineBackground() {
  const heroSection = document.querySelector('.section_hero') as HTMLElement;
  const lineBackground = heroSection?.querySelector('.hero_stars-wrapper') as HTMLElement;

  if (!heroSection || !lineBackground) return;

  const moveBackground = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = heroSection.getBoundingClientRect();

    const xPercent = -((clientX - left) / width - 0.5) * 5;
    const yPercent = -((clientY - top) / height - 0.5) * 10;

    gsap.to(lineBackground, {
      xPercent,
      yPercent,
      duration: 1,
      ease: 'power2.out',
    });
  };

  heroSection.addEventListener('mousemove', moveBackground);

  heroSection.addEventListener('mouseleave', () => {
    gsap.to(lineBackground, {
      xPercent: 0,
      yPercent: 0,
      duration: 5,
      ease: 'power2.out',
    });
  });
}
