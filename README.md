# Soundcloud Player

## About

Minimally interfaced Soundcloud playlist generator. Type in a song and it will generate a 20 track playlist and automatically starts playing your music.

- [Soundcloud API](https://developers.soundcloud.com/docs/api)
- [AngularJS](https://angularjs.org/)
- [SCSS](http://sass-lang.com/)
- [Heroku](http://heroku.com)

## Improvements:
- Decoupling callback inside querySoundcloud and creating a separate function
- Cleaning up code inside addTrackToPlayer / updateIndex functions
- Add complete commenting
- Getting rid of JSONP, letting Node handle that request, and requesting data from the Node server instead
- Better approach for changing songs (Looking into HTML5 Audio API)
- Figuring out why "Deep House" is a broken query
- Coffescript all the things
- Better styling

## Updates 
- Better styling added with cool purple theme
- Better eventbus using audio element (changing songs on end, error)
- Fixed `deep house` query by encoding URI
- Decoupled success callback
- Cleaned up several functions, better flow of code
- Coffeescript (untested)

## Future Thoughts
- Adding authentication and creating playlists based on favorite tracks (and saving those playlists to your account)

## Heroku URL:
- [scplayer.herokuapp.com](http://scplayer.herokuapp.com)
