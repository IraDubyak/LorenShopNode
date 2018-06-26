app.factory('AuthService', function ($http, Session) {
  var authService = {};
 
  authService.login = function (credentials) {
    return $http
      .post('http://localhost:3333/login', credentials)
      .then(function (res) {
        console.log(res.data);
        Session.create(res.data.sessionId, res.data.id_user);
        return res.data.user;
      });
  };
 authService.getUserId = function() {
  return Session.userId;
 }
  authService.isAuthenticated = function () {
    return !!Session.userId;
  };
 
  authService.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (authService.isAuthenticated() &&
      authorizedRoles.indexOf(Session.userRole) !== -1);
  };
 
  return authService;
})