module.exports = function (mongoose) {
  const songSchema = mongoose.Schema({
    name: {
      type: String
    },
    genre: {
      type: String
    },
    songId: {
      type: Number
    }
  }, {
      timestamps: true
  });

  return songSchema;
}
