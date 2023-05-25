// User Schema/Table. All of the user information is defined here
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({

	fullname: {
		type: String,
		required: true,
		unique: false,
		trim: true,
		minlength: 3
	},
	
	address: {
		type: String,
		required: false,
		unique: false,
		trim: true,
		minlength: 7
	},

	email: {
		type: String,
		required: true,
		unique: true, // one email at a time lang
		trim: true,
		minlength: 7,
	},

	contact: {
		type: String,
		required: false,
		unique: false,
		trim: true,
		minlength: 7
	},

	age: {
		type: Number,
		required: false,
		unique: false,
		trim: true,
	},

	field:{
		type: String,
		required: false,
		unique: false,
		trim: true,
		minlength: 4,
	},

	user_introduction:{
		type: String,
		required: false,
		unique: false,
		trim: true,
		minlength: 4
	},

	field:{
		type: String,
		required: false,
		unique: false,
		trim: true,
		minlength: 4,
	},

	position: {
		type: String,
		required: false,
		unique: false,
		trim: true,
		minlength: 5

	},

	skillset: [{
		type: String,
		required: false,
		unique: false,
		trim: true,
		minlength: 3
	}],

	job_description: {
		type: String,
		required: false,
		unique: false,
		trim: true,
		minlength: 3
	},

	salary_range: {
		type: String,
		required: false,
		unique: false,
		trim: true,
	},

	password: {
		type: String,
		required: true,
		unique: false,
		trim: true
	},

	isEmployer: {
		type: Boolean,
		required: false,
		unique: false,
		trim: true
	}
});

// assign this model to the mongoose models
const User = mongoose.model('Users', userSchema);

// export this model
module.exports = User;