'use strict';

angular.module('Blog')
.service('dataService', function($http) {
  this.getPosts = function(cb) {
    $http.get('/api/posts').then(cb);
  };

  this.getPost = function(cb) {
    $http.get('/api/posts').then(cb);
  };
  
  
 

  
});
