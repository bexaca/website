$(document).ready(function() {
    $('body').on('click', '.menu', function(event) {
        $(this).toggleClass('open');
        $('#icon-wrap-2').css('pointer-events', 'none');
        $('#icon-wrap-2').css('pointer-events', 'all');
        $('.menu__block').toggleClass('menu__active');
        $('.menu__items').toggleClass('menu__items-active');
        $('.menu__items').toggleClass('menu-items-pointer-events');
    });

    $('.menu__item a').click(function() {
        $('.menu__items').toggleClass('menu-items-pointer-events');
        $('#icon-wrap-2').removeClass('open');
        $('.menu__items').toggleClass('menu__items-active');
        $('.menu__block').toggleClass('menu__active');
    });
});