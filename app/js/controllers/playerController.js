soundcloudPlayer.ng.controller('playerController', ['$scope', '$http', '$log', function ($scope, $http, $log) {
	$log.info('[playerCtrl] Loaded');

	$scope.clientId = '6aeca16577b6acfd3e76ab35ac241d81';
	$scope.url = 'http://api.soundcloud.com/tracks.json?q=';

	$scope.data = {};
	$scope.trackList = [];
	$scope.currentIndex = 0;

	$scope.formSubmitted = false;
	$scope.formSuccess = false;
	$scope.status = null;

	var audioPlayer = document.getElementsByTagName('audio')[0];

	/**
  	* Initializes Soundcloud
  	* @return {undefined}
  	*/
	$scope.init = (function () {

		try {
			SC.initialize({
				client_id: $scope.clientId
			});
		} catch (e) {
			$log.error(e);
		}

	})();

	/**
  	* Resets currentIndex, encodes search query and initiates request to soundcloud
  	* @return {undefined}
  	*/
	$scope.submitForm = function () {
		$scope.currentIndex = 0;
		$scope.formSubmitted = true;
		$scope.encodedString = encodeURI($scope.searchQuery);

		$scope.querySoundcloud();
	};

	/**
  	* Queries Soundcloud
  	* @return {undefined}
  	*/
	$scope.querySoundcloud = function () {

		$http.jsonp($scope.url + $scope.encodedString + '&client_id=' + $scope.clientId + '&callback=JSON_CALLBACK').
		success($scope.processSoundcloudData).
		error (function (data, status) {
			$scope.data = data || "Request Failed";
			$scope.status = status;
		});
	};

	/**
  	* Unshifts requested Soundcloud data to $scope.trackList array
  	* @param {Object} data
  	* @return {undefined}
  	*/
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

	/**
  	* Increases currentIndex by 1
  	* @return {undefined}
  	*/
	$scope.nextSong = function () {
		++$scope.currentIndex;
	};

	/**
  	* Updates Audio src attribute
  	* @return {undefined}
  	*/
	$scope.addTrackToPlayer = function () {
		$log.info('[playerCtrl] Song Forward');
		audioPlayer.setAttribute('src', $scope.trackList[$scope.currentIndex].uri);
	};

	/**
  	* Event Listener for Audio Song Error
  	* @return {undefined}
  	*/
	audioPlayer.addEventListener('error', function (e) {
		$log.error('[playerCtrl] Song Error');

		$scope.$apply($scope.nextSong());
		$scope.addTrackToPlayer();
	});

	/**
  	* Event Listener for Audio Song End
  	* @return {undefined}
  	*/
	audioPlayer.addEventListener('ended', function (e) {
		$log.info('[playerCtrl] Song Ended');

		$scope.$apply($scope.nextSong());
		$scope.addTrackToPlayer();
	});

}]);
