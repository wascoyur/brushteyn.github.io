$(function(){
    
    $('.product-categories-wrap').simpleLoadMore({
      item: '.product-categories-block',
      count: 6,
      itemsToLoad: 3,
      btnHTML: '.product-categories-btn'
    });
    
    $('.product-categories-mob-ul').simpleLoadMore({
      item: '.product-categories-mob-li',
      count: 10,
      itemsToLoad: 1,
      btnHTML: '.product-categories-btn-mob'
    });
    
    $('.category-wrap').simpleLoadMore({
      item: '.category-wrap-btn',
      count: 5,
      itemsToLoad: 1,
      btnHTML: '.category-wrap-btn__red'
    });
    
    $('.js-example-basic-single').select2();
    
    $('a[rel*=leanModal]').leanModal({
        top : 200, 
        overlay : 0.4, 
        closeButton: ".modal_close"
    });
    
    var wow = new WOW().init();
    
    $(".main-slider").owlCarousel({
      items : 1,
      dots: true,
      loop: true,
      mouseDrag: false,
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
    
    $(".popular-slider").owlCarousel({
      items : 1,
      dots: true,
      loop: true,
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
    
    $(".description-slider").owlCarousel({
      items : 1,
      dots: true,
      loop: true,
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
    
    $(".team-slider").owlCarousel({
      items : 1,
      dots: true,
      loop: true,
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
    
    $(".team-slider-mob").owlCarousel({
      items : 1,
      dots: true,
      loop: true,
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
    
    $(".simple-page-slider").owlCarousel({
      items : 1,
      dots: true,
      nav: true,
      navText: ["<img src='img/simple-page-slider-nav-left.png'>","<img src='img/simple-page-slider-nav-right.png'>"],
      loop: true,
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
    
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 30,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      thumbs: {
        swiper: galleryThumbs
      }
    });
    
    var c, currentScrollTop = 0,
       navbar = $('.navbar');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });
    
    $('.minus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value > 1) {
            value = value - 1;
        } else {
            value = 1;
        }

      $input.val(value);

    });
 
    $('.plus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value < 100) {
            value = value + 1;
        } else {
            value =100;
        }

        $input.val(value);
    });
    
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn, .dropdown-arrow, .dropdown-arrow img, .dropdown-icon')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function mobileFunction() {
  document.getElementById("mobileDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn, .dropdown-arrow, .dropdown-arrow img, .dropdown-icon')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




