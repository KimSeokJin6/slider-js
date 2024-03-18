const sliderBlock = document.querySelector(".slider__block");
const sliderIndicators = document.querySelectorAll(".slider-indicator");
const sliderImages = document.querySelectorAll(".slider-image");
const sliderImagesBlock = document.querySelector(".slider__block-images");

const sliderButtonsPrevious = document.querySelector(
  ".slider__button-previous"
);
const sliderButtonNext = document.querySelector(".slider__button-next");

let sliderCount = 0;
let sliderWidth = sliderBlock.offsetWidth;

sliderButtonNext.addEventListener("click", nextImage);

sliderButtonsPrevious.addEventListener("click", previousImage);

window.addEventListener("resize", showSlide);

function showSlide() {
  sliderWidth = document.querySelector(".slider__block").offsetWidth;
  sliderImagesBlock.style.Width = sliderWidth * sliderImages.length + "px";
  sliderImages.forEach((item) => (item.style.width = sliderWidth + "px"));
  rollSlider();
}

showSlide();

function nextImage() {
  sliderCount++;
  if (sliderCount >= sliderImages.length) sliderCount = 0;
  rollSlider();
  thisSlide(sliderCount);
}
function previousImage() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = sliderImages.length - 1;
  rollSlider();
  thisSlide(sliderCount);
}
function rollSlider() {
  sliderImagesBlock.style.transform = `translateX(${
    -sliderCount * sliderWidth
  }px)`;
}

function thisSlide(index) {
  sliderIndicators.forEach((item) =>
    item.classList.remove("active__slider-indicator")
  );
  sliderIndicators[index].classList.add("active__slider-indicator");
}

sliderIndicators.forEach((item, index) => {
  item.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});
