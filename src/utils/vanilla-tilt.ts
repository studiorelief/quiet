import VanillaTilt from 'vanilla-tilt';

export function vanillaInit() {
  const elementsBG = document.querySelectorAll('.benefits_cards');
  const elements = document.querySelectorAll('.benefits_cards-content');

  VanillaTilt.init(Array.from(elementsBG) as HTMLElement[], {
    max: 2.5,
    speed: 10,
    glare: true,
    'max-glare': 0.5,
    reset: true, // If the tilt effect has to be reset on exit.
    'reset-to-start': true, // Whether the exit reset will go to [0,0] (default) or [startX, startY]
    easing: 'cubic-bezier(.03,.98,.52,.99)',
  });

  VanillaTilt.init(Array.from(elements) as HTMLElement[], {
    max: 0,
    speed: 10,
    glare: true,
    'max-glare': 0.1,
  });
}
