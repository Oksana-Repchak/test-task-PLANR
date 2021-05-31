'use strict';
let slideInd = 1;
showSlidesVorteile(slideInd);

function plusSlidesVorteile(n) {
    showSlidesVorteile((slideInd += n));
}

function currentSlide(n) {
    showSlidesVorteile((slideInd = n));
}

function showSlidesVorteile(n) {
  const slides = document.getElementsByClassName("slides-vorteile");

  if (n > slides.length) {
    slideInd = 1;
  }

  if (n < 1) {
    slideInd = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideInd - 1].style.display = "flex";
}
