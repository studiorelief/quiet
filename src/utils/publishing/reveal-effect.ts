import { gsap } from 'gsap';

export function initFlashlightEffect() {
  const container = document.querySelector('.benefits_grid') as HTMLElement;
  if (!container) return;

  // Make the entire benefits_grid invisible initially
  gsap.set(container, { opacity: 0.2 });

  const flashlight = document.createElement('div');
  flashlight.classList.add('flashlight');
  container.appendChild(flashlight);

  // Create a mask for the visible area
  const mask = document.createElement('div');
  mask.style.position = 'absolute';
  mask.style.width = '100%';
  mask.style.height = '100%';
  container.appendChild(mask);

  function updateFlashlight(e: MouseEvent) {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(flashlight, {
      duration: 0.5,
      x: x - 50 * 16,
      y: y - 50 * 15,
      ease: 'power2.out',
    });

    // Make the container fully visible
    gsap.to(container, {
      duration: 5,
      opacity: 1,
      ease: 'power2.out',
    });

    // Update mask to create a circular visible area
    gsap.to(mask, {
      duration: 0.5,
      background: `radial-gradient(circle 400px at ${x}px ${y}px, transparent, rgba(0, 0, 0, 0.9))`,
      ease: 'power2.out',
    });
  }

  container.addEventListener('mousemove', updateFlashlight);
}
