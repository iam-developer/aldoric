
$(document).ready(function () {

  // Slider:

  $('.second--slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    dots: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false
        
      }
    },
    ]
  });

  // Function for mobile menu:
 $('.bird__mob').on('click', function() {
  $('.mobile-menu').addClass('show-menu');
  $('.mobile-item').addClass('active-effect');
});
$('.close-menu').on('click', function() {
  $('.mobile-menu').removeClass('show-menu');
  $('.mobile-item').removeClass('active-effect');
});

  // When hover to the button "WORK WITH US":
  $( ".btn" ).hover(function() {
      $('.btn__txt').css('background-color','#99daf2');
      $('.btn__right').css('background-color', '#99daf2');
    }, function() {
      $('.btn__txt').css('background-color','#EAB614');
      $('.btn__right').css('background-color', '#EAB614');
  });

  // When window is scrolling:
  $(window).scroll(function() {
    $('.desktop__logo').css('display', 'none');
    $('.mobile__logo').css('display', 'none');
    $('.menu ul li a').css('color', '#777777');
    $('.header__wrapper').css('margin-top', '0');
    $('.header__wrapper').css('box-shadow', 'none');
    $('.header__wrapper').css('padding', '10px 40px');

    if($(this).scrollTop() != 0) {
      $(".bird").css('visibility', 'visible');
      $('.header').css('visibility', 'hidden');
      $('.header').css('background-color', 'transparent');
    }
    else {
      $(".bird").css('visibility', 'hidden');
      $('.header').css('visibility', 'visible');
      $('.desktop__logo').css('display', 'block');
    }
  });

  // When hover to the bird:
  $('.bird').hover(function() {
    $(".bird").css('visibility', 'hidden');
    $('.header').css('visibility', 'visible');
    $('.header').css('background-color', '#30CBC2');
    $('.mobile__logo').css('display', 'block');
    $('.menu ul li a').css('color', '#fff');
    $('.header__wrapper').css('margin-top', '5px');
    $('.header__wrapper').css('box-shadow', '0px -6px 0px #bdbdc0');
    $('.header__wrapper').css('padding', '14px 40px');
  });



  $(document).load($(window).bind("resize", checkPosition));

  function checkPosition()
  {
      if($(window).width() < 767)
      {
        $('.header').css('display', 'none');
      } else {
        $('.header').css('display', 'block');
      }
    }
});

