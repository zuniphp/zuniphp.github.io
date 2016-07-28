/*
*
* ------------------------------------------------------
* script for ZuniCSS 
* ------------------------------------------------------
*
* author:  Estefanio NS <estefanions AT gmail DOT com> 
* project: https://github.com/zunicss/zunicss
* page:    http://zunicss.github.io
*/

    var app = angular.module('app',['ngRoute']);
    var dir = '';



     
    app.config(function($routeProvider, $locationProvider)
    {

    

       $routeProvider
     
       .when( dir + '/', {
          templateUrl : 'page/home.html',
          controller     : 'HomeController',
       })
     
       .when(dir + '/mvc', {
          templateUrl : 'page/mvc.html',
          controller  : 'Mvc',
       })

       .when(dir + '/basic-info-requirements', {
          templateUrl : 'page/basic-info-requirements.html',
          controller  : 'BasicInfoRequirements',
       })

       .when(dir + '/basic-info-credits', {
          templateUrl : 'page/basic-info-credits.html',
          controller  : 'BasicInfoCredits',
       })


    });








