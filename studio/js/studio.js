$(document).ready(function() {

    //  When you scroll the window:
    $(window).on('scroll', function() {
        $('.header-aside-trigger').css('display', 'block');
        $('.logo-img').css('display', 'block');
        $('.logo-link').css('display', 'none');
        $('.main-header--scrolling .header-main.header-main--sticky-yellow').css('marginTop', '0');
        $('.header-main .nav--primary ul li a').css('color', '#464b50');
        $('.logo-link').css('color', '#464b50');

        if ($(this).scrollTop() == 0) {
            $('.header-aside-trigger').css('display', 'none');
        }
    });

    // When you hover on the logo "Bird":
    if ($('.header-aside-trigger').hover(function() {
            $('.main-header--scrolling .header-main.header-main--sticky-yellow').css('marginTop', '5px');
            $('.logo-img').css('display', 'none');
            $('.logo-link').css('display', 'block');
            $('.header-aside-trigger').css('display', 'none');
            $('.header-main .nav--primary ul li a').css('color', '#f3f3f3');
            $('.logo-link').css('color', '#f3f3f3');
        }));

    // When click on the mobile bird icon:
    $('.header__mobile-toggle').on('click', function() {
        $('.mobile-bird-img').toggle(function() {
            $(this).addClass('Mob-bird-none');
        });
    });


    $(document).load($(window).bind("resize", checkPosition));

    function checkPosition()
    {
        if($(window).width() < 767)
        {
            $('.header-main .nav--primary ul li a').css('color', '#fff');
            $('.header-main .nav--primary ul li a').css('font-size', '22px');
            $('.header-main .header__mobile-toggle').css('padding', '45px');
        } else {
            $('.header-main .nav--primary ul li a').css('color', '#464b50');
            $('.header-main .nav--primary ul li a').css('font-size', '16px');
            $('.header-main .header__mobile-toggle').css('padding', '26px');
        }
      }

});