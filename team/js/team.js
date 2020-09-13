$(document).ready(function() {

    $('.header__mobile-toggle--purple').on('click', function() {
        $('.team-mobile-menu').toggleClass('team-mobile-menu-none');
        $('.header-main .nav--primary ul li a').toggleClass('font__size');
    });

   $(document).load($(window).bind("resize", checkPosition));

   function checkPosition() {
    if($(window).width() < 767) {
        $('.header').css('display', 'none');

        $('.header-aside-trigger').hover(function() {
        $('.teaaam-logo').css('display', 'none');
        $('.team-logo').css('display', 'block');
       });
       $(window).on('scroll', function() {
        $('.team-logo').css('color', '#464b50');
        $('.teaaam-logo').css('display', 'none');
        $('.team-logo').css('display', 'block');
       });

    }   else {
        $('.header').css('display', 'block');

        $('.header-aside-trigger').hover(function() {
            $('.teaaam-logo').css('display', 'none');
            $('.team-logo').css('display', 'block');
            $('.header-main--sticky-purple').css('marginTop', '5px');
       });
       $('.header-aside-trigger').hover(function() {
        $('.team-logo').css('color', 'white');
        });
        $(window).on('scroll', function() {
            $('.team-logo').css('color', '#464b50');
            $('.teaaam-logo').css('display', 'block');
            $('.team-logo').css('display', 'none');
            $('.header-main--sticky-purple').css('marginTop', '0');
        });
        
        }
    }

});