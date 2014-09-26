soundcloudPlayer.ng.controller('playerController', ['$scope', '$http', '$log', function ($scope, $http, $log) {
	$log.info('[playerController] Ctrl Loaded');

	$scope.clientId = '6aeca16577b6acfd3e76ab35ac241d81';
	$scope.url = 'http://api.soundcloud.com/tracks.json?q=';
	$scope.trackList = [];
	$scope.data = {};
	$scope.currentIndex = 0;

	$scope.formSubmitted = false;
	$scope.formSuccess = false;
	$scope.status = null;

	var audioPlayer = document.getElementsByTagName('audio')[0];

	$scope.init = (function () {
		SC.initialize({
			client_id: $scope.clientId
		});

	})();

	$scope.submitForm = function () {
		$scope.formSubmitted = true;
		$scope.encodedString = encodeURI($scope.searchQuery);

		$scope.querySoundcloud();
	};

	$scope.querySoundcloud = function () {

		$http.jsonp($scope.url + $scope.encodedString + '&client_id=' + $scope.clientId + '&callback=JSON_CALLBACK').
		success($scope.processSoundcloudData).
		error (function (data, status) {
			$scope.data = data || "Request Failed";
			$scope.status = status;
		});
	};

	$scope.processSoundcloudData = function(data) {
		$scope.formSuccess = true;
		$scope.data = data;

		$scope.data.forEach (function (track) {
			var uri = track.uri + '/stream?client_id=' + $scope.clientId;

			$scope.trackList.unshift({
				title: track.title,
				uri: uri
			});
		});

		$scope.addTrackToPlayer();
	};

	$scope.addTrackToPlayer = function () {
		audioPlayer.setAttribute('src', $scope.trackList[$scope.currentIndex].uri);
	};

	audioPlayer.addEventListener('error', function (e) {
		$scope.nextSong();
		$scope.addTrackToPlayer();
	});

	audioPlayer.addEventListener('ended', function (e) {
		$log.info('[playerCtrl] Song Ended');

		$scope.nextSong();
		$scope.addTrackToPlayer();
	});

	$scope.nextSong = function () {
		++$scope.currentIndex;
	};

}]);
