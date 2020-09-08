window.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function() {
        $(window).on('scroll', function() {
            $('.header-main--sticky-purple').css('marginTop', '0');
            $('.contact-logo').css('display', 'block');
            $('.hidden-logo-name').css('display', 'none');
        });
        $('.header-aside-trigger').hover(function() {
            $('.header-main--sticky-purple').css('marginTop', '5px');
            $('.contact-logo').css('display', 'none');
            $('.hidden-logo-name').css('display', 'block');
        });
        $('.header__mobile-toggle--purple').on('click', function() {
            $('.contact-bird-img').toggleClass('contact-bird');
        });
    });
});