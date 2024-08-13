const express = require('express');
app = express();


const cookieParser = require('cookie-parser');
const expressSession = require('express-session')
const cors = require('cors');

app.use(expressSession({
    secret: "not-secret",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        domain: '.vercel.app',
    },
    rolling: true,
}))
app.use(cors({
    origin: ["http://localhost:3000"],
}))
app.use(cookieParser())



app.listen(80);
