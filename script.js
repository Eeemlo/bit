const flyingImage = document.querySelector('.flying-image');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');
const closeBtn = document.querySelector('.close-btn');

// När användaren klickar på den flygande bilden
flyingImage.addEventListener('click', () => {
  popup.classList.add('show');
  setTimeout(() => {
    popupContent.classList.add('show');
  }, 100);
});

// När användaren klickar på krysset stängs popupen
closeBtn.addEventListener('click', () => {
  popupContent.classList.remove('show');
  setTimeout(() => {
    popup.classList.remove('show');
  }, 500);
});
