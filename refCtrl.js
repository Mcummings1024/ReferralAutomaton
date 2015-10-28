var app = angular.module('refApp');
var $jq = jQuery.noConflict();

app.controller('RefCtrl', ['refService', function(refService) {
	//code for adding/editing referrals goes here.
	var self = this;
	self.refs = [
				  {ref: "bologna", clicks: 132}, 
				  {ref: "ham", clicks: 90}
				];

	//adds referral to the table and creates a splash page for it.
	self.addReferral = function() {
		console.log(self.refs[0]);
		self.refs.push({ref: self.newRef, clicks: 0});
	};

	self.updateClicks = function(i) {
		self.refs[i].clicks++;
	};

}]);