$(document).ready(function() {
    $(window).on('scroll', function() {
        if($(window).scrollTop()) {
            $('header').addClass('fixed-menu');
            $('.menu-items a').addClass('color');
            $('.logo-img').css('display', 'none');
            $('.logo-link').css('display', 'block');
            $('header').css('padding', '14px 40px');
        }
        else {
            $('header').removeClass('fixed-menu');
            $('.menu-items a').removeClass('color');
            $('.logo-img').css('display', 'block');
            $('.logo-link').css('display', 'none');
            $('header').css('padding', '10px 40px');
        }
    });

    //  ================ Функция для слайдера =========== //

    $('.slider_wrapper').slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        waitForAnimate: false,
        slidesToScroll: 1, 
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
    });
