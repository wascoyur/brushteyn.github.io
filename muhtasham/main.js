$(function () {
    
    $('.house-plan-block-inner-dot-btn-1').on('click', function () {
        $('.block-house-modal-1').css('display', 'block');
        $('.shadow').css('display', 'block');
        $('body').css('overflow', 'hidden')
    });
    
    $('.house-plan-block-inner-dot-btn-2').on('click', function () {
        $('.block-house-modal-2').css('display', 'block');
        $('.shadow').css('display', 'block');
        $('body').css('overflow', 'hidden')
    });
    
    $('.house-plan-block-inner-dot-btn-3').on('click', function () {
        $('.block-house-modal-3').css('display', 'block');
        $('.shadow').css('display', 'block');
        $('body').css('overflow', 'hidden')
    });
    
    $('.house-plan-block-inner-dot-btn-4').on('click', function () {
        $('.block-house-modal-4').css('display', 'block');
        $('.shadow').css('display', 'block');
        $('body').css('overflow', 'hidden')
    });
    
    $('.house-plan-block-inner-dot-btn-5').on('click', function () {
        $('.block-house-modal-5').css('display', 'block');
        $('.shadow').css('display', 'block');
        $('body').css('overflow', 'hidden')
    });
    
    $('.house-plan-block-inner-dot-btn-6').on('click', function () {
        $('.block-house-modal-6').css('display', 'block');
        $('.shadow').css('display', 'block');
        $('body').css('overflow', 'hidden')
    });

    $('.cancel').on('click', function () {
        $('.block-house-modal').css('display', 'none');
        $('.shadow').css('display', 'none');
        $('body').css('overflow', '')
    });



    $('.js-example-basic-single').select2();

    /**
     * WOW plugin initialization.
     */

    var wow = new WOW().init();

    /**
     * Owl Carousel for home page.
     */

    $(".header-slider").owlCarousel({
        items: 1,
        loop: true,
        animateIn: 'slideInUp',
        animateOut: 'slideOutUp',
        mouseDrag: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1320: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });

    /* Gallery-slider */

    $(".container-gallery-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1320: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });

    /* About-Gallery-slider */

    $(".about-container-gallery-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1320: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });

    /**
     * Owl Carousel for about block.
     */

    $(".about-container-finished-object").owlCarousel({
        items: 6,
        dots: false,
        autoWidth: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1320: {
                items: 3,
                nav: false
            },
            1440: {
                items: 4,
                nav: false
            },
            1920: {
                items: 6,
                nav: false
            }
        }
    });


});

var prevScrollPos = window.pageYOffset;

$(window).on('scroll', function () {
    var currentScrollPos = window.pageYOffset,
        navLeft = $('#navbar-left'),
        navRight = $('#navbar-right');

    if (prevScrollPos > currentScrollPos) {
        navLeft.css('top', '0px'),
            navRight.css('top', '0px');
    } else {
        navLeft.css('top', '-100px'),
            navRight.css('top', '-100px');
    }

    if (currentScrollPos == 0) {
        $('#navbar-left').css('background-color', '');
    } else {
        $('#navbar-left').css('background-color', 'rgba(0, 0, 0, 0.7)');
    }


    prevScrollPos = currentScrollPos;
});


$(window).on('load', function () {
    setTimeout(function () {
        $('.loader').fadeOut('slow', function () {});
    }, 2000);
});

$('.navbar-mini-map-dot-1').hover(
    function () {
        $('.navbar-img-1').css('display', 'block'),
            $('.navbar-img-0').css('display', 'none');
    },
    function () {
        $('.navbar-img-1').css('display', 'none'),
            $('.navbar-img-0').css('display', 'block');
    }
);

$('.navbar-mini-map-dot-2').hover(
    function () {
        $('.navbar-img-2').css('display', 'block'),
            $('.navbar-img-0').css('display', 'none');
    },
    function () {
        $('.navbar-img-2').css('display', 'none'),
            $('.navbar-img-0').css('display', 'block');
    }
);

$('.navbar-mini-map-dot-3').hover(
    function () {
        $('.navbar-img-3').css('display', 'block'),
            $('.navbar-img-0').css('display', 'none');
    },
    function () {
        $('.navbar-img-3').css('display', 'none'),
            $('.navbar-img-0').css('display', 'block');
    }
);

$('.navbar-mini-map-dot-4').hover(
    function () {
        $('.navbar-img-4').css('display', 'block'),
            $('.navbar-img-0').css('display', 'none');
    },
    function () {
        $('.navbar-img-4').css('display', 'none'),
            $('.navbar-img-0').css('display', 'block');
    }
);

$('.navbar-mini-map-dot-5').hover(
    function () {
        $('.navbar-img-5').css('display', 'block'),
            $('.navbar-img-0').css('display', 'none');
    },
    function () {
        $('.navbar-img-5').css('display', 'none'),
            $('.navbar-img-0').css('display', 'block');
    }
);

$('.navbar-mini-map-dot-6').hover(
    function () {
        $('.navbar-img-6').css('display', 'block'),
            $('.navbar-img-0').css('display', 'none');
    },
    function () {
        $('.navbar-img-6').css('display', 'none'),
            $('.navbar-img-0').css('display', 'block');
    }
);

$('.navbar-mini-map-dot-7').hover(
    function () {
        $('.navbar-img-7').css('display', 'block'),
            $('.navbar-img-0').css('display', 'none');
    },
    function () {
        $('.navbar-img-7').css('display', 'none'),
            $('.navbar-img-0').css('display', 'block');
    }
);

$('.navbar-mini-map-dot-8').hover(
    function () {
        $('.navbar-img-8').css('display', 'block'),
            $('.navbar-img-0').css('display', 'none');
    },
    function () {
        $('.navbar-img-8').css('display', 'none'),
            $('.navbar-img-0').css('display', 'block');
    }
);

$('.apartments-dot-1').hover(
    function () {
        $('.apartments-block-img-1').css('display', 'block');
    },
    function () {
        $('.apartments-block-img-1').css('display', 'none');
    }
);

$('.apartments-dot-2').hover(
    function () {
        $('.apartments-block-img-2').css('display', 'block');
    },
    function () {
        $('.apartments-block-img-2').css('display', 'none');
    }
);

$('.apartments-dot-3').hover(
    function () {
        $('.apartments-block-img-3').css('display', 'block');
    },
    function () {
        $('.apartments-block-img-3').css('display', 'none');
    }
);

$('.apartments-dot-4').hover(
    function () {
        $('.apartments-block-img-4').css('display', 'block');
    },
    function () {
        $('.apartments-block-img-4').css('display', 'none');
    }
);

$('.apartments-dot-5').hover(
    function () {
        $('.apartments-block-img-5').css('display', 'block');
    },
    function () {
        $('.apartments-block-img-5').css('display', 'none');
    }
);

$('.apartments-dot-6').hover(
    function () {
        $('.apartments-block-img-6').css('display', 'block');
    },
    function () {
        $('.apartments-block-img-6').css('display', 'none');
    }
);

$('.apartments-dot-7').hover(
    function () {
        $('.apartments-block-img-7').css('display', 'block');
    },
    function () {
        $('.apartments-block-img-7').css('display', 'none');
    }
);

$('.apartments-dot-8').hover(
    function () {
        $('.apartments-block-img-8').css('display', 'block');
    },
    function () {
        $('.apartments-block-img-8').css('display', 'none');
    }
);

$('.house-selection-1-dot-1').hover(
    function () {
        $('.house-selection-1-block-img-1').css('display', 'block');
    },
    function () {
        $('.house-selection-1-block-img-1').css('display', 'none');
    }
);

$('.house-selection-1-dot-2').hover(
    function () {
        $('.house-selection-1-block-img-2').css('display', 'block');
    },
    function () {
        $('.house-selection-1-block-img-2').css('display', 'none');
    }
);

$('.house-selection-1-dot-3').hover(
    function () {
        $('.house-selection-1-block-img-3').css('display', 'block');
    },
    function () {
        $('.house-selection-1-block-img-3').css('display', 'none');
    }
);

$('.house-selection-1-dot-4').hover(
    function () {
        $('.house-selection-1-block-img-4').css('display', 'block');
    },
    function () {
        $('.house-selection-1-block-img-4').css('display', 'none');
    }
);

$('.house-selection-1-dot-5').hover(
    function () {
        $('.house-selection-1-block-img-5').css('display', 'block');
    },
    function () {
        $('.house-selection-1-block-img-5').css('display', 'none');
    }
);

$('.house-selection-1-dot-6').hover(
    function () {
        $('.house-selection-1-block-img-6').css('display', 'block');
    },
    function () {
        $('.house-selection-1-block-img-6').css('display', 'none');
    }
);

$('.house-selection-1-dot-7').hover(
    function () {
        $('.house-selection-1-block-img-7').css('display', 'block');
    },
    function () {
        $('.house-selection-1-block-img-7').css('display', 'none');
    }
);

$('.house-selection-1-dot-8').hover(
    function () {
        $('.house-selection-1-block-img-8').css('display', 'block');
    },
    function () {
        $('.house-selection-1-block-img-8').css('display', 'none');
    }
);

$('.house-selection-2-dot-1').hover(
    function () {
        $('.house-selection-2-block-img-1').css('display', 'block');
    },
    function () {
        $('.house-selection-2-block-img-1').css('display', 'none');
    }
);

$('.house-selection-2-dot-2').hover(
    function () {
        $('.house-selection-2-block-img-2').css('display', 'block');
    },
    function () {
        $('.house-selection-2-block-img-2').css('display', 'none');
    }
);

$('.house-selection-2-dot-3').hover(
    function () {
        $('.house-selection-2-block-img-3').css('display', 'block');
    },
    function () {
        $('.house-selection-2-block-img-3').css('display', 'none');
    }
);

$('.house-selection-2-dot-4').hover(
    function () {
        $('.house-selection-2-block-img-4').css('display', 'block');
    },
    function () {
        $('.house-selection-2-block-img-4').css('display', 'none');
    }
);

$('.house-selection-2-dot-5').hover(
    function () {
        $('.house-selection-2-block-img-5').css('display', 'block');
    },
    function () {
        $('.house-selection-2-block-img-5').css('display', 'none');
    }
);

$('.house-selection-2-dot-6').hover(
    function () {
        $('.house-selection-2-block-img-6').css('display', 'block');
    },
    function () {
        $('.house-selection-2-block-img-6').css('display', 'none');
    }
);

$('.house-selection-2-dot-7').hover(
    function () {
        $('.house-selection-2-block-img-7').css('display', 'block');
    },
    function () {
        $('.house-selection-2-block-img-7').css('display', 'none');
    }
);

$('.house-selection-2-dot-8').hover(
    function () {
        $('.house-selection-2-block-img-8').css('display', 'block');
    },
    function () {
        $('.house-selection-2-block-img-8').css('display', 'none');
    }
);

$('.house-selection-3-dot-1').hover(
    function () {
        $('.house-selection-3-block-img-1').css('display', 'block');
    },
    function () {
        $('.house-selection-3-block-img-1').css('display', 'none');
    }
);

$('.house-selection-3-dot-2').hover(
    function () {
        $('.house-selection-3-block-img-2').css('display', 'block');
    },
    function () {
        $('.house-selection-3-block-img-2').css('display', 'none');
    }
);

$('.house-selection-3-dot-3').hover(
    function () {
        $('.house-selection-3-block-img-3').css('display', 'block');
    },
    function () {
        $('.house-selection-3-block-img-3').css('display', 'none');
    }
);

$('.house-selection-3-dot-4').hover(
    function () {
        $('.house-selection-3-block-img-4').css('display', 'block');
    },
    function () {
        $('.house-selection-3-block-img-4').css('display', 'none');
    }
);

$('.house-selection-3-dot-5').hover(
    function () {
        $('.house-selection-3-block-img-5').css('display', 'block');
    },
    function () {
        $('.house-selection-3-block-img-5').css('display', 'none');
    }
);

$('.house-selection-3-dot-6').hover(
    function () {
        $('.house-selection-3-block-img-6').css('display', 'block');
    },
    function () {
        $('.house-selection-3-block-img-6').css('display', 'none');
    }
);

$('.house-selection-3-dot-7').hover(
    function () {
        $('.house-selection-3-block-img-7').css('display', 'block');
    },
    function () {
        $('.house-selection-3-block-img-7').css('display', 'none');
    }
);

$('.house-selection-3-dot-8').hover(
    function () {
        $('.house-selection-3-block-img-8').css('display', 'block');
    },
    function () {
        $('.house-selection-3-block-img-8').css('display', 'none');
    }
);

$('.house-selection-7-dot-1').hover(
    function () {
        $('.house-selection-7-block-img-1').css('display', 'block');
    },
    function () {
        $('.house-selection-7-block-img-1').css('display', 'none');
    }
);

$('.house-selection-7-dot-2').hover(
    function () {
        $('.house-selection-7-block-img-2').css('display', 'block');
    },
    function () {
        $('.house-selection-7-block-img-2').css('display', 'none');
    }
);

$('.house-selection-7-dot-3').hover(
    function () {
        $('.house-selection-7-block-img-3').css('display', 'block');
    },
    function () {
        $('.house-selection-7-block-img-3').css('display', 'none');
    }
);

$('.house-selection-7-dot-4').hover(
    function () {
        $('.house-selection-7-block-img-4').css('display', 'block');
    },
    function () {
        $('.house-selection-7-block-img-4').css('display', 'none');
    }
);

$('.house-selection-7-dot-5').hover(
    function () {
        $('.house-selection-7-block-img-5').css('display', 'block');
    },
    function () {
        $('.house-selection-7-block-img-5').css('display', 'none');
    }
);

$('.house-selection-7-dot-6').hover(
    function () {
        $('.house-selection-7-block-img-6').css('display', 'block');
    },
    function () {
        $('.house-selection-7-block-img-6').css('display', 'none');
    }
);

$('.house-selection-7-dot-7').hover(
    function () {
        $('.house-selection-7-block-img-7').css('display', 'block');
    },
    function () {
        $('.house-selection-7-block-img-7').css('display', 'none');
    }
);

$('.house-selection-7-dot-8').hover(
    function () {
        $('.house-selection-7-block-img-8').css('display', 'block');
    },
    function () {
        $('.house-selection-7-block-img-8').css('display', 'none');
    }
);

$('.house-selection-4-dot-1').hover(
    function () {
        $('.house-selection-4-block-img-1').css('display', 'block');
    },
    function () {
        $('.house-selection-4-block-img-1').css('display', 'none');
    }
);

$('.house-selection-4-dot-2').hover(
    function () {
        $('.house-selection-4-block-img-2').css('display', 'block');
    },
    function () {
        $('.house-selection-4-block-img-2').css('display', 'none');
    }
);

$('.house-selection-4-dot-3').hover(
    function () {
        $('.house-selection-4-block-img-3').css('display', 'block');
    },
    function () {
        $('.house-selection-4-block-img-3').css('display', 'none');
    }
);

$('.house-selection-4-dot-4').hover(
    function () {
        $('.house-selection-4-block-img-4').css('display', 'block');
    },
    function () {
        $('.house-selection-4-block-img-4').css('display', 'none');
    }
);

$('.house-selection-4-dot-5').hover(
    function () {
        $('.house-selection-4-block-img-5').css('display', 'block');
    },
    function () {
        $('.house-selection-4-block-img-5').css('display', 'none');
    }
);

$('.house-selection-4-dot-6').hover(
    function () {
        $('.house-selection-4-block-img-6').css('display', 'block');
    },
    function () {
        $('.house-selection-4-block-img-6').css('display', 'none');
    }
);

$('.house-selection-4-dot-7').hover(
    function () {
        $('.house-selection-4-block-img-7').css('display', 'block');
    },
    function () {
        $('.house-selection-4-block-img-7').css('display', 'none');
    }
);

$('.house-selection-4-dot-8').hover(
    function () {
        $('.house-selection-4-block-img-8').css('display', 'block');
    },
    function () {
        $('.house-selection-4-block-img-8').css('display', 'none');
    }
);

$('.house-selection-5-dot-1').hover(
    function () {
        $('.house-selection-5-block-img-1').css('display', 'block');
    },
    function () {
        $('.house-selection-5-block-img-1').css('display', 'none');
    }
);

$('.house-selection-5-dot-2').hover(
    function () {
        $('.house-selection-5-block-img-2').css('display', 'block');
    },
    function () {
        $('.house-selection-5-block-img-2').css('display', 'none');
    }
);

$('.house-selection-5-dot-3').hover(
    function () {
        $('.house-selection-5-block-img-3').css('display', 'block');
    },
    function () {
        $('.house-selection-5-block-img-3').css('display', 'none');
    }
);

$('.house-selection-5-dot-4').hover(
    function () {
        $('.house-selection-5-block-img-4').css('display', 'block');
    },
    function () {
        $('.house-selection-5-block-img-4').css('display', 'none');
    }
);

$('.house-selection-5-dot-5').hover(
    function () {
        $('.house-selection-5-block-img-5').css('display', 'block');
    },
    function () {
        $('.house-selection-5-block-img-5').css('display', 'none');
    }
);

$('.house-selection-5-dot-6').hover(
    function () {
        $('.house-selection-5-block-img-6').css('display', 'block');
    },
    function () {
        $('.house-selection-5-block-img-6').css('display', 'none');
    }
);

$('.house-selection-5-dot-7').hover(
    function () {
        $('.house-selection-5-block-img-7').css('display', 'block');
    },
    function () {
        $('.house-selection-5-block-img-7').css('display', 'none');
    }
);

$('.house-selection-5-dot-8').hover(
    function () {
        $('.house-selection-5-block-img-8').css('display', 'block');
    },
    function () {
        $('.house-selection-5-block-img-8').css('display', 'none');
    }
);

$('.house-selection-6-dot-1').hover(
    function () {
        $('.house-selection-6-block-img-1').css('display', 'block');
    },
    function () {
        $('.house-selection-6-block-img-1').css('display', 'none');
    }
);

$('.house-selection-6-dot-2').hover(
    function () {
        $('.house-selection-6-block-img-2').css('display', 'block');
    },
    function () {
        $('.house-selection-6-block-img-2').css('display', 'none');
    }
);

$('.house-selection-6-dot-3').hover(
    function () {
        $('.house-selection-6-block-img-3').css('display', 'block');
    },
    function () {
        $('.house-selection-6-block-img-3').css('display', 'none');
    }
);

$('.house-selection-6-dot-4').hover(
    function () {
        $('.house-selection-6-block-img-4').css('display', 'block');
    },
    function () {
        $('.house-selection-6-block-img-4').css('display', 'none');
    }
);

$('.house-selection-6-dot-5').hover(
    function () {
        $('.house-selection-6-block-img-5').css('display', 'block');
    },
    function () {
        $('.house-selection-6-block-img-5').css('display', 'none');
    }
);

$('.house-selection-6-dot-6').hover(
    function () {
        $('.house-selection-6-block-img-6').css('display', 'block');
    },
    function () {
        $('.house-selection-6-block-img-6').css('display', 'none');
    }
);

$('.house-selection-6-dot-7').hover(
    function () {
        $('.house-selection-6-block-img-7').css('display', 'block');
    },
    function () {
        $('.house-selection-6-block-img-7').css('display', 'none');
    }
);

$('.house-selection-6-dot-8').hover(
    function () {
        $('.house-selection-6-block-img-8').css('display', 'block');
    },
    function () {
        $('.house-selection-6-block-img-8').css('display', 'none');
    }
);

$('.house-selection-8-dot-1').hover(
    function () {
        $('.house-selection-8-block-img-1').css('display', 'block');
    },
    function () {
        $('.house-selection-8-block-img-1').css('display', 'none');
    }
);

$('.house-selection-8-dot-2').hover(
    function () {
        $('.house-selection-8-block-img-2').css('display', 'block');
    },
    function () {
        $('.house-selection-8-block-img-2').css('display', 'none');
    }
);

$('.house-selection-8-dot-3').hover(
    function () {
        $('.house-selection-8-block-img-3').css('display', 'block');
    },
    function () {
        $('.house-selection-8-block-img-3').css('display', 'none');
    }
);

$('.house-selection-8-dot-4').hover(
    function () {
        $('.house-selection-8-block-img-4').css('display', 'block');
    },
    function () {
        $('.house-selection-8-block-img-4').css('display', 'none');
    }
);

$('.house-selection-8-dot-5').hover(
    function () {
        $('.house-selection-8-block-img-5').css('display', 'block');
    },
    function () {
        $('.house-selection-8-block-img-5').css('display', 'none');
    }
);

$('.house-selection-8-dot-6').hover(
    function () {
        $('.house-selection-8-block-img-6').css('display', 'block');
    },
    function () {
        $('.house-selection-8-block-img-6').css('display', 'none');
    }
);

$('.house-selection-8-dot-7').hover(
    function () {
        $('.house-selection-8-block-img-7').css('display', 'block');
    },
    function () {
        $('.house-selection-8-block-img-7').css('display', 'none');
    }
);

$('.house-selection-8-dot-8').hover(
    function () {
        $('.house-selection-8-block-img-8').css('display', 'block');
    },
    function () {
        $('.house-selection-8-block-img-8').css('display', 'none');
    }
);
