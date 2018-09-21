module.exports = function (mongoose) {
  const albumSchema = mongoose.Schema({
    name: {
      type: String
    },
    genre: {
      type: String
    },
    albumId: {
      type: Number
    }
  }, {
    timestamps: true
  });

  return albumSchema;
}
