"use strict";

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  const slides = document.getElementsByClassName("mySlides");
  const captionText = document.getElementById("caption");
  const divars = document.getElementsByClassName("divars");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  captionText.innerHTML = divars[slideIndex-1].alt;
}

//////////////////////////////////////////////////////////////

const regForm = document.getElementById("regForm");
regForm.style.display = 'none';

// When the user clicks anywhere outside of the modal, close it!
const modal = document.getElementById('modalContainer');
window.onclick = function(event) {
  if (event.target == modal) {
    if (modal.style.display == "block") {
      modal.style.display = "none";
      regForm.style.display = "none";
    }
  }
}

function showForm() {
  if (regForm.style.display == "none") {
    regForm.style.display = "block";

    const modal = document.getElementById('modalContainer');
      modal.style.display = "block";

  } else {
    regForm.style.display = "none";
  }
}

