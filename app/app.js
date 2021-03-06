'use strict';

/* App Module */

var uis = angular.module('uis', [
  'ngRoute',
  'ui.calendar',
  'uisControllers',
  'uisServices',
  'uisAnimations',
  'uisDirectives',
  'ngAnimate',
  'ngFx',  
])
.run(function($rootScope, $location) {
    $rootScope.location = $location;
});

uis.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomePageCtrl'
      }).    
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutPageCtrl'
      }).      
      when('/calendar', {
        templateUrl: 'partials/calendar.html',
        controller: 'CalendarPageCtrl'
      }).      
      when('/conference', {
        templateUrl: 'partials/conference.html',
        controller: 'ConferencePageCtrl'
      }).      
      when('/recruiting', {
        templateUrl: 'partials/recruiting.html',
        controller: 'RecruitingPageCtrl'
      }).
      when('/executive', {
        templateUrl: 'partials/executive.html',
        controller: 'ExecutivePageCtrl'
      }).      
      // when('/footer', {
      //   templateUrl: 'partials/footer.html',
      //   controller: 'FooterCtrl'
      // }).
      otherwise({
        redirectTo: '/'
      });
      
      $locationProvider.html5Mode(true);      
  }]);
  
window.onGapiLoad = function() {
  console.log("Client loaded.");
  var injector = angular.injector(['uisServices']);
  var service = injector.get('GAuth');
  //service.loadClient();
}



// FB Graph Access
// var ns_uis = (function() {
//   // Load FB SDK
//   window.fbAsyncInit = function() {
//     FB.init({
//         appId      : '323850914480241',
//         xfbml      : true,
//         version    : 'v2.2'
//       });
//     };
  
//     (function(d, s, id){
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) {return;}
//       js = d.createElement(s); js.id = id;
//       js.src = "//connect.facebook.net/en_US/sdk.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));  
// })();