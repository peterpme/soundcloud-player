soundcloudPlayer.ng.directive('scPlayer', ['$log', '$http', function ($log, $http) {

	return {
		restrict: 'A',
		link: function (scope, element) {
			$log.info('[player-directive] init');
		}
	}
}]);
