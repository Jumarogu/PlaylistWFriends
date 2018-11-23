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

    if (req.body.access_token != null) {

        let access_token = req.body.access_token;
        spotifyApi.setAccessToken(access_token);
        var user_info = {};
        var playlist_info = {};
        playlist_info.playlistCode = req.body.playlistCode;
        playlist_info.playlistName = req.body.playlistName;

        console.log("saving this playlist " + JSON.stringify(playlist_info));
        MongoClient.connect(uri, function (err, client) {
            const userCollections = client.db("PWF").collection("users");
            let query = { "playlistCode": playlist_info.playlistCode };
            userCollections.find(query, (err, result) => {
                assert.equal(err, null);

                console.log("Users obtained : " + result);
                res.status(200).json(playlist_info);
            });

            client.close();

            spotifyApi.getMe()
                .then(function (data) {

                    return spotifyApi.createPlaylist(data.body.id, playlist_info.playlistName);
                })
                .then(function (data) {
                    console.log('Created playlist!');
                    console.log(data.body.id)

                    var tracks = [
                        "spotify:track:0Dx2JcexaaBU11URKp9Fc1",
                        "spotify:track:26O9tv2zKANc81Y5SirfGR",
                        "spotify:track:0Dx2JcexaaBU11URKp9Fc1",
                        "spotify:track:0b9oOr2ZgvyQu88wzixux9",
                        "spotify:track:5I2I0xdHPV5opTDQbItBIb",
                        "spotify:track:2R6EI6ZxRmbmYLxEAJ8xXy",
                        "spotify:track:7p4vHnYXkxlzvfePJVpcTr",
                        "spotify:track:5pqbHlHaVbkHJQlsAxhcZM",
                        "spotify:track:24hYr62Cz2iA3OOef8mykI",
                        "spotify:track:6ooluO7DiEhI1zmK94nRCM",
                        "spotify:track:4DjKitOkJwvIEyTJ3Wf8aq",
                        "spotify:track:32Z54yyOInrL7bAk2ZRN2d",
                        "spotify:track:6rPO02ozF3bM7NnOV4h6s2",
                        "spotify:track:32Z54yyOInrL7bAk2ZRN2d",
                        "spotify:track:7bBpGRaS4C1JPc1Zbznr1l",
                        "spotify:track:2iUb7DLswcEXEmsdD878no",
                        "spotify:track:6UB1IP6ALsh3IiIjR7pRLQ",
                        "spotify:track:6t1ahr2f1t9iSjjNFwFb4C",
                        "spotify:track:0vek0LcCbvcMtj0GkXMMJy",
                        "spotify:track:36fRbuu9QkKVDR1j7jTI2U",
                        "spotify:track:3oc0WKqkvQ09FZ4v2TuRbL",
                        "spotify:track:1Sflldtq2pKUti6YgRZlVL",
                        "spotify:track:2NRhy2p5nQkv62kaec3BW6",
                        "spotify:track:1T1nhNsVBnLCkaXITIa0yR",
                        "spotify:track:0KYfHlslHwvs621CH3QXmb",
                        "spotify:track:7FxidSR6IoL3qMRXxFJ8pd",
                        "spotify:track:6GM7WCa0accugI9b2JTeix",
                        "spotify:track:0o9bHFc8Lt5tZFvTjNZTNf",
                        "spotify:track:3NPU6Eeb74wV7hKxJh2Tmi",
                        "spotify:track:2FeYMsUt4MxZ6piYJzT7m8",
                        "spotify:track:4ut5G4rgB1ClpMTMfjoIuy",
                        "spotify:track:6KaJLqnny3gq5ko8chc0Ot",
                        "spotify:track:0jvqmWRCyv7xnxqrtinbHJ",
                        "spotify:track:5VGBgPVFO3e0lWz4WHYntQ",
                        "spotify:track:5TvR8PSrBTOvD1M4S38UiD",
                        "spotify:track:4hXAdUl4nAnSPc9thzP2E2",
                        "spotify:track:1XM5PgxjpYcF0JuE9nfUbS",
                        "spotify:track:0fl1Y7GXXbcLuj2mBPtG26",
                        "spotify:track:4XqMDUQwscbottVP49z8xk",
                        "spotify:track:04cd1MHVq1D8v1nuTZoCdv",
                        "spotify:track:3SVQEFpdK9DirVsjmsTx7F",
                        "spotify:track:1juHIWqgFiDFAKuEBP24Lt",
                        "spotify:track:4iCJFRTRsFlj4UWoEd7bS9",
                        "spotify:track:514rhnksEwHUh6LxXsQ4Y9",
                        "spotify:track:4rIAqwhHGfWChQvQGYwEfR",
                        "spotify:track:0uolNhegIkj0Q5YBeZ1Yq2",
                        "spotify:track:4txQPJDlvU72lC6EMhT7m9",
                        "spotify:track:17LxkTp8UNbPcYrDrI6UOq",
                        "spotify:track:1XMH0iJVL75w59aeEMrWbf",
                        "spotify:track:7CLxRXy3olj2KngFWAEIcg",
                        "spotify:track:1s2B5cndbqK8rPJEIcKJRQ",
                        "spotify:track:19XDJlw6WxC4XOKC1LGKid",
                        "spotify:track:3za3hxbolwmy9AeUpWzuRE",
                        "spotify:track:2WpmqBXawkgV7lBXGibukq",
                        "spotify:track:4XIIC3Tnkr8Lt7TYmMxge0",
                        "spotify:track:5hnKUHsAP86WIDnrYSAjnv",
                        "spotify:track:6PZraXLVqn18HrwCf9fdzH",
                        "spotify:track:4UiXyvd4B8YYIJ7YuoJdSR",
                        "spotify:track:4GNBJYRTHfXqRCNa5mpTC2",
                        "spotify:track:6WSAPEkvEfcEUgSTAo1D3S",
                        "spotify:track:2JTnUodS7lDVgZZcOa0bAk",
                        "spotify:track:0n30h31bEKiIHXXzPbkdqy",
                        "spotify:track:6AvfZXpbb6r35DfF7gHPRq",
                        "spotify:track:2v9xrKYqryviolUz839pXV",
                        "spotify:track:5x1LG9t7txKjWIz9N9dFWB",
                        "spotify:track:7KKiG1SG4pHKITVAXSh6tB",
                        "spotify:track:6PZraXLVqn18HrwCf9fdzH",
                        "spotify:track:1j6xOGusnyXq3l6IryKF3G",
                        "spotify:track:1s2B5cndbqK8rPJEIcKJRQ",
                        "spotify:track:17LxkTp8UNbPcYrDrI6UOq",
                        "spotify:track:3xcCix7Jv1Rp90YVmgo35D",
                        "spotify:track:43jclIPKJv9iFiYWVyWqsb",
                        "spotify:track:1AVu7Kc2MRrLfOG1RCEf07",
                        "spotify:track:3ee8Jmje8o58CHK66QrVC2",
                        "spotify:track:2G7V7zsVDxg1yRsu7Ew9RJ",
                        "spotify:track:33b2wX9d0kxqxhi7lcsC1A",
                        "spotify:track:2E124GmJRnBJuXbTb4cPUB",
                        "spotify:track:1nfyE13arjOuO54HH0zmqj"


                    ]

                    function shuffle(array) {
                        var currentIndex = array.length, temporaryValue, randomIndex;

                        // While there remain elements to shuffle...
                        while (0 !== currentIndex) {

                            // Pick a remaining element...
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;

                            // And swap it with the current element.
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }

                        return array;
                    }

                    newTracks = shuffle(tracks)
                    topTracks = newTracks.slice(1, 51);

                    // Add tracks to a specific position in a playlist
                    spotifyApi.addTracksToPlaylist(data.body.id, topTracks)
                        .then(function (data) {
                            console.log('Added tracks to playlist!');
                        }, function (err) {
                            console.log('Something went wrong!', err);
                        });

                }, function (err) {

                });

        })

        // go trough each user searching the playlistcode match
        // primer filtro save everysong with 'popularity > 55'
        // create playlist on spotify
        // put songs on playlist


    } else {
        res.status(400).json({ 'message': 'bad request, no params recibed' });
    }
}