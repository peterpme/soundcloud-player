soundcloudPlayer.ng.controller('playerController', ['$scope', '$http', '$log', function ($scope, $http, $log) {
	$log.info('[playerController] Controller Loaded');

	$scope.clientId = '6aeca16577b6acfd3e76ab35ac241d81';
	$scope.url = 'http://api.soundcloud.com/tracks.json?q=';
	$scope.trackList = [];
	$scope.data = {};
	$scope.currentIndex = 0;

	$scope.formSubmitted = false;
	$scope.formSuccess = false;

	$scope.init = (function () {
		$log.info('[player-controller] initialized');

		SC.initialize({
			client_id: $scope.clientId
		});

	})();

	$scope.submitForm = function () {
		$scope.formSubmitted = true;
		$scope.encodedString = encodeURI($scope.category);
		$scope.querySoundcloud();
	};

	$scope.querySoundcloud = function () {

		$http.jsonp($scope.url + $scope.encodedString + '&client_id=' + $scope.clientId + '&callback=JSON_CALLBACK')
		.success(function (data) {

			$scope.formSuccess = true;
			$scope.data = data;

			$scope.data.forEach (function (track) {
				$scope.trackList.push({
					title: track.title,
					uri: track.uri + '/stream?client_id=' + $scope.clientId
				})
			});
			$scope.addTrackToPlayer();

		});
	};

	$scope.addTrackToPlayer = function () {
		var audioPlayer = document.getElementsByTagName('audio');
		audioPlayer[0].setAttribute('src', $scope.trackList[$scope.currentIndex].uri);
		audioPlayer[0].play();

		audioPlayer[0].addEventListener('error', function (e) {
			audioPlayer[0].setAttribute('src', $scope.trackList[++$scope.currentIndex].uri);
			audioPlayer[0].play();
		});
	};

	$scope.updateIndex = function () {
		$scope.currentIndex ++;
	}

}]);
