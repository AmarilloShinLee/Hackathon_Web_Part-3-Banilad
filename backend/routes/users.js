const router = require('express').Router(); // use express router for this one
let User = require('../models/user.model'); // assign temporary variables

// login endpoint
router.route('/login').get((req, res) => {
	res.setHeader('Content-type', 'application/json');

	// view all lang sa sa tanan users
	User.find()
	.then(users => {
		res.status(200).json(users)
	})
	.catch(error => res.status(400).json('Error! ' + error));
});

// signup enpoint

//Added another end point for sign up
router.route('/sign_up/add').post((req, res) => {
	
	// igka send ug post request makuha ni	 sila dapat
	const firstname = req.body.firstname;
	const middlename = req.body.middlename;
	const lastname = req.body.lastname;
	const birthdate = req.body.birthdate;
	const username = req.body.username;
	const email = req.body.email;
	const password = req.body.password;

	// cast into a single object
	const newUser = new User({firstname, middlename, lastname, username, birthdate, email, password});

	// register user
	newUser.save()
		.then(() => res.status(200).json('Successfully registered'))
		.catch((err) => res.status(400).json('Error in registration.' + err));
});

module.exports = router;
