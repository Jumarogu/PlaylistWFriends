var { User, Playlist } = require('../models');

exports.createBlank = (req, res, next) => {
  Playlist.create({}).then().catch();
}

exports.join = (req, res, next) => {
  Playlist.update({}).then().catch();
}

exports.generate = (req, res, next) => {
  Playlist.findOne({}).then().catch();
}

exports.getOne = (req, res, next) => {
  Playlist.findOne({}).then().catch();
}