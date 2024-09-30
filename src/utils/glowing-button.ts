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

    const colorTl = gsap.timeline({ paused: true, repeat: -1 });
    colorTl.to(border, {
      background:
        'conic-gradient(from 90deg, var(--base-color-brand--contrast-1), transparent, transparent, transparent, transparent, transparent, transparent, var(--base-color-brand--contrast-1))',
      duration: 2,
      ease: 'none',
    });
    colorTl.to(border, {
      background:
        'conic-gradient(from 90deg, var(--base-color-brand--contrast-2), transparent, transparent, transparent, transparent, transparent, transparent, var(--base-color-brand--contrast-2))',
      duration: 2,
      ease: 'none',
    });

    button.addEventListener('mouseenter', () => {
      tl.play();
      if (button.classList.contains('is-secondary')) {
        colorTl.play();
      }
    });

    button.addEventListener('mouseleave', () => {
      tl.pause();
      gsap.to(border, {
        rotation: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
      if (button.classList.contains('is-secondary')) {
        colorTl.pause();
        gsap.to(border, {
          background:
            'conic-gradient(from 90deg, var(--base-color-brand--contrast-2), transparent, transparent, transparent, transparent, transparent, transparent, var(--base-color-brand--contrast-2))',
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    });
  });
}
