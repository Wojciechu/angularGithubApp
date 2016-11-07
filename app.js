var angularGithubApp = angular.module('angularGithubApp', []);

angularGithubApp.controller('MainController', function MainController($scope) {
	$scope.simpleText = "Angular";
});