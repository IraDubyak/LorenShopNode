app.controller('loginCtrl', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
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