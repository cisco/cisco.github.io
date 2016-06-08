'use strict';

/**
 * @ngdoc overview
 * @name ciscogithubioApp
 * @description
 * # ciscogithubioApp
 *
 * Main module of the application.
 */
angular
  .module('ciscogithubioApp', [
    'ngResource',
    'ngRoute',
    'angularUtils.directives.dirPagination',
    'slickCarousel'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
