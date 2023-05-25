const router = require('express').Router(); // use express router for this one
let User = require('../models/user.model'); // assign temporary variables
const jwt = require('jsonwebtoken');

// display endpoint
router.route('/display').get((req, res) => {

	const user = User.findOne({
		email: req.body.email,
		password: req.body.password
	});

	if (user) {
		return res.json({status: 'ok', user: true});
	} else {
		return res.json({status: 'error', user: false});
	}

	// view all lang sa sa tanan users
	// User.find()
	// .then(users => res.status(200).json(users))
	// .catch(error => res.status(400).json('Error! ' + error));
});

router.route('/login').post((req, res) => {

	User.findOne({
			username: req.body.username,
			password: req.body.password
		})
		.then(user => {
			if (user) {
				const token = jwt.sign({
					firstname: user.firstname,
					middlename: user.middlename,
					lastname: user.lastname,
					birthdate: user.birthdate,
					age: user.age,
					weight: user.weight,
					height: user.height,
					email: user.email,
					username: user.username,
					password: user.password
				}, 'testSecurity123');

				res.status(200).json({status: "ok", user: token, userType: user.userType})
			}
			else res.status(200).json({status: "not found", user: false})
		})
		.catch(error => res.status(400).json('Error! ' + error));

	// if (user) {
	// 	return res.json({status: 'ok', user: true});
	// } else {
	// 	return res.json({status: 'error', user: false});
	// }

	// view all lang sa sa tanan users
	// User.find()
	// .then(users => res.status(200).json(users))
	// .catch(error => res.status(400).json('Error! ' + error));
});

// signup enpoint

//Added another end point for sign up
router.route('/sign_up/add').post((req, res) => {
	//console.log(req.body);
	// igka send ug post request makuha ni	 sila dapat
	const firstname = req.body.firstname;
	const middlename = req.body.middlename;
	const lastname = req.body.lastname;
	//Woops
	const age = Number.parseInt(req.body.age);
	const height = Number.parseFloat(req.body.height);
	const weight = Number.parseFloat(req.body.weight);
	const birthdate = req.body.birthdate;
	const username = req.body.username;
	const email = req.body.email;
	const password = req.body.password;
	const userType = req.body.userType;

	// cast into a single object
	const newUser = new User({firstname, middlename, lastname, weight, height, age, birthdate, username, email, password, userType});
	console.log(newUser);
	// register user
	newUser.save()
		.then(() => res.status(200).json('Successfully registered'))
		.catch((err) => res.status(400).json('Error in registration.' + err));
});

module.exports = router;
