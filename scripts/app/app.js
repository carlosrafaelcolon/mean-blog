angular.module('Blog', [
  'myBlog.controllers',

  'ngRoute'  ])
    
    .config(function($routeProvider, $locationProvider) {

        $routeProvider
        .when('/', {
            templateUrl: 'partials/pages/home-simple.html',
            controller: 'IndexController'
          })
        .when('/publication', {
            templateUrl: 'partials/pages/publication.html'
          })
        .when('/work', {
            templateUrl: 'partials/pages/coming-soon.html'
          })
        .when('/webdev', {
            templateUrl: 'partials/pages/service.html'
          })
         .when('/journal', {
            templateUrl: 'partials/pages/journal-list.html',
            controller: 'mainController'
          })
          .when('/journal/:id', {
            templateUrl: 'partials/pages/journal-post.html',
            controller: 'SinglePostController'

          })
          .when('/about', {
            templateUrl: 'partials/pages/biography.html'
          })
          .when('/music', {
            templateUrl: 'partials/pages/coming-soon.html'
          })

        .otherwise({
            redirectTo: '/'
          });


    
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
            });