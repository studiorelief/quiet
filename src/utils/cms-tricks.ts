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

export function applyCurrentStateToNavbarBlog() {
  // Check if the current URL starts with '/blog/'
  if (window.location.pathname.startsWith('/blog/')) {
    // Find the navbar link with '/blog' URL
    const blogNavLink = document.querySelector('.navbar_link[href="/blog"]');

    // If found, add the 'w--current' class
    if (blogNavLink) {
      blogNavLink.classList.add('w--current');
    }
  }
}
