var SpotifyWebApi = require('spotify-web-api-node');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var uri = "mongodb+srv://jumarogu:rooster@cluster0-vxv1v.mongodb.net/PWF?retryWrites=true";

var spotifyApi = new SpotifyWebApi({
    clientId: 'be2a413e2bbd402db45432d7ccdf0199',
    clientSecret: 'aa634b8aaac3420ea1056e6a533d939e',
    redirectUri: 'http://localhost:4200/show-code'
  });

exports.joinPlaylist = (req, res) => {

    var access_token = req.body.access_token;
    spotifyApi.setAccessToken(access_token);

    var playlistCode = req.body.playlistCode;
    var playlis_info = {};
    var user_info = {};

    MongoClient.connect(uri, function(err, client) {    
        const playlistCollection = client.db("PWF").collection("playlist");

        let query = {'playlistCode': playlistCode}
        playlistCollection.findOne(query, (err, result) => {
            assert.equal(err, null);
            
            playlis_info = result;
            console.log(" the playlist was fownd : " + result);
        });
        client.close();

        spotifyApi.getMe()
        .then((data) => {

            user_info.id = data.body.id;
            user_info.display_name = data.body.display_name;
            user_info.playlistCode = playlis_info.playlistCode;

            return spotifyApi.getMyTopTracks({limit:50});
        })
        .then( (data) => {
            console.log(data);
            let topTracks = data.body.items;
            user_info.topTracks = topTracks;

            MongoClient.connect(uri, function(err, client) {    
                const userCollections = client.db("PWF").collection("users");
        
                userCollections.insertOne(user_info, (err, result) => {
                    assert.equal(err, null);

                    console.log("User added to the playlist : " + result);
                    res.status(200).json(playlis_info);
                });
                client.close();
            })
        })
        .catch((err) => {
            console.log(err);
        })
    })
}
