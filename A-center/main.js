$(function(){
    
    $('.js-example-basic-single').select2();
    
    var wow = new WOW().init();
    
    
    /**
     * Owl Carousel for header home page.
     */
    
    $(".header-slider").owlCarousel({
      items : 1,
      dots: true,
      loop: true,
      animateIn: 'slideInUp',
      animateOut: 'slideOutUp',
      autoplay: true,
      autoplayTimeout: 8000,
      mouseDrag: false,
      responsiveClass: true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1320:{
            items:1
        },
        1920:{
            items:1
        }
    }
  });
    
    /**
     * Owl Carousel for home page.
     */
    
    $(".main-slider").owlCarousel({
      items : 1,
      dots: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 8000,
      autoplayHoverPause: true,
      stagePadding: 150,
      responsiveClass: true,
      responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        600:{
            items:1,
            stagePadding: 0,
            margin: 50
        },
        1320:{
            items:1
        },
        1920:{
            items:1,
            stagePadding: 300
        }
    }
  });
    
    /**
     * Owl Carousel for navigation page.
     */
    
    $(".navigation-slider").owlCarousel({
      items : 1,
      dots: false,
      navs: false,
      loop: true,
      video:true,
      merge: true,
      lazyLoad: true,
      autoplay: true,
      autoplayTimeout: 8000,
      autoplayHoverPause: true,
      stagePadding: 200,
      responsiveClass: true,
      responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        600:{
            items:1
        },
        1320:{
            items:1
        },
        1920:{
            items:1,
            stagePadding: 500
        }
    }
  });
    
    /**
     * Owl Carousel for about page.
     */
    
    $(".about-command-slider").owlCarousel({
      items : 1,
      dots: false,
      navs: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 8000,
      autoplayHoverPause: true,
      stagePadding: 280,
      responsiveClass: true,
      responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        600:{
            items:2,
            stagePadding: 0
        },
        1320:{
            items:1
        },
        1920:{
            items:1,
            stagePadding: 550
        }
    }
  });
    
    /**
     * Owl Carousel for about page.
     */
    
    $(".partner-slider").owlCarousel({
      items : 1,
      dots: true,
      margin: 10,
      loop: true,
      autoplay: true,
      autoplayTimeout: 8000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1320:{
            items:1
        },
        1920:{
            items:1
        }
    }
  });
});

var prevScrollPos = window.pageYOffset;

$(window).on('scroll', function(){
    var currentScrollPos = window.pageYOffset,
        nav = $('#navbar'),
        gmb = $('.menu__btn');

    if (prevScrollPos > currentScrollPos) {
        nav.css('top', '0px');
        gmb.css('background-color', 'rgba(32, 60, 144, 0.2)').css('top', '0px').css('margin-top', '30px');
    } else {
        nav.css('top', '-80px');
        gmb.css('background-color', 'rgba(32, 60, 144, 0.15)').css('top', '-80px');
    }

    if(currentScrollPos == 0) {
     document.getElementById('navbar').style.backgroundColor = "";
     document.getElementById('logo').style.backgroundImage = "";
     $('.header-top-li-a').css('color', '');
     $('.main-header .select2-selection__rendered').css('color', '').css('background-color', '').css('border', '').css('border-radius', '');
     $('.header-top-button').css('background-color', '').css('border', '');
     $('.header-top-button a').css('color', '');
     $('.header-top-li a::after').css('border-bottom', '');
    } else {
     document.getElementById('navbar').style.backgroundColor = "#fff";
     document.getElementById('logo').style.backgroundImage = "url(img/header-logo.svg)";
     $('.header-top-li-a').css('color', '#000');
     $('.main-header .select2-selection__rendered').css('color', 'black').css('background-color', '#DDE2EE').css('border', '2px solid #C0C9E0').css('border-radius', '25px');
     $('.header-top-button').css('background-color', '#F9FAFC').css('border', '1px solid #DDE2EE');
     $('.header-top-button a').css('color', '#203C90');
     $('.header-top-li a::after').css('border-bottom', '1px solid #203C90');
    }

    prevScrollPos = currentScrollPos;
});

$("#news-content").infini_scroll({
  totalPages: 0,
  url: "news-ajax.html",
  loadingElement  : '#J_loading'
});

$("#service-content").infini_scroll({
  totalPages: 0,
  url: "service-ajax.html",
  loadingElement  : '#J_loading'
});

$("#mag-content").infini_scroll({
  totalPages: 0,
  url: "mag-ajax.html",
  loadingElement  : '#J_loading'
});




