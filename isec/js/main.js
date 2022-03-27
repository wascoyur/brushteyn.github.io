window.onscroll = function () {
    fixedHeader()
};

var header = document.getElementById("header");
var gray = header.offsetTop;

function fixedHeader() {
    if (window.pageYOffset > gray) {
        header.classList.add("gray");
    } else {
        header.classList.remove("gray");
    }
}

$(function () {
    $('.header__hamb-icon').click(function () {
        $(this).toggleClass('change');
        $('.header__hamb-nav').toggleClass('dblock');
    });
});

$(document).ready(function () {
    $('.affiliates-slider').slick({
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: '260px',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '180px'
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '60px'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '0'
                }
            }
        ]
    });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}