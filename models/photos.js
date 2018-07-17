const mongoose = require('mongoose');

const photosSchema = mongoose.Schema({
	title: {type: String, required: true},
	description: String,
	style: String,
	host: {type: String, ref: 'Users'}
});

module.exports = mongoose.model('Photos', photosSchema);
