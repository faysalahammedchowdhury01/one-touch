// Sticky Nav
const navbar = document.querySelector('#header-section .navbar');
window.onscroll = function () {
    stickyNav();
};
function stickyNav() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('sticky-nav');
    } else {
        navbar.classList.remove('sticky-nav');
    }
}

// Mobile Menu Icon Animation
const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('toggle');
});

// Device Card Slider
const deviceCardSlider = new Swiper('.device-card .swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-next-button',
        prevEl: '.swiper-prev-button',
    },
});

// Video Play OnClick
const videoPlayIcon = document.querySelector('.play-icon');
videoPlayIcon.addEventListener('click', () => {
    const video = document.querySelector('.video');
    video.style.zIndex = 1;
    video.style.opacity = 1;
    video.play();
    const videoImage = document.querySelector('.video-img');
    videoImage.style.display = 'none';
    videoPlayIcon.style.display = 'none';
});

// Swiper JS Testimonial Carousel
const testimonialSlider = new Swiper('.testimonial-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 50,
        },
        768: {
            slidesPerView: 2,
            spaceBetweenSlides: 50,
        },
        1200: {
            slidesPerView: 3,
            spaceBetweenSlides: 30,
        },
    },
});
