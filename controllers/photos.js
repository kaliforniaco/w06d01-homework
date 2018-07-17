const express = require('express');
const router = express.Router();
const Photos = require('../models/photos');

router.get('/', (req,res) => {
	Photos.find({}, (err, foundPhotos) => {
		res.render('photos/index.ejs', {
			photos: foundPhotos
		});
	});
});