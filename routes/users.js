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

// update	
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

// login endpoint
router.route('/login').get((req, res) => {
	User.find()
	.then(users => res.status(200).json(users))
	.catch(error => res.status(400).json('Error! ' + error));
});

// signup enpoint

//Added another end point for sign up
router.route('/sign_up/add').post((req, res) => {
	
	// igka send ug post request makuha ni	 sila dapat
	const firstname = req.body.firstname;
	const middlename = req.body.middlename;
	const lastname = req.body.lastname;
	const age = req.body.age;
	const height = req.body.height;
	const weight = req.body.weight;

	const newUser = new User({firstname, middlename, lastname, age, weight, height});

	//const newUser = new User({firstname, middlename, lastname, username, birthdate, email, password});

	// register user
	newUser.save()
		.then(() => res.status(200).json('Successfully registered'))
		.catch((err) => res.status(400).json('Error in registration.' + err));
});

module.exports = router;
