var app = angular.module('refApp');

app.factory('refService', function() {

	var refs = [];

	return {
		getRefs : function() {
			return refs;
		},

		refs: refs
	}

});