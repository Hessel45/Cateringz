let slideIndex = 0;
showTestimonial(slideIndex);

function changeTestimonial(n) {
    showTestimonial(slideIndex += n);
}

function showTestimonial(n) {
    let testimonials = document.getElementsByClassName("testimonial");
    if (n >= testimonials.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = testimonials.length - 1;
    }
    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }
    testimonials[slideIndex].style.display = "block";
}