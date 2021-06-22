const mongoose = require('mongoose');	

var chatdashoboadSchema = new mongoose.Schema({
    recevierUsername: {
        type: String,
        required: 'This field is required.'
    },
    senderUsername: {
        type: String,
        required: 'This field is required.'
    },
    LastModified: {
        type: String,
        required: 'This field is required.'
    },
    profilePicture: {
        type: String,
        required: 'This field is required.'
    },
	lastMessgae: {
        type: String,
        required: 'This field is required.'
    },
	isDelivered: {
        type: String,
        required: 'This field is required.'
    },
	isRead: {
        type: String,
        required: 'This field is required.'
    },
	NoOfMesaage: {
        type: String,
        required: 'This field is required.'
    },
});

// Custom validation for email
/*postsSchema.path('emailid').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');*/

mongoose.model('ChatDashoboad', chatdashoboadSchema);