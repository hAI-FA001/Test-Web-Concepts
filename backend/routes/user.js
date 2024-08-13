const express = require('express');
const User = require('../models/user')

const router = express.Router();

function commonReqResStuff(req, res) {
    console.log(req.session.user);
    console.log("Cookie is ", req.cookies, req.session.cookie);
    console.log("SID is ", req.sessionID, req.session.id);
    
    // res.cookie('THECOOK', `s:${req.sessionID}`, req.session.cookie);
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, authorization')
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin','https://test-web-concepts.vercel.app');
    res.setHeader('Access-Control-Allow-METHODS', "GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH");
}


router.post('/login', (req, res) => {
    req.session.user = new User(req.body.username ?? "default name", req.body.password ?? "default pass");
    commonReqResStuff(req, res);
    res.status(200).json("Logged In + Session " + req.session + " + ID " + req.session.id + " + Cookie " + req.session.cookie).send();
});

router.post('/logout', (req, res) => {
    req.session.user = null;
    commonReqResStuff(req, res);
    res.status(200).json("Logged Out + Session " + req.session + " + ID " + req.session.id + " + Cookie " + req.session.cookie).send();
});

router.get('/session', (req, res) => {
    commonReqResStuff(req, res);
    res.status(200).send("Session is: " + JSON.stringify(req.session) + " + Session " + req.session + " + ID " + req.session.id + " + Cookie " + req.session.cookie).send();
})

module.exports = router;