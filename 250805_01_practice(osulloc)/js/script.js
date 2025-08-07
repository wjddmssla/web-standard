$(function () {
    $('.menu-btn').on('click', function () {
        $('.overlay-menu').fadeIn();
    });

    $('.close-btn').on('click', function () {
        $('.overlay-menu').fadeOut();
    });
});