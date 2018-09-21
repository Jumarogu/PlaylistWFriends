module.exports = function (mongoose) {
  var userSchema = require('./user')(mongoose);

  const playlistSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    creatorId: {
      type: Number,
      required: true
    },
    users: [{
      type: userSchema,
      required: true
    }]
  }, {
    timestamps: true
  });

  return playlistSchema;
}
