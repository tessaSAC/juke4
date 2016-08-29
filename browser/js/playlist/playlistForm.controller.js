/* global juke */
'use strict';

// PLAYLIST FORM CONTROLLER

juke.controller('PlaylistFormController', function($scope, PlaylistFactory, $state) {
	$scope.createPlaylist = function(playlistInput) {
		var createdList;
		var newPlaylist = {
			name: playlistInput
		};

		PlaylistFactory.create(newPlaylist)
		.then(function(playlist){
			$state.go('singlePlaylist', {playlistId: playlist.id});
		});
		$scope.playlistInputForm.$setPristine();
		$scope.playlistInputForm.playlistNameInput.$touched = false; // alt: $setUntouched
		$scope.playlistInput = "";
	};
});


//  SINGLE PLAYLIST FORM CONTROLLER

juke.controller('SinglePlaylistController', function($scope, PlaylistFactory, SongFactory, $stateParams){
	PlaylistFactory.fetchById($stateParams.playlistId)
	.then(function(playlist){
		$scope.singlePlaylist = playlist;
	});

	$scope.addSong = PlaylistFactory.addSongToPlaylist;

	SongFactory.fetchAll()
	.then(function (songs){
		$scope.songs = songs;
	});
});