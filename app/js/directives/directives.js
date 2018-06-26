app.directive('dropdown', function () {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            element.on('click', function () {
                if (element.next().css("display") == "block") {
                    element.next().css("display", "none");
                    element.css("list-style-type", "circle");
                } else {
                    element.next().css("display", "block");
                    element.css("list-style-type", "disc");
                }
            });
        }
    };
})

app.directive('pinkHover', function () {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            element.on('mouseenter', function () {
                element.children(1).css('bottom', '0px');
                element.children(1).css('transition', '.5s');
                element.children(1).css('opacity', '1');
            });
            $('.slider_block').on('mouseleave', function () {
                element.children(1).css('bottom', '-75px');
                element.children(1).css('transition', '.5s');
                element.children(1).css('opacity', '.85');
            });
        }
    };
})


app.directive('arrowTransform', function () {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            element.on('mouseover', function () {
                element.children().children().eq(1).addClass('pink_arrow');
                element.children().children().eq(1).css("transition", "0.5s");

            });
            element.on('mouseout', function () {
                element.children().children().eq(1).removeClass('pink_arrow');
                element.children().children().eq(1).css("transition", "0.5s");
            });
        }
    }
})

app.directive('clearSearchLine', function () {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            element.on('click', function () {
                $('.search_input input').val('');
                $('.search_product_container').css("display", "none");

            });
        }
    }
})

app.directive('clearSearchProducts', function () {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            element.on('click', function () {
                element.css("color", "#e11687");
                $('.search_product_container').css("display", "flex");

            });
        }
    }
})