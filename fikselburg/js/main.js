const swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return current + ' ИЗ ' + (total);
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper2 = new Swiper('.products-slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        480: {
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});

const swiper3 = new Swiper('.examples-slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        480: {
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
});

const swiper4 = new Swiper(".main-slider", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
        clickable: true,
    },
});

const header = document.getElementById("header");
const body = document.querySelector("body");
const gray = header.offsetTop;

function fixedHeader() {
    if (window.pageYOffset > gray) {
        header.classList.add("header_scroll");
    } else {
        header.classList.remove("header_scroll");
    }
};

window.onscroll = function () {
    fixedHeader()
};

$(function () {
    $('.menu__btn').click(function () {
        $('body').toggleClass('overflow-y');
    });
});

function initMap() {
    const uluru = {
        lat: 59.863165,
        lng: 30.475876
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

$(document).on('click', '#open-modal-btn', function (e) {
    e.preventDefault();
    $('#exampleModal').arcticmodal();
});

[1, 2, 3, 4, 5, 6].forEach(function (index) {
    var circle = new ProgressBar.Circle('.canvas-' + index, {
        strokeWidth: 2,
        duration: 3000,
        color: '#eee',
        trailColor: 'transparent',
        trailWidth: 2,
        svgStyle: null
    });

    circle.animate(0.75);
});