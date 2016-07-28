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


    app.controller('HomeController', 
        function($rootScope, $location)
        {
            $rootScope.curr = $location.path();
            $rootScope.title = '';

        });

    app.controller('BasicInfoRequirements', 
        function($rootScope, $location)
        {
            $rootScope.curr = $location.path();
            $rootScope.title = 'Basic Info - Requirements - ';

        });

    app.controller('BasicInfoCredits', 
         function($rootScope, $location)
         {
             $rootScope.curr = $location.path();
             $rootScope.title = 'BasicInfoCredits - ';
          });
    app.controller('Mvc', 
         function($rootScope, $location)
         {
             $rootScope.curr = $location.path();
             $rootScope.title = 'Model-View-Controller - ';
          });










