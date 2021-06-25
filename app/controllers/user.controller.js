const Users = require('../models/users.model.js');

// Create and Save a new Users
exports.signup = (req, res) => {
    // Validate request
    if(!req.body.first_name || !req.body.last_name || !req.body.birthday || !req.body.fb_id) {
        return res.status(400).send({
            message: "Users content can not be empty"
        });
    }

    // Create a Users
    const users = new Users({
        fb_id: req.body.fb_id ,
        first_name: req.body.first_name ,
        last_name: req.body.last_name ,
        emailid: req.body.emailid ,
        birthday: req.body.birthday ,
        age: req.body.age,
        gender :   req.body.gender,
        about_me :   req.body.about_me,
        lat_long :   req.body.lat_long,
        lat :   req.body.lat,
        long :   req.body.long,
        longitude:   req.body.longitude,
        job_title :   req.body.job_title,
        company :   req.body.company,
        school :   req.body.school,
        image1 :   req.body.image1,
        image2 :   req.body.image2,
        image3 :   req.body.image3,
        image4 :   req.body.image4,
        image5 :   req.body.image5,
        image6 :   req.body.image6,
        like_count:  req.body.like_count,
        dislike_count: req.body.dislike_count,
        hide_me:  req.body.hide_me,
        block :   req.body.block,
        purchased :   req.body.purchased,
        version :   req.body.version,
        device :   req.body.device,
        profile_type :   req.body.profile_type,
        device_token :   req.body.device_token,
        subscription_datetime :   req.body.subscription_datetime,
        promoted :   req.body.promoted,
        promoted_mins :   req.body.promoted_mins,
        promoted_date :   req.body.promoted_date,
        hide_age :   req.body.hide_age,
        hide_location :   req.body.hide_location,
        created :  req.body.created,
        countrycode: req.body.countrycode ,
        phone: req.body.phone ,
        gender: req.body.gender ,
        password: req.body.password ,
        description: req.body.description ,
        interested_in: req.body.interested_in ,
        interested_age: req.body.interested_age,
        language: req.body.language ,
        profession: req.body.profession ,
        InsertedAgemin: req.body.InsertedAgemin ,
        InsertedAgemax: req.body.InsertedAgemax ,
        intersetedgender: req.body.intersetedgender ,
        profilepicture:req.body.profilepicture 
    });

    // Save Users in the database
    users.save()
    .then(data => {
        debugger;
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
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Users."
        });
    });
};


// Find a single login User with a UserId and Password
exports.login = (req, res) => {
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

// Find a single getUserInfo User with a UserId and Password
exports.getUserInfo = (req, res) => {
    Users.find( { fb_id: req.params.fb_id } )
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

// Find a single note with a noteId
exports.checkPhone = (req, res) => {
    Users.find({ phone: req.params.phone })
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "Note not found with phone " + req.params.phone
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.noteId
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
exports.edit_profile = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Users content can not be empty"
        });
    }

    // Find User and updateUser it with the request body
    Users.findByIdAndUpdate(req.params.UserId, {
        title: req.body.title ,
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
