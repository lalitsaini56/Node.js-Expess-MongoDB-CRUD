const mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: 'This field is required.'
    },
    password: {
        type: password,
        required: 'This field is required.'
    }
});

// Custom validation for email
loginSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Login', loginSchema);