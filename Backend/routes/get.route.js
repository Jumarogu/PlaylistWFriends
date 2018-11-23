var SpotifyWebApi = require('spotify-web-api-node');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var uri = "mongodb+srv://jumarogu:rooster@cluster0-vxv1v.mongodb.net/PWF?retryWrites=true";

var spotifyApi = new SpotifyWebApi({
    clientId: 'be2a413e2bbd402db45432d7ccdf0199',
    clientSecret: 'aa634b8aaac3420ea1056e6a533d939e',
    redirectUri: 'http://localhost:4200/show-code'
  });

exports.savePlaylist = (req, res) => {
    
    if(req.body.access_token != null) {

        let access_token = req.body.access_token;
        spotifyApi.setAccessToken(access_token);
        var user_info = {};
        var playlist_info = {};
        playlist_info.playlistCode = req.body.playlistCode;
        playlist_info.playlistName = req.body.playlistName;

        console.log("saving this playlist " + JSON.stringify(playlist_info));
        MongoClient.connect(uri, function(err, client) {    
            const userCollections = client.db("PWF").collection("users");
            let query = {"playlistCode": playlist_info.playlistCode};
            userCollections.find(query, (err, result) => {
                assert.equal(err, null);

                console.log("Users obtained : " + result );
                res.status(200).json(playlist_info);
            });

            client.close();

            spotifyApi.getMe()
            .then(function(data) {

                return spotifyApi.createPlaylist(data.body.id, playlist_info.playlistName);
            })
            .then(function(data) {
                console.log('Created playlist!');
                console.log(data.body.id)

                arraySongs = ["spotify:track:26O9tv2zKANc81Y5SirfGR",3]

// Add tracks to a specific position in a playlist
spotifyApi.addTracksToPlaylist(data.body.id, ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"])
  .then(function(data) {
    console.log('Added tracks to playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

            }, function(err) {

            });
            
        })

        // go trough each user searching the playlistcode match
        // primer filtro save everysong with 'popularity > 55'
        // create playlist on spotify
        // put songs on playlist


    } else {
        res.status(400).json({'message': 'bad request, no params recibed'});
    }
}