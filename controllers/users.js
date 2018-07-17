const express = require('express');
const router = express.Router();
const Users = require('../models/users');

router.get('/', (req,res) => {
	Users.find({}, (err, foundUsers) => {
		res.render('users/index.ejs', {
			users: foundUsers
		});
	});
});








module.exports = router;