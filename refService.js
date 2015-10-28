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

		addRefs: function(ref) {
			console.log('adding ref');
			refs.push(ref);
		},

		refs: refs
	}

});