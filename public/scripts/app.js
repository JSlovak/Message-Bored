/* globals angular */

angular.module('app', ['ngRoute'])
.config([
  '$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider){

  $routeProvider
    .when('/', {
      templateUrl: '/scripts/home.html'
    })
    .when('/users', {
      templateUrl: '/scripts/templates/users.html',
      controller: 'UsersCtrl'
    })
    .when('/messages', {
      templateUrl: '/scripts/templates/messages.html',
      controller: 'UsersCtrl'
    })
    .when('/topics', {
      templateUrl: '/scripts/templates/topics.html',
      controller: 'UsersCtrl'
    });
}]);
