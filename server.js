const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));

const usersController = require('./controllers/users.js');
app.use('/users', usersController);
const photoController = require('//controllers/photos.js');
app.use('/photos', photosController);

app,get('/', (req,res) => {
	res.render('index.ejs');
});

app.listen(3008, () => {
	console.log('listening on 3008 ok');
});