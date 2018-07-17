const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photogoround');

mongoose.connetion.on('connected', () => {
	console.log('say cheese');
});

mongoose.connect.on('error', (err) => {
	console.log('lenscap is on');
});

mongoose.connect.on('disconnected', () => {
	console.log('bad exposure');
});

