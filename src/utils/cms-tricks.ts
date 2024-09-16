export function hideCmsImage() {
  const elements = document.querySelectorAll('[src]');

  elements.forEach((element) => {
    if (element instanceof HTMLImageElement) {
      if (
        element.src ===
        'https://cdn.prod.website-files.com/66dea3c1444cc1e05fb3028e/66dea3c1444cc1e05fb30296_image.svg'
      ) {
        element.style.display = 'none';
      }
    }
  });
}
