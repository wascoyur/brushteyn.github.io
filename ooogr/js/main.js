$('.subscription__form-input').focus(function () {
    $('.subscription__form-cancel').addClass('dblock');
});

$('.subscription__form-input').focusout(function () {
    $('.subscription__form-cancel').removeClass('dblock');
});

$('.subscription__form-btn').click(function () {
    event.preventDefault();
    $('.subscription__form-input').addClass('error')
    $('.subscription__form-error').addClass('dblock');
});

$('.page-aside__footer-mobile-arrow').click(function () {
    $('.page-aside__logo-mini').toggleClass('dnone');
    $('.page-aside__logo-big').toggleClass('dflex');
    $('.page-aside__logo span').toggleClass('dblock');
    $('.page-aside__footer-mobile-arrow img').toggleClass('rotate');
    $('.page-aside__profile-mobile').toggleClass('dnone');
    $('.page-aside__profile').toggleClass('dflex');
    $('.page-aside__info').toggleClass('dblock');
    $('.page-aside__footer-mobile-img').toggleClass('dnone');
    $('.page-aside__footer-mobile-text').toggleClass('dnone');
    $('.page-aside__footer').toggleClass('dflex');
    $('.page-aside__footer-mobile').toggleClass('mtunset');
    $('.page-aside').toggleClass('w240');
    $('.page-aside__nav li a').toggleClass('fz16');
    $('.page-aside__nav li img').toggleClass('mr6');
});

$('.info__header-nav-menu').click(function () {
    $('.info__header-gumb').addClass('dflex');
    $('body').addClass('overflow');
});

$('.info__header-gumb-top-exit').click(function () {
    $('.info__header-gumb').removeClass('dflex');
    $('body').removeClass('overflow');
});