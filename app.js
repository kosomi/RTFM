angular.module('rtfmApp', ['ngRoute', 'firebase']) 
.constant('fb', { 
  url: 'https://welcometosir.firebaseio.com/restaurant' 
}) 
.config(function($routeProvider){ 
        $routeProvider. 
            when('/login', { 
                templateUrl: 'pages/main/main.html' 
            }). 
            when('/main', { 
                templateUrl: 'pages/main/main.html' 
            }). 
            when('/write', { 
                templateUrl: 'pages/write/write.html' 
            }). 
            when('/thread/:threadId', { 
                templateUrl: 'pages/thread/thread.html' 
            }). 
            otherwise({ 
                redirectTo: '/login' 
            }); 
});
