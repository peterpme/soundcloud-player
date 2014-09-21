soundcloudPlayer.ng.controller('playerController', ['$scope', '$http', '$log', function ($scope, $http, $log) {

	$log.info('[player-controller] init');

	$scope.clientId = '6aeca16577b6acfd3e76ab35ac241d81';
	$scope.searchTerm = 'Deep House';
	$scope.results = [];
	$scope.init = function () {
		$log.info('init');

		SC.initialize({
			client_id: $scope.clientId
		});

		$http.jsonp('https://api.soundcloud.com/tracks.json?q=DEEP_HOUSE&client_id=' + $scope.clientId + '&callback=JSON_CALLBACK')
		.success( function (data) {
			$log.info(data, data.genre, data.title);

			data.forEach(function (i) {
				$scope.results.push({
					title: i.title,
					genre: i.genre
				})
			});

			$log.info('results', $scope.results);

		});
	}

	$scope.init();

}]);
