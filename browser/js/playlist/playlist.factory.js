juke.factory('PlaylistFactory', function ($http){
	var PlaylistFactory = {};

	PlaylistFactory.create = function (data){
		return $http.post('/api/playlists', data)
		.then(function (response) {
			return response.data;
		});
	};

	return PlaylistFactory;
});