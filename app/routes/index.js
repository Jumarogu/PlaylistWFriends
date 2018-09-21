const express = require('express');
const router = express.Router();
var userController = require('../controllers/user_controller.js');

router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post("/createBlank", playlistController.createBlank);
router.post("/join", playlistController.join);
router.post("/generate", playlistController.generate);
router.get("/getOne", playlistController.getOne);

module.exports = router;
