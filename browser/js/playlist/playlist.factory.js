juke.factory('PlaylistFactory', function ($http){
	let PlaylistFactory = {},
		cachedPlaylists = [];

	PlaylistFactory.listPlaylists = function() {
		return $http.get('/api/playlists')
		.then(function(response) {
			angular.copy(response.data, cachedPlaylists);
			return cachedPlaylists;
		});
	};

	PlaylistFactory.fetchById = function(id){
		return $http.get('/api/playlists/' + id)
		.then(function (response){
			return response.data;
		});
	};

	PlaylistFactory.create = function (data){
		return $http.post('/api/playlists', data)
		.then(function (response) {
			let playlist = response.data;
			cachedPlaylists.push(playlist);
			return playlist;
		});
	};

	PlaylistFactory.addSongToPlaylist = function(playlistId, data){
		console.log("Hi Ashley!", playlistId, data);
		return $http.post('/api/playlists/' + playlistId + '/songs', data)
		.then(function(response) {
			let currentCachedPlaylist;
			cachedPlaylists.forEach((playlist) => {
				if (playlist.id === playlistId) currentCachedPlaylist = playlist;
			});

			currentCachedPlaylist.cachedSongsArray = currentCachedPlaylist.cachedSongsArray || [];

			currentCachedPlaylist.cachedSongsArray.push(response.data);

			console.log(currentCachedPlaylist);
			return response.data;
		});
	};

	return PlaylistFactory;
});
