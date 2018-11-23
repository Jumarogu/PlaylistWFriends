var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var SpotifyWebApi = require('spotify-web-api-node');

var create_routes = require('./routes/create.routes');
var join_routes = require('./routes/join.routes');
var get_routes = require('./routes/get.route');

var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();

app.use(cors());
app.options('*', cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CreatePlaylist actions
router.post('/api/create', create_routes.createPlaylist);

// JoinPlaylist actions
router.post('/api/join', join_routes.joinPlaylist);

// GetPlaylist actions
router.post('/api/get', get_routes.savePlaylist);

app.use('/', router);

app.listen(port);
console.log('server running on port ' + port);