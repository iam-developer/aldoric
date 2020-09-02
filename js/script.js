$(document).ready(function() {
    $(window).on('scroll', function() {
      if($(this).scrollTop() != 0) {
        $('header').css('display', 'none');
        $('.bird').css('display', 'block');
      }
      else {
        $('header').css('display', 'flex');
        $('.bird').css('display', 'none');
      }

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
    $( ".bird" ).mouseover(function() {
      $(this).css('display', 'none');
      $('header').css('display', 'flex');
    });


    $('.heroes-img').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      autoplay:true,
      autoplaySpeed:2000,
      waitForAnimate: false,
      slidesToScroll: 1, 
    });
  });

// Change super heroes

// let heroe = document.querySelectorAll('.hero');

// function superHeroes() {
//   for(let i = 0; i < heroe.length; i ++) {
//     heroe[i].style.display = 'none';
//     heroe[5].style.display = 'block';
//   }
// }

// superHeroes();