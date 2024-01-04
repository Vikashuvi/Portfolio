let slideIndex = 0;
showSlide(slideIndex);

function showSlide(n) {
  let slides = document.querySelectorAll('.slides img');
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}

function prevSlide() {
  showSlide(--slideIndex);
}

function nextSlide() {
  showSlide(++slideIndex);
}