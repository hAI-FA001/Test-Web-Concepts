const express = require('express');
const User = require('../models/user')

const router = express.Router();

router.post("/signup", (req, res) => {

});

router.post('/login', (req, res) => {
    req.session.user = new User(req.body.username ?? "default name", req.body.password ?? "default pass");
    console.log(req.session.user);
    res.status(200).json("Logged In").send();
});

router.post('/logout', (req, res) => {
    req.session.user = null;
    console.log(req.session.user);
    res.status(200).json("Logged Out").send();
});

module.exports = router;