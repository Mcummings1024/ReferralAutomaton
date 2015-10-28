var app = angular.module('refApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/',
	{
		controller: 'RefCtrl',
		controllerAs: 'ref',
		templateUrl: 'refView.html'
	});
	$routeProvider.when('/landing',
	{
		controller: 'SplashCtrl',
		controllerAs: 'splash',
		templateUrl: 'landing.html'
	});
	$routeProvider.otherwise(
	{ 
		redirectTo: '/' 
	});
});