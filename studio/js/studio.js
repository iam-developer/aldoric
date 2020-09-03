$(document).ready(function() {
    // if($('.header-aside-trigger').css('display', 'block')) {
        // $('.logo-img').css('display', 'none');
        // $('.aldoric-txt-logo').css('display', 'block');
    //     console.log('bird is block');
    // }
    $(window).on('scroll', function () {
        $('.header-aside-trigger').css('display', 'block');
        if ($(this).scrollTop() == 0) {
            $('.header-aside-trigger').css('display', 'none');
        }
    });

    if($('.header-aside-trigger').hover(function() {
        $('.logo-img').css('display', 'none');
        $('.aldoric-txt-logo').css('display', 'block');
        $('.header-aside-trigger').css('display', 'none');
    }));
});

