module.exports = function (mongoose) {
  const artistSchema = mongoose.Schema({
    name: {
      type: String
    },
    genre: {
      type: String
    },
    artistId: {
      type: Number
    }
  }, {
    timestamps: true
  });

  return artistSchema;
}
