const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
// const AdminLogin = mongoose.model('AdminLogin');

router.get('/', (req, res) => {
    res.render("admin/login", {
        viewTitle: "Admin Login"
    });
});
router.post('/', (req, res) => {
        //updateRecord(req, res);
});


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