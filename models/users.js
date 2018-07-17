const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
	username: {type: String, required: true},
	password: {type: String, required: true},
	location: String,
	style: String,
	posts: {type: Number, ref:'Photos'}

	// does PW have to be in a separate file for security?
	// keep open for authentication conventions <<<
});

module.exports = mongoose.model('Users', usersSchema);