$(document).ready(function () {

  $('.sale-hits-slider').slick({
    speed: 300,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slider-btn slider-left-btn"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slider-btn slider-right-btn"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>',    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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

  $('.last-news-slider').slick({
    speed: 300,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slider-btn slider-left-btn"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button class="slider-btn slider-right-btn"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>',    
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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
});