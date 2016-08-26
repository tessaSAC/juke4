/* global juke */

'use strict';

juke.config(function ($stateProvider) {
	$stateProvider.state('newPlaylist', {
		url: '/playlists/new',
		templateUrl: '/js/playlist/playlist.template.html',
		controller: 'PlaylistFormController'
	});
});