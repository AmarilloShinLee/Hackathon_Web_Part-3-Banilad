const router = require('express').Router(); // use express router for this one
let User = require('../models/user.model'); // assign temporary variables

// deletion	
router.route('/delete/:id').delete((req, res) => {
	//console.log(req.params.id);

	User.deleteOne({ _id: `${req.params.id}` }).then(function(){
		res.status(200).json(`Deleted: ${req.params.id}`);
		console.log(`Successfully deleted ${req.params.id}`); // Success
	 }).catch(function(error){
		res.status(400).json("Failure in deletion.");
		console.log(error); // Failure
	 });
});

// commented out lang sa kay basin sayop, might edit this later
/*
router.route('/update/:id').update((req, res) => {
	//console.log(req.params.id);

	const update = {
		"firstname": req.params.firstname,
		"middlename": req.params.middlename,
		"lastname": req.params.lastname,
		"age": req.params.age,
		"height": req.params.height,
		"weight": req.params.weight
	};

	User.updateOne({ _id: `${req.params.id}` }, update).then(function(){
		res.status(200).json(`Updated: ${req.params.id}`);
		console.log(`Successfully updated! ${req.params.id}`); // Success
	 }).catch(function(error){
		res.status(400).json("Failure in update.");
		console.log(error); // Failure
	 });
});
*/

// login endpoint
router.route('/login').get((req, res) => {
	User.find()
	.then(users => res.status(200).json(users))
	.catch(error => res.status(400).json('Error! ' + error));
});

// signup enpoints

//Added another end point for sign up, full update
router.route('/sign_up/full').post((req, res) => {
	
	// igka send ug post request makuha ni	 sila dapat
	const fullname = req.body.name;
	const gender = req.body.gender;
	const address = req.body.address;
	const email = req.body.email;
	const contact = req.body.contact;
	const age = req.body.age;
	const field = req.body.field;
	const introduction = req.body.introduction;
	const position = req.body.name;
	const skillset = req.body.gender;
	const job = req.body.address;	
	const salary_range = req.body.range;
	const password = req.body.password;
	const isEmployer = req.body.isEmployer;

	const newUser = new User({fullname, gender, address, 
		email, contact, age, field, introduction, position,
		skillset, job, salary_range, password, isEmployer
	});

	// register user
	newUser.save()
		.then(() => res.status(200).json('Successfully registered'))
		.catch((err) => res.status(400).json('Error in registration.' + err));
});

//Added another end point for sign up, full update
router.route('/sign_up/full').post((req, res) => {
	
	// igka send ug post request makuha ni	 sila dapat
	const fullname = req.body.fullname;
	const gender = req.body.gender;
	const address = req.body.address;
	const email = req.body.email;
	const contact = req.body.contact;
	const age = req.body.age;
	const field = req.body.field;
	const introduction = req.body.introduction;
	const position = req.body.name;
	const skillset = req.body.gender;
	const job = req.body.address;	
	const salary_range = req.body.range;
	const password = req.body.password;
	const isEmployer = req.body.isEmployer;

	const newUser = new User({fullname, gender, address, 
		email, contact, age, field, introduction, position,
		skillset, job, salary_range, password, isEmployer
	});

	// register user
	newUser.save()
		.then(() => res.status(200).json('Successfully registered'))
		.catch((err) => res.status(400).json('Error in registration.' + err));
});

router.route('/sign_up/add').post((req, res) => {
	
	// igka send ug post request makuha ni	 sila dapat
	const fullname = req.body.fullname;
	const email = req.body.email;
	const password = req.body.password;

	const newUser = new User({fullname, email, password});

	// register user
	newUser.save()
		.then(() => res.status(200).json('Successfully registered'))
		.catch((err) => res.status(400).json('Error in registration.' + err));
});

// end of sign-up endpoints

module.exports = router;

// employer news feed


