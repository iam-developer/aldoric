$(document).ready(function() {
    $('.header-aside-trigger').hover( () => {
        $('.planner-logo-img').css('display', 'none');
        $('.planner-hidden').css('display', 'block');
    });

    $(window).on('scroll', function() {
        $('.planner-logo-img').css('display', 'block');
        $('.planner-hidden').css('display', 'none');
    });
});