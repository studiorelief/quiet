export function submitFormHeading() {
  const navbarButton = document.querySelector('.a--popup_is-submit-app');
  const popupHeading = document.querySelector('[Dynamic=heading-change]');

  if (!navbarButton || !popupHeading) return;

  const changedText = 'Submit your App';

  navbarButton.addEventListener('click', () => {
    popupHeading.textContent = changedText;
  });
}

export function validateAppUrls() {
  const appStoreInput = document.getElementById(
    'is-contact-trigger-app-store-url'
  ) as HTMLInputElement;
  const googlePlayInput = document.getElementById(
    'is-contact-trigger-google-play-url'
  ) as HTMLInputElement;

  if (!appStoreInput || !googlePlayInput) return;

  function updateRequiredStatus() {
    const isAppStoreEmpty = appStoreInput.value.trim() === '';
    const isGooglePlayEmpty = googlePlayInput.value.trim() === '';

    appStoreInput.required = isGooglePlayEmpty;
    googlePlayInput.required = isAppStoreEmpty;
  }

  appStoreInput.addEventListener('input', updateRequiredStatus);
  googlePlayInput.addEventListener('input', updateRequiredStatus);

  updateRequiredStatus();
}

export function contactFormSelect() {
  const dropdownLinks = document.querySelectorAll('#custom-select-dropdown a');
  dropdownLinks.forEach((link) => {
    const text = link.textContent?.trim();
    if (text === 'Scale your App') {
      link.classList.add('is-scale-your-app');
    } else if (text === 'Sell your App') {
      link.classList.add('is-sell-your-app');
    } else if (text === 'Prototype your App') {
      link.classList.add('is-prototype-your-app');
    } else if (text === 'Join our Studio') {
      link.classList.add('is-join-our-studio');
    }
  });

  const buttonSelectors = [
    '#scale-your-app',
    '#sell-your-app',
    '#prototype-your-app',
    '#join-our-studio',
  ];
  const linkSelectors = [
    '.is-scale-your-app',
    '.is-sell-your-app',
    '.is-prototype-your-app',
    '.is-join-our-studio',
  ];

  buttonSelectors.forEach((buttonSelector, index) => {
    const button = document.querySelector(buttonSelector);
    const link = document.querySelector(linkSelectors[index]);

    if (button && link) {
      button.addEventListener('click', () => {
        (link as HTMLElement).click();
        setTimeout(() => {
          const dropdown = document.querySelector('#custom-select-dropdown');
          dropdown?.classList.remove('w--open');
          const contactTrigger = document.querySelector('#is-contact-trigger-full-name');
          (contactTrigger as HTMLElement).click();
        }, 250);
      });
    }
  });
}
