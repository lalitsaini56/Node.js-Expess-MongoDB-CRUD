const mongoose = require('mongoose');	
	
var postsSchema = new mongoose.Schema({
    createUserId: {
        type: String,
        required: 'This field is required.'
    },
    createdByName: {
        type: String,
        required: 'This field is required.'
    },
    createdDate: {
        type: String,
        required: 'This field is required.'
    },
    createUserAge: {
        type: String,
        required: 'This field is required.'
    },
	createdUserPic: {
        type: String,
        required: 'This field is required.'
    },
	message: {
        type: String,
        required: 'This field is required.'
    },
	Location: {
        type: String,
        required: 'This field is required.'
    },
	FoodImage: {
        type: String,
        required: 'This field is required.'
    },
	noOfLike: {
        type: String,
        required: 'This field is required.'
    },
});

// Custom validation for email
/*postsSchema.path('emailid').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');*/

mongoose.model('Posts', postsSchema);