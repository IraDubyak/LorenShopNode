app.controller('homeCtrl', function ($scope) {

    $(document).ready(function () {
        $('.header_slider').slick({
            dots: true,
            dotsClass: "my-dots",
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<span class="prev"><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></span>',
            nextArrow: '<span class="next"><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></span>'
        });
    });
});

