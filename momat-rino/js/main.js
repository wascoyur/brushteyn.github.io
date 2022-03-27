$(document).ready(function () {
    $('.main-slider').slick({});
    $('.info-slider').slick({});
    $('.allergy-slider-year').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    $('.allergy-slider-season').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    $('.play-btn').on('click', function () {
        $('iframe').css('display', 'block')
    });

    $('.forms-allergy-btn-year').on('click', function () {
        $('.allergy-slider-season').css('height', '0').css('visibility', 'hidden'),
            $('.allergy-slider-year').css('height', 'auto').css('visibility', 'inherit')
    });

    $('.forms-allergy-btn-season').on('click', function () {
        $('.allergy-slider-year').css('height', '0').css('visibility', 'hidden'),
            $('.allergy-slider-season').css('height', 'auto').css('visibility', 'inherit')
    });

    $('.news__inner').simpleLoadMore({
        item: '.news__item',
        count: 9,
        itemsToLoad: 3,
        btnHTML: '.load-more-btn'
    });

});
