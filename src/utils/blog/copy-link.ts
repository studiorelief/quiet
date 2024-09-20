export function copyBlogLink() {
  const copyButtons = document.querySelectorAll('.is-copy-link');

  copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const url = window.location.href;
      const buttonContent = button.querySelector('.button_content');

      if (buttonContent) {
        const originalText = buttonContent.textContent;

        try {
          await navigator.clipboard.writeText(url);

          // Delay the text change to "Text copied"
          setTimeout(() => {
            buttonContent.textContent = 'Link copied';

            // Set another timeout to revert the text after 2 seconds
            setTimeout(() => {
              buttonContent.textContent = originalText;
            }, 2000);
          }, 0);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      }
    });
  });
}
