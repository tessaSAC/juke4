/* global juke */
'use strict';

// PLAYLIST FORM CONTROLLER

juke.controller('PlaylistFormController', function($scope, PlaylistFactory) {
	$scope.createPlaylist = function(playlistInput) {
		var newPlaylist = {
			name: playlistInput
		};
		PlaylistFactory.create(newPlaylist);
		console.log("You created a new playlist", newPlaylist);
		$scope.playlistInputForm.$setPristine();
		$scope.playlistInputForm.playlistNameInput.$touched = false;
		$scope.playlistInput = "";
	};
});