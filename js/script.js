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


    $('.heroes-img').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      waitForAnimate: false,
      slidesToScroll: 1,
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


  
// Effects for blocks:

const animItems = document.querySelectorAll('.anim-item');

if(animItems.length > 0) {
    window.addEventListener('scroll', showAnimation);
    function showAnimation(params) {
        for(let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight; // Высота моего объекта
            const animItemOffset = offset(animItem).top;  // Позиция моего объекта
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active__class');
            }
            else {
                if(!animItem.classList.contains('no-anim')) {
                    animItem.classList.remove('active__class');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
              scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
              scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop, left: rect.left + scrollLeft
        }
    }
}

setTimeout(showAnimation, 800);
