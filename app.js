var angularGithubApp = angular.module('angularGithubApp', ['restangular']);

angularGithubApp.controller('MainController', ['$scope', 'restangular', function MainController($scope, Restangular) {
	$scope.simpleText = "Angular";

	var repos = Restangular.oneUrl('repos', 'https://api.github.com/users/hybris/repos').get();
}]);