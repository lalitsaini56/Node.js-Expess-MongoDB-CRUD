const mongoose = require('mongoose');	
	
var postslikesSchema = new mongoose.Schema({
    postId: {
        type: String,
        required: 'This field is required.'
    },
    likedUserName: {
        type: String,
        required: 'This field is required.'
    },
    likedUserId: {
        type: String,
        required: 'This field is required.'
    },
    likeUserPic: {
        type: String,
        required: 'This field is required.'
    },
});

// Custom validation for email
/*postsSchema.path('emailid').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');*/

module.exports = mongoose.model('PostsLikes', postslikesSchema);