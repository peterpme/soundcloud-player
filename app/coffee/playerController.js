soundcloudPlayer.ng.controller 'playerController', [
	"$scope"
	"$http"
	"$log"
	($scope, $http, $log) ->

		$log.info "[playerCtrl] Loaded"

		$scope.clientId = '6aeca16577b6acfd3e76ab35ac241d81'
		$scope.url = 'http://api.soundcloud.com/tracks.json?q='

		$scope.currentIndex = 0

		$scope.formSubmitted = false
		$scope.formSuccess = false
		$scope.status = null

		$scope.data = {}
		$scope.trackList = []

		audioPlayer = document.getElementsByTagName("audio")[0]

		$scope.init = ( ->
			SC.initialize client_id: $scope.clientId
			)()

			$scope.submitForm = ->
				$scope.currentIndex = 0
				$scope.formSubmitted = true
				$scope.encodedString = encodeURI($scope.searchQuery)

				$scope.querySoundcloud()

		$scope.querySoundcloud = ->
			$http.jsonp($scope.url + $scope.encodedString + "&client_id=" + $scope.clientId + "&callback=JSON_CALLBACK")
			.success($scope.processSoundcloudData)
			.error (data, status) ->
        		$scope.data = data or "Request Failed"
        		$scope.status = status

        $scope.processSoundcloudData = (data) ->
        	$scope.formSuccess = true
      		$scope.data = data

     		$scope.data.forEach (track) ->
        		uri = track.uri + "/stream?client_id=" + $scope.clientId
        		$scope.trackList.unshift
          			title: track.title
          			uri: uri

          	$scope.addTrackToPlayer()


        $scope.nextSong = ->
        	++scope.currentIndex

        $scope.addTrackToPlayer = ->
        	$log.error  $log.error "[playerCtrl] Song Forward"
        	audioPlayer.setAttribute "src", $scope.trackList[$scope.currentIndex].uri

        $scope.addEventListener "error", (e) ->
        	$log.error "[playerCtrl] Song Error"
      		$scope.$apply $scope.nextSong()
      		$scope.addTrackToPlayer()

      	$scope.addEventListener "ended", (e) ->
      		$log.info "[playerCtrl] Song Ended"
     		$scope.$apply $scope.nextSong()
      		$scope.addTrackToPlayer()

]
