const Users = require('../models/users.model.js');

// Create and Save a new Users
exports.createUser = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Users content can not be empty"
        });
    }

    // Create a Users
    const User = new Users({
        title: req.body.title || "Untitled Users", 
        content: req.body.content
    });

    // Save Users in the database
    User.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Users."
        });
    });
};

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
    Users.find()
    .then(Users => {
        res.send(Users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Users."
        });
    });
};


// Find a single login User with a UserId and Password
exports.loginUser = (req, res) => {
    Users.findById( { emailid: req.params.emailid, password: req.params.password } )
    .then(User => {
        if(!User) {
            return res.status(404).send({
                message: "Users not found with id " + req.params.UserId
            });            
        }
        res.send(User);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Users not found with id " + req.params.UserId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving User with id " + req.params.UserId
        });
    });
};

// Find a single User with a UserId
exports.findOne = (req, res) => {
    Users.findById(req.params.UserId)
    .then(User => {
        if(!User) {
            return res.status(404).send({
                message: "Users not found with id " + req.params.UserId
            });            
        }
        res.send(User);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Users not found with id " + req.params.UserId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving User with id " + req.params.UserId
        });
    });
};

// Update a User identified by the UserId in the request
exports.updateUser = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Users content can not be empty"
        });
    }

    // Find User and updateUser it with the request body
    Users.findByIdAndUpdate(req.params.UserId, {
        title: req.body.title || "Untitled Users",
        content: req.body.content
    }, {new: true})
    .then(User => {
        if(!User) {
            return res.status(404).send({
                message: "Users not found with id " + req.params.UserId
            });
        }
        res.send(User);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Users not found with id " + req.params.UserId
            });                
        }
        return res.status(500).send({
            message: "Error updating User with id " + req.params.UserId
        });
    });
};

// Delete a User with the specified UserId in the request
exports.deleteUser = (req, res) => {
    Users.findByIdAndRemove(req.params.UserId)
    .then(User => {
        if(!User) {
            return res.status(404).send({
                message: "Users not found with id " + req.params.UserId
            });
        }
        res.send({message: "Users deleteUserd successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Users not found with id " + req.params.UserId
            });                
        }
        return res.status(500).send({
            message: "Could not deleteUser User with id " + req.params.UserId
        });
    });
};
