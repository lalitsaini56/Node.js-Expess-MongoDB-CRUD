const mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
	first_name: {
        type: String,
        required: 'This field is required.'
    },
	last_name: {
        type: String,
        required: 'This field is required.'
    },
	emailid: {
        type: String,
        required: 'This field is required.'
    },
	dob: {
        type: String,
        required: 'This field is required.'
    },
	countrycode: {
        type: String,
        required: 'This field is required.'
    },
	phoneno: {
        type: String,
        required: 'This field is required.'
    },
	gender: {
        type: String,
        required: 'This field is required.'
    },
	password: {
        type: String,
        required: 'This field is required.'
    },
	description: {
        type: String,
        required: 'This field is required.'
    },
	language: {
        type: String,
        required: 'This field is required.'
    },
	profession: {
        type: String,
        required: 'This field is required.'
    },
	InsertedAgemin: {
        type: String,
        required: 'This field is required.'
    },
    InsertedAgemax: {
        type: String,
        required: 'This field is required.'
    },
	intersetedgender: {
        type: String,
        required: 'This field is required.'
    },
	profilepicture: {
        type: String,
        required: 'This field is required.'
    },
});

// Custom validation for email
usersSchema.path('emailid').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Users', usersSchema);
    