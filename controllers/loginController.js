const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Student = mongoose.model('Student');

router.get('/', (req, res) => {
    res.render("login/login", {
        viewTitle: "Login"
    });
});

router.post('/', (req, res) => {
    GetRecord(req, res);
});

// router.post("/",Student.authenticate("local",{
//     successRedirect:"/userprofile",
//     failureRedirect:"/login"
// }),function (req, res){
// });

function GetRecord(req, res) {
    Student.find({ email: req.body.email, password: req.body.password, }, req.body, { new: true }, (err, doc) => {
        if (!err) 
        { 
            res.redirect('student/list'); 
        }
        else 
        {
            res.redirect('login/login'); 
        }
    });
}

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            case 'password':
                body['passwordError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}
module.exports = router;