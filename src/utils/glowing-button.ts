import { gsap } from 'gsap';

export function initGlowingButton() {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach((button) => {
    const border = button.querySelector('.button_border');

    if (!border) return;

    const tl = gsap.timeline({ paused: true });

    tl.to(border, {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: 'linear',
    });

    button.addEventListener('mouseenter', () => {
      tl.play();
    });

    button.addEventListener('mouseleave', () => {
      tl.pause();
      gsap.to(border, {
        rotation: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });
}
