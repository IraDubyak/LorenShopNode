app.controller('cartCtrl', function ($scope, $http, cartService, $window) {
    $window.scrollTo(0, angular.element(document.getElementsByTagName('body')).offsetTop);
    $scope.current_quantity = cartService.current_quantity;
    $scope.decreaseProduct = cartService.decreaseProduct;
    $scope.increaseProduct = cartService.increaseProduct;

    setTimeout(function(){
        $http.get(nodeVariable + 'cart')
        .then(function(response) {
                $scope.order_items_in_cart = response.data;
        });
    }, 100);

    $scope.getTotal = function(){
    var total = 0;
    if($scope.order_items_in_cart) {
        for(var i = 0; i < $scope.order_items_in_cart.length; i++){
            var order_item = $scope.order_items_in_cart[i];
            total += (order_item.price * order_item.quantity);
        }
    }
    return total;
}
$scope.checkout = function() {
    $http({
            method: "POST",
            url: "http://localhost:3333/order_items/checkout",
            data: JSON.stringify($scope.order_items_in_cart),
            timeout: 4000
        }).then(function(success){
            console.log("success");
        }).then(function(error) {
            console.log(error);
        });
}
})

