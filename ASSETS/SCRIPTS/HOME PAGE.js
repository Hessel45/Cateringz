document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let slideIndex = 0;

    // Function to move the slider to a specific index
    function moveToSlide(index) {
        if (index < 0) {
            slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            slideIndex = 0;
        } else {
            slideIndex = index;
        }
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    // Next button click event
    nextBtn.addEventListener("click", function () {
        moveToSlide(slideIndex + 1);
    });

    // Previous button click event
    prevBtn.addEventListener("click", function () {
        moveToSlide(slideIndex - 1);
    });
});


