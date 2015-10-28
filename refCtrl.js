var app = angular.module('refApp');
var $jq = jQuery.noConflict();

app.controller('RefCtrl', ['refService', function(refService) {
	//code for adding/editing referrals goes here.
	var self = this;
	//var refs = refService.getRefs();
	var table = document.getElementById('refTable');

	//adds referral to the table and creates a splash page for it.
	self.addReferral = function() {
		console.log('test');
		//refs.push({ref: newRef, clicks: 0});
		var newDiv = document.createElement("div"); 
  		var newContent = document.createTextNode("Hi there and greetings!"); 
  		newDiv.appendChild(newContent);
	};

}]);