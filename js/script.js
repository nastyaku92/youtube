svg4everybody();

const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1900: {
            slidesPerView: 6
        },
        1600: {
            slidesPerView: 5
        }, 
        1100: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 3
        },
        760: {
            slidesPerView: 2
        },        
    },
    // Navigation arrows
    navigation: {
        nextEl: '.slider-buttons1 .channel-button-next',
        prevEl: '.slider-buttons1 .channel-button-prev',
    },

});

const recommended = new Swiper('.channel-slider2', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1600: {
            slidesPerView: 3
        }, 
        1100: {
            slidesPerView: 2
        },      
    },
    // Navigation arrows
    navigation: {
        nextEl: '.slider-buttons2 .channel-button-next',
        prevEl: '.slider-buttons2 .channel-button-prev',
    },

});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
    mobileSearch.classList.toggle('is-open');
})

if(document.documentElement.scrollWidth <= 640){
    console.log('asdasd');
    console.log(swiper);
    swiper.destroy();
    recommended.destroy();
}