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
    }
  });

  const buttonSelectors = [
    '#scale-your-app',
    '#sell-your-app',
    '#sell-your-app-2',
    '#sell-your-app-3',
    '#prototype-your-app',
  ];
  const linkSelectors = [
    '.is-scale-your-app',
    '.is-sell-your-app',
    '.is-sell-your-app',
    '.is-sell-your-app',
    '.is-prototype-your-app',
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
        }, 250);
      });
    }
  });
}

export function placeholderSelect() {
  const selectCustomText = document.querySelector('#fs-selectcustom-text-custom') as HTMLElement;
  const selectCustomPlatform = document.querySelector(
    '#fs-selectcustom-text-custom-plateform'
  ) as HTMLElement;

  const updateOpacity = (element: HTMLElement, defaultText: string) => {
    if (element) {
      if (element.textContent?.trim() === defaultText) {
        element.style.opacity = '0.5';
      } else {
        element.style.opacity = '0.8';
      }
    }
  };

  if (selectCustomText) {
    // Initial check
    updateOpacity(selectCustomText, 'Select option');

    // Add event listener to check for changes
    selectCustomText.addEventListener('DOMSubtreeModified', () =>
      updateOpacity(selectCustomText, 'Select option')
    );
  }

  if (selectCustomPlatform) {
    // Initial check
    updateOpacity(selectCustomPlatform, 'Choose your plateform');

    // Add event listener to check for changes
    selectCustomPlatform.addEventListener('DOMSubtreeModified', () =>
      updateOpacity(selectCustomPlatform, 'Choose your plateform')
    );
  }
}

export function joinStudioFormSelect() {
  const dropdownLinks = document.querySelectorAll('#static-custom-select-dropdown a');
  dropdownLinks.forEach((link) => {
    const text = link.textContent?.trim();
    if (text === 'Join our Studio') {
      link.classList.add('is-join-our-studio');
    }
  });

  const buttonSelectors = ['#join-our-studio'];
  const linkSelectors = ['.is-join-our-studio'];

  buttonSelectors.forEach((buttonSelector, index) => {
    const button = document.querySelector(buttonSelector);
    const link = document.querySelector(linkSelectors[index]);

    if (button && link) {
      button.addEventListener('click', () => {
        (link as HTMLElement).click();
        setTimeout(() => {
          const dropdown = document.querySelector('#static-custom-select-dropdown');
          dropdown?.classList.remove('w--open');
        }, 50);
      });
    }
  });
}
