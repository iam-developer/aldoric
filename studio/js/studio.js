$(document).ready(function() {
    // if($('.header-aside-trigger').css('display', 'block')) {
        // $('.logo-img').css('display', 'none');
        // $('.aldoric-txt-logo').css('display', 'block');
    //     console.log('bird is block');
    // }

//  When you scroll the window:
    $(window).on('scroll', function () {
        $('.header-aside-trigger').css('display', 'block');
        $('.logo-img').css('display', 'block');
        $('.logo-link').css('display', 'none');
        if ($(this).scrollTop() == 0) {
            $('.header-aside-trigger').css('display', 'none');
        }
    });

// When you hover on the logo "Bird":
    if($('.header-aside-trigger').hover(function() {
        $('.main-header--scrolling .header-main.header-main--sticky-yellow').css('marginTop', '5px');
        $('.logo-img').css('display', 'none');
        $('.logo-link').css('display', 'block');
        $('.header-aside-trigger').css('display', 'none');
    }));

// When click on the mobile bird icon:
$('.header__mobile-toggle').on('click', function() {
    $('.mobile-bird-img').toggle(function() {
        $(this).addClass('Mob-bird-none');
    });
});
    // $('.header__mobile-toggle').on('click', function() {
    //     $('.mobile-bird-img').css('display', 'block');
    // });
});

