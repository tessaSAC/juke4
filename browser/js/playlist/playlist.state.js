/* global juke */

'use strict';

juke.config(function ($stateProvider) {
	$stateProvider.state('newPlaylist', {
		url: '/playlists/new',
		templateUrl: '/js/playlist/playlistInput.template.html',
		controller: 'PlaylistFormController'
	});
});

juke.config(function ($stateProvider) {
	$stateProvider.state('singlePlaylist', {
		url: '/playlists/:playlistId',
		templateUrl: '/js/playlist/singlePlaylist.template.html',
		controller: 'SinglePlaylistController'
	});
})