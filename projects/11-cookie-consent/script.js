const STORAGE_NAME = 'cookie-consent';

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close');
const consentBtn = document.querySelector('.consent');

closeBtn.addEventListener('click', () => {
  popup.remove();
});

consentBtn.addEventListener('click', () => {
  localStorage.setItem(STORAGE_NAME, true);
  document.cookie = `${STORAGE_NAME}=true;`;
  popup.remove();
});

function showPopup() {
  const storageData = localStorage.getItem(STORAGE_NAME);

  if (!storageData) {
    popup.classList.add('show');
  }
}

showPopup();
