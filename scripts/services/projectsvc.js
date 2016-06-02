'use strict';

/**
 * @ngdoc service
 * @name ciscogithubioApp.ProjectSvc
 * @description
 * # ProjectSvc
 * Service in the ciscogithubioApp.
 */
angular.module('ciscogithubioApp')
  .service('ProjectSvc', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var HOST = 'http://ec2-52-87-200-36.compute-1.amazonaws.com';
    return {
      query : function() {
        return $http.get( HOST + '/ghpages/repos.json');
      },
      getStats : function() {
        return $http.get( HOST + '/ghpages/stats.json');
      }
    }
  });
