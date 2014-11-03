(function(){
  'use strict';

  angular.module('portfolio', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    //.when('/', {templateUrl:'/public/views/home/home.html',             controller:'HomeCtrl'})
    .when('/resume',    {templateUrl:'/public/views/resume/resume.html',       controller:'ResumeCtrl'})
    .when('/contact',   {templateUrl:'/public/views/contact/contact.html',     controller:'ContactCtrl'})
    .when('/about',     {templateUrl:'/public/views/about/about.html',         controller:'AboutCtrl'})
    .when('/projects',   {templateUrl:'/public/views/projects/projects.html',  controller:'ProjectsCtrl'})
    .otherwise({redirectTo:'/resume'});
  }]);
})();
