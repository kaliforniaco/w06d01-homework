const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photogoround');

mongoose.connection.on('connected', () => {
	console.log('say cheese');
});

mongoose.connection.on('error', (err) => {
	console.log('lenscap is on');
});

mongoose.connection.on('disconnected', () => {
	console.log('bad exposure');
});

