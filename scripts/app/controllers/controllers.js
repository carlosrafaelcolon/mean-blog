'use strict';

angular.module('myBlog.controllers', [])
.controller('mainController', function($scope, dataService){

  dataService.getPosts(function(response){
    var posts = response.data.posts;
    $scope.posts =  posts;
    });



}) 
.controller("SinglePostController", function($scope, dataService, $routeParams) {    

			 dataService.getPost(function(response){
			    
			    $scope.postVariable = response.data.posts;
			    $scope.whichPost = $routeParams.id;
		    });

		
		}
)
.controller("IndexController", function($scope) {    

			    $scope.class = "container";
    
    $scope.changeClass = function(){
        if ($scope.class === "container")
            $scope.class = "container-clicked";
         else
            $scope.class = "container";
    };

		
});

