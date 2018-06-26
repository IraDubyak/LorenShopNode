var app = angular.module("app", ['ngRoute']);
app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'components/home.html',
        controller: 'homeCtrl',
        controllerAs: 'home'
    });
    $routeProvider.when('/customer_information', {
        templateUrl: 'components/customer_information.html',
        controller: 'customerCtrl',
        controllerAs: 'customer'
    });
    $routeProvider.when('/contact_us', {
        templateUrl: 'components/contact_us.html',
        controller: 'contactCtrl',
        controllerAs: 'contact'
    });
    $routeProvider.when('/login', {
        templateUrl: 'components/login.html',
        controller: 'loginCtrl',
        controllerAs: 'login'
    });
    $routeProvider.when('/payment_method', {
        templateUrl: 'components/payment_method.html',
        controller: 'paymentCtrl',
        controllerAs: 'payment'
    });
    $routeProvider.when('/profile', {
        templateUrl: 'components/profile.html',
        controller: 'profileCtrl',
        controllerAs: 'profile'
    });
    $routeProvider.when('/man', {
        templateUrl: 'components/man.html',
        controller: 'manCtrl',
        controllerAs: 'man'
    });
    $routeProvider.when('/woman', {
        templateUrl: 'components/woman.html',
        controller: 'womanCtrl',
        controllerAs: 'woman'
    });
    $routeProvider.when('/registration', {
        templateUrl: 'components/registration.html',
        controller: 'registrationCtrl',
        controllerAs: 'registration'
    });
    $routeProvider.when('/shipping_method', {
        templateUrl: 'components/shipping_method.html',
        controller: 'shippingCtrl',
        controllerAs: 'shipping'
    });
    $routeProvider.when('/single_product/:id', {
        templateUrl: 'components/single_product.html',
        controller: 'singleCtrl',
        controllerAs: 'single'
    });
    $routeProvider.when('/cart', {
        templateUrl: 'components/cart.html',
        controller: 'cartCtrl',
        controllerAs: 'cart'
    });
})
