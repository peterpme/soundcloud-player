soundcloudPlayer.ng.directive('scPlayer', ['$log', function ($log) {
	var clientId = '6aeca16577b6acfd3e76ab35ac241d81';

return {
	restrict: 'A',
	link: function (scope, element) {
		$log.info('[player] init');
	}
}
}]);
