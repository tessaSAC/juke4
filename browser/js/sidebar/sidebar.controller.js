'use strict';

juke.controller('SidebarCtrl', function ($scope, PlaylistFactory) {

  // nothing to see here for now… state transitions happening with ui-sref!

   PlaylistFactory.listPlaylists()
   .then(function(playlists) {
   	$scope.allPlaylists = playlists;   });


});
