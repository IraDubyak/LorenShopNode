app.controller('mainCtrl', function ($scope, $http, $window) {
    $window.scrollTo(0, angular.element(document.getElementsByTagName('body')).offsetTop);
    $http.get(nodeVariable + 'product').then(function(response) {
        $scope.product = response.data;

        var result = groupBy($scope.product, function(item) {
            return [item.id_product, item.name];
        });

        $scope.product = result.map(arrayOfElements => ({
            "id_product": arrayOfElements[0].id_product,
            "name": arrayOfElements[0].name,
            "image": arrayOfElements[0].image,
            "brand": arrayOfElements[0].brand,
            "price": arrayOfElements[0].price,
            "color": arrayOfElements[0].color,
            "description": arrayOfElements[0].description,
            "id_category": arrayOfElements[0].id_category,
            "sizes": arrayOfElements.map(element => element.size)}));

    });

    $scope.showSearchLine = false;
    $scope.startSearch = function () {
        $scope.showSearchLine = !$scope.showSearchLine;
    }

    $scope.closeSearch = function () {
        $scope.showSearchLine = false;
    }

     $http.get(nodeVariable + 'woman')
        .then(function(response) {
            $scope.sex_category_woman = response.data;
            setTimeout(function() {
                $scope.header_id_category = document.getElementsByClassName('header_id_category');
                for(let i=0; i<$scope.header_id_category.length; i++){
                    $scope.header_id_category[i].onclick = function () {
                        $scope.header_id_category_attr = document.getElementsByClassName('header_id_category')[i].getAttribute('data-id');
                        $http.get( nodeVariable + 'product_categories/' + $scope.header_id_category_attr)
                            .then(function(response) {
                                $scope.product_woman = response.data;
                            });
                    }
                }
            }, 0);
        });

  
        $http.get( nodeVariable + 'man')
        .then(function(response) {
            $scope.sex_category_man = response.data;
            setTimeout(function() {
                $scope.header_id_category = document.getElementsByClassName('header_id_category');
                for(let i=0; i<$scope.header_id_category.length; i++){
                    $scope.header_id_category[i].onclick = function () {
                        $scope.header_id_category_attr = document.getElementsByClassName('header_id_category')[i].getAttribute('data-id');
                        $http.get(nodeVariable + 'product_categories/' + $scope.header_id_category_attr)
                            .then(function(response) {
                                $scope.product_man = response.data;
                            });
                    }
                }
            }, 0);
        });

});
