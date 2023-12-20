console.log('script is running')
const caSwiper = new Swiper('.ca-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'cube',
    cubeEffect: {
        slideShadows: false,
    },
    // If we need pagination
    pagination: {
        el: '.ca-swiper .swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.ca-swiper .swiper-button-next',
        prevEl: '.ca-swiper .swiper-button-prev',
    },
    speed: 500,
    // autoplay: true,
});



const testiSwiper = new Swiper('.testi-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 90,
        scale: 0,
        slideShadows: false,
    },
    // If we need pagination
    pagination: {
        el: '.testi-swiper .swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.testi-swiper .swiper-button-next',
        prevEl: '.testi-swiper .swiper-button-prev',
    },

    speed: 700
});

createOnScrollZoomAnimation(".testi-swiper");
