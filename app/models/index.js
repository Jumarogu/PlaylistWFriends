'use strict';

var mongoose = require('mongoose');

var port = process.env.DB_PORT || '27017';
var host = process.env.DB_HOST || 'db';
var mongo_pass = process.env.MONGO_PASSWORD || '';
var mongo_user = process.env.MONGO_USERNAME || '';
var mongo_db = process.env.MONGO_DATABASE || '';

var url = 'mongodb://' + mongo_user + ':' + mongo_pass + '@' + host + ':' + port + '/' + mongo_db;
/**
 * Initialize the connection.
 * @method init
**/
mongoose.connect(url, {
    server: {
        autoReconnect: true,
        reconnectTries: 30,
        reconnectInterval: 1000
    }
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to MongoDB to: " + url);
});

var userSchema = require('./user')(mongoose);
var playlistSchema = require('./playlist')(mongoose);
// var songSchema = require('./song')(mongoose);
// var artistSchema = require('./artist')(mongoose);
// var albumSchema = require('./album')(mongoose);


var User = mongoose.model('User', userSchema);
var Playlist = mongoose.model('Playlist', playlistSchema);
// var Song = mongoose.model('Song', songSchema);
// var Album = mongoose.model('Album', artistSchema);
// var Artist = mongoose.model('Artist', albumSchema);

exports.User = User;
exports.Playlist = Playlist;
// exports.Song = Song;
// exports.Album = Album;
// exports.Artist = Artist;