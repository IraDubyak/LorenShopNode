app.controller('singleCtrl', function ($scope, $http, $routeParams, cartService, AuthService) {
    var id = $routeParams.id;
    var that = this;
    $scope.current_quantity = cartService.current_quantity;
    $scope.decreaseProduct = cartService.decreaseProduct;
    $scope.increaseProduct = cartService.increaseProduct;

    $http.get(nodeVariable + 'products/'+ id)
        .then(function(response) {
            $scope.single_product = response.data;
            console.log(response);
        });

    $scope.size =
        {
            xs: "XS",
            s: "S",
            m: "M",
            l: "L",
            xl: "XL"
        };

      
var product_size = document.getElementsByClassName("product_size");
     for(let i = 0; i < product_size.length; i++) {
        product_size[i].onclick = function() {
            $scope.checkedItem = product_size[i].innerHTML;
            console.log($scope.checkedItem);
            for(let j = 0; j < product_size.length; j++) {
                product_size[j].style.backgroundColor = "white";
                product_size[j].style.color = "#75737e";
            }
            product_size[i].style.backgroundColor = "black";
            product_size[i].style.color = "white";

        }
    }

 that.saveCartItem = function(){
            var object = {size: $scope.checkedItem, quantity: $scope.current_quantity, product_id: id, user_id: AuthService.getUserId()};
            var o = cartService.saveCartItem(object);
            console.log(o);
        };

})
