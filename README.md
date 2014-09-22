# Soundcloud Player

## About

This coding challenge for Trunk Club Engineering will utilize my abilities as a UI Engineer. The challenge is to create a minimally interfaced soundcloud player. 

## Tooling

I will be utilizing the following:

- [Soundcloud API](https://developers.soundcloud.com/docs/api)
- [AngularJS](https://angularjs.org/)
- [SCSS](http://sass-lang.com/)
- [Heroku](http://heroku.com)


## Thoughts & Setup

- The application will ask for a certain category of music. Whether this is a dropdown or search feature I haven't decided yet. For the sake of the 4 hour time slot, I might go with a dropdown to focus more on the core development.

- Music will be controlled by a large centrally located play button. Very minimal theme. The potential to add control {back, foward} buttons may be a possibility as well

I do not have much experience with Coffeescript, but I understand Trunk Club utilizes it for all of their projects, so I will challenge myself by writing this in Coffeescript as well.

Timed Challenge of `4 hours`


## Issues:
- There are tracks that will not play, because of some sort of Soundcloud licensing. **If there's a track error, audio element will go to next song**
- For some reason, you can't query "deep house", but "hip hop", "house music", "punk rock" all seem to work..


## Improvements:
- Authenticating and adding songs to a playlist.
- I need to decouple the callback under querySoundcloud and create separate functions out of them.
- Ideally, I shouldn't be using JSONP. I should let the Node server handle that request, and I will request the data from the server instead.
- Better system for changing songs.
- Reload player and append NEW query when searching for a new playlist
- Still need coffeescript

## Heroku URL:
- [scplayer.herokuapp.com](http://scplayer.herokuapp.com)
