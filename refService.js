var app = angular.module('refApp');

app.factory('refService', function() {

	var refs = [
				{ref: "bologna", clicks: 132}, 
				{ref: "ham", clicks: 90},
				{ref: "cheese", clicks: 23}
			   ];

	return {
		getRefs : function() {
			return refs;
		},

		addRef: function(ref) {
			refs.push(ref);
		},

		editRef: function(index, edit) {
			refs[index].ref = edit;
		},

		removeRef: function(index) {
			refs.splice(index, 1);
		},

		refs: refs
	}

});