$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items : 1,
      nav : true,
      responsiveClass:true,
      responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1320:{
            items:1,
            nav:true,
            loop:false
        }
    }
  });
});