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
- Decopling callback inside querySoundcloud and creating a separate function
- Cleaning up code inside addTrackToPlayer / updateIndex functions
- Add complete commenting
- Getting rid of JSONP, letting Node handle that request, and requesting data from the Node server instead
- Better approach for changing songs (Looking into HTML5 Audio API)
- Figuring out why "Deep House" is a broken query
- Coffescript all the things
- Better styling

## Future Thoughts
- Adding authentication and creating playlists based on favorite tracks (and saving those playlists to your account)

## Heroku URL:
- [scplayer.herokuapp.com](http://scplayer.herokuapp.com)
