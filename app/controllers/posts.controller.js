const Posts = require('../models/posts.model.js');
const PostsLikes = require('../models/postlikes.model.js');

// createPost and Save a new Posts
exports.createPost = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Posts content can not be empty"
        });
    }

    // createPost a Posts
    const note = new Posts({
        title: req.body.title || "Untitled Posts", 
        content: req.body.content
    });

    // Save Posts in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Posts."
        });
    });
};

// Retrieve and return all notes from the database.
exports.getPosts = (req, res) => {
    Posts.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.getPosts = (req, res) => {
    Posts.findById(req.params.postsId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Posts not found with id " + req.params.noteId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Posts not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    });
};


// PostsLikes and Save a new Posts
exports.postLike = (req, res) => {
    // Validate request
    if(!req.body.likedUserName) {
        return res.status(400).send({
            message: "Posts liked User Name can not be empty"
        });
    }

    // PostsLikes a Posts
    const PostsLikes = new PostsLikes({
        likedUserName: req.body.likedUserName || "Untitled likedUserId", 
        likedUserId: req.body.likedUserId || "Untitled likedUserId", 
        likedUserId: req.body.likedUserId || "Untitled likedUserId", 
    });

    // Save Posts in the database
    PostsLikes.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Posts."
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Posts content can not be empty"
        });
    }

    // Find note and update it with the request body
    Posts.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Posts",
        content: req.body.content
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Posts not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Posts not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Posts.findByIdAndRemove(req.params.noteId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Posts not found with id " + req.params.noteId
            });
        }
        res.send({message: "Posts deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Posts not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    });
};
