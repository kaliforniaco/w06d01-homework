const mongoose = require('mongoose');

const photosSchema = mongoose.Schema({
	title: String,
	description: String,
	style: String,
	host: [Users]
});

module.exports = mongoose.model('Photos', photosSchema);
