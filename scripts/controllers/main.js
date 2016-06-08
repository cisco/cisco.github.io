'use strict';

/**
 * @ngdoc function
 * @name ciscogithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ciscogithubioApp
 */
angular.module('ciscogithubioApp')
  .controller('MainCtrl', function ($scope, $log, $http, ProjectSvc) {


    var projectStats = {};
    var carouselItems =[];
    $scope.predicate = 'title';
    $scope.reverse = false;
    
    ProjectSvc.getFeatured().then(function(response) {
      carouselItems = response.data;

      //$log.info(carouselItems);
      ProjectSvc.getStats().then(function (response) {
        projectStats = response.data;

        carouselItems.push(projectStats);
        //$log.info(carouselItems);
        initSlickCarousel(carouselItems);
      });
      
      ProjectSvc.query().then(function(response) {
        $scope.projects = response.data;
      });

    });

    $scope.now = new Date();

    $scope.itemsPerPage = 18;

    $scope.sort = function(keyname){
      $scope.predicate = keyname;
      $scope.reverse = !$scope.reverse;
      // $log.info(keyname);
      // $log.info($scope.reverse);
    }

    $scope.reset = function(){
      $scope.searchProjects = '';
    };


    var initSlickCarousel = function(data) {
      /* Slick Carousel */

      $scope.carouselData = carouselItems;
      $scope.slickConfigLoaded = true;
      $scope.updateNumber1 = function () {
        $scope.slickConfigLoaded = false;
        $scope.number1[2] = '123';
        $scope.number1.push(Math.floor((Math.random() * 10) + 100));
        $timeout(function () {
          $scope.slickConfigLoaded = true;
        }, 5);
      };
      $scope.slickCurrentIndex = 0;
      $scope.slickConfig = {
        dots: true,
        autoplay: true,
        initialSlide: 0,
        infinite: true,
        autoplaySpeed: 5000,
      };

      /* End Slick Carousel */
    };

  });

  angular.module('ciscogithubioApp').filter('cut', function () {
    return function (value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
              //Also remove . and , so its gives a cleaner result.
              if (value.charAt(lastspace-1) == '.' || value.charAt(lastspace-1) == ',') {
                lastspace = lastspace - 1;
              }
              value = value.substr(0, lastspace);
            }
        }

        return value + (tail || ' …');
    };
});
