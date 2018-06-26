app.controller('mainCtrl', function ($scope, $http) {

    $scope.showSearchLine = false;
    $scope.startSearch = function () {
        $scope.showSearchLine = !$scope.showSearchLine;
    }

     $http.get(nodeVariable + 'woman')
        .then(function(response) {
            $scope.sex_category_woman = response.data;
            // console.log($scope.sex_category_woman);
            setTimeout(function() {
                $scope.header_id_category = document.getElementsByClassName('header_id_category');
                for(let i=0; i<$scope.header_id_category.length; i++){
                    $scope.header_id_category[i].onclick = function () {
                        $scope.header_id_category_attr = document.getElementsByClassName('header_id_category')[i].getAttribute('data-id');
                        console.log($scope.header_id_category_attr);
                        $http.get( nodeVariable + 'product_categories/' + $scope.header_id_category_attr)
                            .then(function(response) {
                                $scope.product_woman = response.data;
                                console.log($scope.product_woman);
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
                        console.log($scope.header_id_category_attr);
                        $http.get(nodeVariable + 'product_categories/' + $scope.header_id_category_attr)
                            .then(function(response) {
                                $scope.product_man = response.data;
                                console.log($scope.product_man);
                            });
                    }
                }
            }, 0);
        });

});
