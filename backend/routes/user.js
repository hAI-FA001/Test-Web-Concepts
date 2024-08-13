const express = require('express');
const User = require('../models/user')

const router = express.Router();

function commonReqResStuff(req, res) {
    // console.log(req.session.user);
    // console.log("Cookie is ", req.cookies, req.session.cookie);
    // console.log("SID is ", req.sessionID, req.session.id);
    
    // res.setHeader('Content-Type', 'application/json');
    // res.setHeader('Cache-Control', 'public');
}


router.post('/login', (req, res) => {
    req.session.user = new User(req.body.username ?? "default name", req.body.password ?? "default pass");
    commonReqResStuff(req, res);
    res.status(200).json("Logged In, User "+ JSON.stringify(req.session.user) +", Session " + JSON.stringify(req.session) + ", ID " + req.session.id + ", Cookie " + JSON.stringify(req.session.cookie)).send();
});

router.post('/logout', (req, res) => {
    req.session.user = null;
    commonReqResStuff(req, res);
    res.status(200).json("Logged Out, User "+ JSON.stringify(req.session.user) +", Session " + JSON.stringify(req.session) + ", ID " + req.session.id + ", Cookie " + JSON.stringify(req.session.cookie)).send();
});

router.get('/session', (req, res) => {
    commonReqResStuff(req, res);
    res.status(200).json("Session is: User "+ JSON.stringify(req.session.user) +", Session " + JSON.stringify(req.session) + ", ID " + req.session.id + ", Cookie " + JSON.stringify(req.session.cookie)).send();
})

module.exports = router;