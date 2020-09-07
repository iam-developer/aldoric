$(document).ready(function() {
    $('.header-aside-trigger').hover(function() {
        $('.team-logo').css('color', 'white');
    });
    $(window).on('scroll', function() {
        $('.team-logo').css('color', '#464b50');
        if ($('.header-aside-trigger').css('display', 'block')) {
            $('.header-main--sticky-purple').css('marginTop', '0');
        }
    });
    $('.header__mobile-toggle--purple').on('click', function() {
        $('.team-mobile-menu').toggleClass('team-mobile-menu-none');
    });
});