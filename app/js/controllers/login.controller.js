app.controller('loginCtrl', function ($scope, $rootScope, AUTH_EVENTS, AuthService, $window) {
    $window.scrollTo(0, angular.element(document.getElementsByTagName('body')).offsetTop);
  $scope.credentials = {
    email: '',
    password: ''
  };
  $scope.login = function () {
    AuthService.login($scope.credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      $scope.setCurrentUser(user);
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  };
})