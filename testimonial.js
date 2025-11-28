let currentIndex = 0;
const totalSlides = 6;

const slider = document.querySelector(".testimonial-slider");
const dots = document.querySelectorAll(".dot");

function updateSlider() {
    const move = -(currentIndex * 540); // card width + gap
    slider.style.transform = `translateX(${move}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex > totalSlides - 1) currentIndex = 0;

    updateSlider();
}

function goToSlide(index) {
    currentIndex = index;
    updateSlider();
}
