const express = require('express');
const User = require('../models/user')

const router = express.Router();

router.post('/login', (req, res) => {
    req.session.user = new User(req.body.username ?? "default name", req.body.password ?? "default pass");
    res.status(200).json("Logged In, User "+ JSON.stringify(req.session.user) +", Session " + JSON.stringify(req.session) + ", ID " + req.session.id + ", Cookie " + JSON.stringify(req.session.cookie)).send();
});

router.post('/logout', (req, res) => {
    req.session.user = null;
    res.status(200).json("Logged Out, User "+ JSON.stringify(req.session.user) +", Session " + JSON.stringify(req.session) + ", ID " + req.session.id + ", Cookie " + JSON.stringify(req.session.cookie)).send();
});

router.get('/session', (req, res) => {
    res.status(200).json("Session is: User "+ JSON.stringify(req.session.user) +", Session " + JSON.stringify(req.session) + ", ID " + req.session.id + ", Cookie " + JSON.stringify(req.session.cookie)).send();
})

module.exports = router;