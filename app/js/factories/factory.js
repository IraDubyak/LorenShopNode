app.service('cartService', function ($http) {
	var that = this;
    this.current_quantity = 1;
    this.decreaseProduct = function () {
        if (this.current_quantity > 1) {
            this.current_quantity--;
        }
    }
    this.increaseProduct = function () {
        this.current_quantity++;
    }


    function saveCartItem(object) {
    	$http({
    		method: "POST",
    		url: "http://localhost:3333/order_items",
    		data: JSON.stringify(object),
    		timeout: 4000
    	}).then(function(success){
    		console.log("success");
    	}).then(function(error) {
            console.log(error);
        }).then(function() {
            console.log(JSON.stringify(object));
        });
    }
    that.saveCartItem = saveCartItem;

    return that;
});