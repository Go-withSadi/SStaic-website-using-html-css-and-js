$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 120) {
        $('.navbar-area').addClass('is-sticky');
    } else {
        $('.navbar-area').removeClass('is-sticky');
    }
});