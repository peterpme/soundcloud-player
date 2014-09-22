soundcloudPlayer.ng.controller('playerController', ['$scope', '$http', '$log', function ($scope, $http, $log) {
	$log.info('[playerController] Controller Loaded');

	$scope.clientId = '6aeca16577b6acfd3e76ab35ac241d81';
	$scope.url = 'http://api.soundcloud.com/tracks.json?q=';
	$scope.trackList = [];
	$scope.data = {};

	$scope.formSubmitted = false;
	$scope.formSuccess = false;

	$scope.init = (function () {
		$log.info('[player-controller] initialized');

		SC.initialize({
			client_id: $scope.clientId
		});

		SC.stream("/tracks/293", function(sound){
			sound.play();
		});

	})();

	$scope.submitForm = function () {
		$scope.formSubmitted = true;
		$scope.encodedString = encodeURI($scope.category);
		$scope.querySoundcloud();
	};

	$scope.lockForm = function () {
		$scope.disableForm = true;
		angular.element('input, button').attr('disabled', 'disabled');
	}

	$scope.unlockForm = function () {
		$scope.disableForm = false;
		angular.element('input, button').removeAttr('disabled');
	}

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

			$log.info($scope.trackList);
		});

		$scope.addTrackToPlayer();
	};

	$scope.addTrackToPlayer = function () {
		var audio = $scope.trackList;
		console.log(audio);
		var audioBox = document.getElementsByTagName('audio');

		audioBox[0].setAttribute('src', audio);
	};

}]);
