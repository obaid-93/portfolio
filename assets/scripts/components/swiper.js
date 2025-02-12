import Swiper from 'swiper';
import {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper/modules';

document.addEventListener("DOMContentLoaded", function () {
    const weOfferSwiper = new Swiper(".we-offer--swiper", {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: "auto",
        loop: true,
        freeMode: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});