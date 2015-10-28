var app = angular.module('refApp');

app.controller('SplashCtrl', function($scope, $routeParams, refService) {
	//splash page code goes here.
	var self = this;

	self.params = $routeParams;

	self.refs = refService.getRefs();

	console.log(self.params);
});