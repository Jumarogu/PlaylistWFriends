module.exports = function(mongoose) {
	var songSchema = require('./song')(mongoose);
	var albumSchema = require('./album')(mongoose);
	var artistSchema = require('./artist')(mongoose);

  const userSchema = mongoose.Schema({
    name: {
			type: String,
			required: true
		},
		song: [songSchema],
		album: [albumSchema],
		artist: [artistSchema],
  }, {
    timestamps: true
	});

  return userSchema;
}
