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
    return {
      query : function() {
        return $http.get( 'data/repos.json');
      },
      getStats : function() {
        return $http.get( 'data/stats.json');
      },
      getFeatured : function() {
        return $http.get( 'data/featured.json');
      }
    };
  });
