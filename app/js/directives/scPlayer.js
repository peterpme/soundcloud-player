soundcloudPlayer.ng.directive('scPlayer', ['$log', function ($log) {
	var clientId = '6aeca16577b6acfd3e76ab35ac241d81';

	(function init() {
		SC.initialize({
			client_id: clientID;
		})
		.get('/tracks', {
			q: 'deep house'
		}, function (tracks) {
			$log.info('Tracks:', tracks);
		});
	})();

return {
	restrict: 'A',
	link: function (scope, element) {
		$log.info('[player] init');
	}
}
}]);
