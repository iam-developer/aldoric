  $(document).ready(function () {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() != 0) {
        $('header').css('display', 'none');
        $('.bird').css('display', 'block');
      }
      else {
        $('header').css('display', 'flex');
        $('.bird').css('display', 'none');
      }

      if ($(window).scrollTop()) {
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
    $(".bird").mouseover(function () {
      $(this).css('display', 'none');
      $('header').css('display', 'flex');
    });


// Function for mobile menu:
    $('.bird-mobile').on('click', function() {
      $('.mobile-menu').addClass('show-menu');
      $('.mobile-item').addClass('active-effect');
    });
    $('.close-menu').on('click', function() {
      $('.mobile-menu').removeClass('show-menu');
      $('.mobile-item').removeClass('active-effect');
    });
  });



