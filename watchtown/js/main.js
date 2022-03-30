var galleryThumbs = new Swiper(".gallery-thumbs", {
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 4,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical'
});

var galleryMain = new Swiper(".gallery-main", {
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    thumbs: {
        swiper: galleryThumbs
    }
});

galleryMain.on('slideChangeTransitionStart', function () {
    galleryThumbs.slideTo(galleryMain.activeIndex);
});

galleryThumbs.on('transitionStart', function () {
    galleryMain.slideTo(galleryThumbs.activeIndex);
});

$(document).ready(function () {
    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".element").addClass("minus").removeClass("plus");
    });

    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".element").removeClass("plus").addClass("minus");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".element").removeClass("minus").addClass("plus");
    });
});