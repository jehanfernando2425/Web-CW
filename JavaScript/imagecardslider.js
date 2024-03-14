const carousel = document.querySelector('.showcase__carousel--content');
const carouselWidth = carousel.offsetWidth;
const items = document.querySelectorAll('.showcase__carousel--item');
const itemCount = items.length;
const itemWidth = carouselWidth / itemCount;
let currentPosition = 0;

// Slide the carousel to the left
const slideLeft = () => {
  if (currentPosition < 0) {
    currentPosition += itemWidth;
    carousel.style.transform = `translateX(${currentPosition}px)`;
  }
};

// Slide the carousel to the right
const slideRight = () => {
  if (currentPosition > -carouselWidth + itemWidth) {
    currentPosition -= itemWidth;
    carousel.style.transform = `translateX(${currentPosition}px)`;
  }
};

// Add event listeners to the buttons
const leftButton = document.querySelector('.carousel__button--left');
const rightButton = document.querySelector('.carousel__button--right');
leftButton.addEventListener('click', slideLeft);
rightButton.addEventListener('click', slideRight);