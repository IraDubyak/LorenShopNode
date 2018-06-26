app.service('categoryService', function () {
    $http.get(nodeVariable + 'woman')
        .then(function(response) {
            this.sex_category_woman = response.data;
            // console.log($scope.sex_category_woman);
            setTimeout(function() {
                this.header_id_category = document.getElementsByClassName('header_id_category');
                for(let i=0; i<this.header_id_category.length; i++){
                    this.header_id_category[i].onclick = function () {
                        this.header_id_category_attr = document.getElementsByClassName('header_id_category')[i].getAttribute('data-id');
                        console.log(this.header_id_category_attr);
                        $http.get(nodeVariable + 'product_categories/' + $scope.header_id_category_attr)
                            .then(function(response) {
                                this.product_woman = response.data;
                                console.log(this.product_woman);
                            });
                    }
                }
            }, 0);
        });

  
    $http.get(nodeVariable + 'man')
        .then(function(response) {
            this.sex_category_man = response.data;
            setTimeout(function() {
                this.header_id_category = document.getElementsByClassName('header_id_category');
                for(let i=0; i<this.header_id_category.length; i++){
                    $scope.header_id_category[i].onclick = function () {
                        this.header_id_category_attr = document.getElementsByClassName('header_id_category')[i].getAttribute('data-id');
                        console.log(this.header_id_category_attr);
                        $http.get(nodeVariable + 'product_categories/' + $scope.header_id_category_attr)
                            .then(function(response) {
                                this.product_man = response.data;
                                console.log(this.product_man);
                            });
                    }
                }
            }, 0);
        });
});
