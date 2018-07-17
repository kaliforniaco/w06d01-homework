const mongoose = reauire('mongoose');

const usersSchema = mongoose.Schema({
	username: String,
	location: String,
	style: String,
	posts: [Photos]

	// does PW have to be in a separate file for security?
	// keep open for authentication conventions <<<
});

module.exports = mongoose.model('Users', usersSchema);