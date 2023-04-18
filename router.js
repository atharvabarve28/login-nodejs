const e = require("express");
var express = require("express");
var router = express.Router();


// This is atharva branch created by Tejas 
const credential = {
    email: "admin@gmail.com",
    password: "admin"
}


//login user
router.post('/login', (req, res) => {
    if (req.body.email == credential.email && req.body.password == credential.password) {
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
        //res.end("Login Successful");
    } else if (req.body.email !== credential.email) {
        res.end("Invalid Email :/");
    } else if (req.body.email !== credential.password) {
        res.end("Invalid Password :/");
    } else {
        res.end("Please enter valid credentials :)");
    }
});

router.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.render('dashboard', { user: req.session.user });
    } else {
        res.send("Unauthorize user")
    }
})

router.get('/logout', (req, res) => {
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        } else {
            res.render('base',{title:"Express",logout:"Logout Successfully..!"})
        }
    })
})

module.exports = router;
