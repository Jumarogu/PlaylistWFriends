var SpotifyWebApi = require('spotify-web-api-node');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var uri = "mongodb+srv://jumarogu:rooster@cluster0-vxv1v.mongodb.net/PWF?retryWrites=true";

var spotifyApi = new SpotifyWebApi({
    clientId: 'be2a413e2bbd402db45432d7ccdf0199',
    clientSecret: 'aa634b8aaac3420ea1056e6a533d939e',
    redirectUri: 'http://localhost:4200/show-code'
  });

exports.createPlaylist = (req, res) => {
    
    if(req.body.access_token != null) {

        let access_token = req.body.access_token;
        spotifyApi.setAccessToken(access_token);
        var user_info = {};
        var playlist_info = {};

        spotifyApi.getMe()
            .then(function(data) {

                user_info.id = data.body.id;
                user_info.display_name = data.body.display_name;
                user_info.playlistCode = generateRandomString(8);

                playlist_info.playlistCode = user_info.playlistCode;
                playlist_info.user_id = user_info.id;
                playlist_info.user_name = user_info.display_name;
                playlist_info.users = [user_info];
                
                MongoClient.connect(uri, function(err, client) {    
                    const playlistCollection = client.db("PWF").collection("playlist");

                    playlistCollection.insertOne(playlist_info, (err, result) => {
                        assert.equal(err, null);
                        
                        console.log("Inserted the playlist : " + playlist_info.playlistCode);
                    });
                    client.close();
                })
                return spotifyApi.getMyTopTracks({limit:50});
            })
            .then((data) => {
                console.log("Top Track: ", data.body.items);

                MongoClient.connect(uri, function(err, client) {
                    const userCollection = client.db("PWF").collection("users");
                    let topTracks = data.body.items;

                    user_info.topTracks = topTracks;

                    userCollection.insertOne(user_info, (err, result) => {
                        assert.equal(err, null);
                        
                        console.log("Inserted the object : " + result);
                    });
                    client.close();
                })
                res.status(201).json(playlist_info);
            })
            .catch((error)=> {
                console.error(error);
            })
    } else {
        res.status(400).json({'message': 'bad request, no params recibed'});
    }
}

var generateRandomString = (length) => {
    var code = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      code += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return code;
  };