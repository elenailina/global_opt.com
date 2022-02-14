$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img scr="../icons/feed/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img scr="../icons/feed/right.png"></button>',
        
    });
  });