export function gradientText() {
  const elements = document.querySelectorAll('*:not(script):not(style)');

  elements.forEach((element) => {
    if (element.childNodes.length > 0) {
      element.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent;
          if (text) {
            const regex = /\/\*(.*?)\*\//g;
            const newHtml = text.replace(regex, (match, p1) => {
              return `<span class="background-gradient">${p1}</span>`;
            });
            if (newHtml !== text) {
              const tempDiv = document.createElement('div');
              tempDiv.innerHTML = newHtml;
              const fragment = document.createDocumentFragment();
              while (tempDiv.firstChild) {
                fragment.appendChild(tempDiv.firstChild);
              }
              element.replaceChild(fragment, node);
            }
          }
        }
      });
    }
  });
}
