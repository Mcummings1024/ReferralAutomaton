var app = angular.module('refApp');
var $jq = jQuery.noConflict();

app.controller('RefCtrl', ['refService', function(refService) {
	//code for adding/editing referrals goes here.
	var self = this;
	self.refs = refService.getRefs();

	//adds referral to the table and creates a splash page for it.
	self.addReferral = function() {
		console.log(self.refs[0]);
		refService.addRef({ref: self.newRef, clicks: 0});
	};

	self.updateClicks = function(i) {
		self.refs[i].clicks++;
	};

	self.editRef = function() {
		//edit code goes here
	};
	
	self.removeRef = function(i) {
		refService.removeRef(i);
	};

}]);