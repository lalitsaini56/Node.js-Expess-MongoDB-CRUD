const mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    fb_id: {
        type: String,
        required: 'This field is required.'//
    },
	first_name: {
        type: String,
        required: 'This field is required.'//
    },
	last_name: {
        type: String,
        required: 'This field is required.'//
    },
	emailid: {
        type: String,
        required: 'This field is required.'//
    },
	birthday: {
        type: String,
        required: 'This field is required.'//
    },
    age:{
        type: Number,
        required: 'This field is required.'//
    },
    gender: {
        type: String,
        required: 'This field is required.'//
    },
    about_me: {
        type: String
    },
    lat_long: {
        type: String,
        required: 'This field is required.'//
    },
    lat: {
        type: String,
        required: 'This field is required.'//
    },
    long: {
        type: String
    },
    longitude: {
        type: String
    },
    job_title: {
        type: String
    },
    company: {
        type: String
    },
    school: {
        type: String
    },
    image1: {
        type: String,
        required: 'This field is required.'//
    },
    image2: {
        type: String
    },
    image3: {
        type: String
    },
    image4: {
        type: String
    },
    image5: {
        type: String
    },
    image6: {
        type: String
    },
    like_count:{
        type: Number
    },
    dislike_count:{
        type: Number
    },
    hide_me:{
        type: Number
    },
    block: {
        type: String
    },
    purchased: {
        type: Number
    },
    version: {
        type: String
    },
    device: {
        type: String
    },
    profile_type: {
        type: String
    },
    device_token: {
        type: String
    },
    subscription_datetime: {
        type: String
    },
    promoted: {
        type: Number
    },
    promoted_mins: {
        type: Number
    },
    promoted_date: {
        type: String
    },
    hide_age: {
        type: Number
    },
    hide_location: {
        type: Number
    },
    created: {
        type: String
    },
	countrycode: {
        type: String
    },
	phone: {
        type: String
    },	
	password: {
        type: String,
        required: 'This field is required.'//
    },
	description: {
        type: String
    },
    interested_in: {
        type: String,
        required: 'This field is required.'//
    },
    interested_age: {
        type: String,
        required: 'This field is required.'//
    },
	language: {
        type: String,
        required: 'This field is required.'//
    },
	profession: {
        type: String
    },
	InsertedAgemin: {
        type: String
    },
    InsertedAgemax: {
        type: String
    },
	intersetedgender: {
        type: String
    },
});

// Custom validation for email
UsersSchema.path('emailid').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

module.exports = mongoose.model('Users', UsersSchema);
    