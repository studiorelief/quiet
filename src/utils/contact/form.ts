export function contactFormSelect() {
  const selectElement = document.getElementById(
    'is-contact-trigger-selection'
  ) as HTMLSelectElement;

  if (!selectElement) return;

  const optionMap: { [key: string]: number } = {
    'scale-your-app': 0,
    'sell-your-app': 1,
    'prototype-your-app': 2,
    'join-our-studio': 3,
  };

  const triggerElements = Object.keys(optionMap).map((id) => document.getElementById(id));
  const headingElement = document.querySelector('[dynamic=heading-change]');

  triggerElements.forEach((element) => {
    if (element) {
      element.addEventListener('click', () => {
        selectElement.selectedIndex = optionMap[element.id];
        if (headingElement) {
          headingElement.textContent = 'A question for us ?';
        }
      });
    }
  });
}

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
