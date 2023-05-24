// User Schema/Table. All of the user information is defined here

const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
	firstname: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minlength: 3
	},
	
	middlename: {
		type: String,
		required: false, // not everyone has a middle name
		unique: false,
		trim: true,
		mindlength: 3
	},


	lastname: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minlength: 3
	},

	age: {
		type: Number,
		required: true, 
		unique: false,
		trim: true,
		mindlength: 1

	},

	height: {
		type: Number,
		required: true,
		unique: false,
		trim: true,
		minlength: 2
	},

	weight: {
		type: Number,
		required: true,
		unique: false,
		trim: true,
		minlength: 2
	},

	/*
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 3
	},

	birthdate: {
		type: Date,
		required: true,
		unique: false,
	},

	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 10
	},

	password: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minlength: 6
	}
	*/
});

// assign this model to the mongoose models
const User = mongoose.model('Users', userSchema);

// export this model
module.exports = User;