// Carrucel
let slideIndex = 0;

function mostrarSlide(index) {
    const slides = document.getElementsByClassName("slide");

    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

function cambiarSlide(n) {
    mostrarSlide(slideIndex += n);
}

document.addEventListener("DOMContentLoaded", function () {
    mostrarSlide(slideIndex);
    setInterval(function () {
        cambiarSlide(1);
    }, 3000);
});

