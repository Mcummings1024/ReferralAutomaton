var app = angular.module('refApp');

app.factory('refService', function() {

	var refs = [
				{ref: "bologna", clicks: 132}, 
				{ref: "ham", clicks: 90}
			   ];

	return {
		getRefs : function() {
			return refs;
		},

		addRef: function(ref) {
			refs.push(ref);
		},

		removeRef: function(index) {
			refs.splice(index, 1);
		},

		refs: refs
	}

});