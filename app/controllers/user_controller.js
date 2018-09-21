var models = require('../models');

exports.index = function(req, res, next) {
    models.User.find({}, function(err, usersFound) {
        res.render('users/index', {
            title: 'All Users',
            users: usersFound
        });
    });
}