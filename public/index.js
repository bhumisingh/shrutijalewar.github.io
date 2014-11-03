(function(){
  'use strict';

  angular.module('portfolio', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/public/views/home/home.html',             controller:'HomeCtrl'})
    .when('/resume',    {templateUrl:'/views/resume/resume.html',       controller:'ResumeCtrl'})
    .when('/contact',   {templateUrl:'/views/contact/contact.html',     controller:'ContactCtrl'})
    .when('/about',     {templateUrl:'/views/about/about.html',         controller:'AboutCtrl'})
    .when('/projects',   {templateUrl:'/views/projects/projects.html',  controller:'ProjectsCtrl'})
    .otherwise({redirectTo:'/'});
  }]);
})();

