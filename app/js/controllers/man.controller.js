app.controller('manCtrl', function ($scope, $http, $window) {
    $window.scrollTo(0, angular.element(document.getElementsByTagName('body')).offsetTop);
    $http.get(nodeVariable + 'man_products')
        .then(function(response) {
            $scope.product_man = response.data;
   
        var result = groupBy($scope.product_man, function(item) {
            return [item.id_product, item.name];
        });

        $scope.product_man = result.map(arrayOfElements => ({
            "id_product": arrayOfElements[0].id_product, 
            "name": arrayOfElements[0].name, 
            "image": arrayOfElements[0].image, 
            "brand": arrayOfElements[0].brand, 
            "price": arrayOfElements[0].price, 
            "color": arrayOfElements[0].color, 
            "description": arrayOfElements[0].description, 
            "id_category": arrayOfElements[0].id_category, 
            "sizes": arrayOfElements.map(element => element.size)}));

            $scope.man_products_no_size = function () {
                $scope.product_man = result.map(arrayOfElements => ({
                    "id_product": arrayOfElements[0].id_product,
                    "name": arrayOfElements[0].name,
                    "image": arrayOfElements[0].image,
                    "brand": arrayOfElements[0].brand,
                    "price": arrayOfElements[0].price,
                    "color": arrayOfElements[0].color,
                    "description": arrayOfElements[0].description,
                    "id_category": arrayOfElements[0].id_category,
                    "sizes": arrayOfElements.map(element => element.size)}));
                console.log($scope.product_man);
            }
        });
    $http.get(nodeVariable + 'woman')
        .then(function(response) {
            $scope.sex_category_woman = response.data;
        });
    $http.get(nodeVariable + 'man')
        .then(function(response) {
            $scope.sex_category_man = response.data;
            setTimeout(function() {
                $scope.id_category = document.getElementsByClassName('id_category');
                for(let i=0; i<$scope.id_category.length; i++){
                    $scope.id_category[i].onclick = function () {
                        $scope.id_category_attr = document.getElementsByClassName('id_category')[i].getAttribute('data-id');
                        console.log($scope.id_category_attr);
                        $http.get(nodeVariable + 'product_categories/' + $scope.id_category_attr)
                            .then(function(response) {
                                $scope.product_man = response.data;
                                console.log($scope.product_man);
                            });
                    }
                }
            }, 0);
        });

    $scope.color = function (x) {
        $scope.myColor = x;
    };
    $scope.brand = function (x) {
        $scope.myBrand = x;
    };
    $scope.price = function (x, y) {
        $scope.min = x;
        $scope.max = y;
    };


    $scope.man_products_size_xs = function () {
        $http.get(nodeVariable + 'man_products_size_xs')
            .then(function(response) {
                $scope.product_man = response.data;
            });
    }

    $scope.man_products_size_s = function () {
        $http.get(nodeVariable + 'man_products_size_s')
            .then(function(response) {
                $scope.product_man = response.data;
            });
    }

    $scope.man_products_size_m = function () {
        $http.get(nodeVariable + 'man_products_size_m')
            .then(function(response) {
                $scope.product_man = response.data;
            });
    }

    $scope.man_products_size_l = function () {
        $http.get(nodeVariable + 'man_products_size_l')
            .then(function(response) {
                $scope.product_man = response.data;
            });
    }

    $scope.man_products_size_xl = function () {
        $http.get(nodeVariable + 'man_products_size_xl')
            .then(function(response) {
                $scope.product_man = response.data;
            });
    }

    var color = document.getElementById("color");
    var check_color = document.getElementsByClassName("color_contaiter");
    for (let i=0; i<check_color.length; i++){
        check_color[i].onclick = function () {
            color.style.display = "inline-block";
            for(let j=0; j<check_color.length; j++){
                check_color[j].classList.remove('check_border');
            }
            check_color[i].classList.add('check_border');
        }
    }
    color.onclick = function () {
        color.style.display = "none";
        for(let j=0; j<check_color.length; j++){
            check_color[j].classList.remove('check_border');
        }
    }

    var size = document.getElementById("size");
    var check_size = document.getElementsByClassName("size_box");
    for (let i=0; i<check_size.length; i++){
        check_size[i].onclick = function () {
            size.style.display = "inline-block";
            for(let j=0; j<check_size.length; j++){
                check_size[j].classList.remove('check_border');
            }
            check_size[i].classList.add('check_border');
        }
    }
    size.onclick = function () {
        size.style.display = "none";
        for(let j=0; j<check_size.length; j++){
            check_size[j].classList.remove('check_border');
        }
    }


    var price = document.getElementById("price");
    var radio_price = document.getElementsByClassName("radio_price");
    for (let i=0; i<radio_price.length; i++){
        radio_price[i].onclick = function () {
            price.style.display = "inline-block";
            for(let j=0; j<radio_price.length; j++){
                document.getElementsByClassName('checkmark')[j].style.backgroundColor = "#fff";
            }
            document.getElementsByClassName('checkmark')[i].style.backgroundColor = "#696969";
        }
    }
    price.onclick = function () {
        price.style.display = "none";
        for(let j=0; j<radio_price.length; j++){
            document.getElementsByClassName('checkmark')[j].style.backgroundColor = "#fff";
        }
    }

    var brand = document.getElementById("brand");
    var radio_brand = document.getElementsByClassName("radio_brand");
    for (let i=0; i<radio_brand.length; i++){
        radio_brand[i].onclick = function () {
            brand.style.display = "inline-block";
            for(let j=0; j<radio_brand.length; j++){
                document.getElementsByClassName('checkmark1')[j].style.backgroundColor = "#fff";
            }
            document.getElementsByClassName('checkmark1')[i].style.backgroundColor = "#696969";
        }
    }
    brand.onclick = function () {
        brand.style.display = "none";
        for(let j=0; j<radio_brand.length; j++){
            document.getElementsByClassName('checkmark1')[j].style.backgroundColor = "#fff";
        }
    }

    var dropdown_btn = document.getElementsByClassName('dropdown-btn')[1];
        dropdown_btn.onclick = function () {
            dropdown_btn.style.listStyleType = "disc";
    }
})
