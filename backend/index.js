const express = require('express');
app = express();


const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session')
const cors = require('cors');

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(expressSession({
    name: "THECOOKIE",
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
        secure: process.env.ENV == "production",
        sameSite: 'lax',
        domain: process.env.COOKIE_DOMAIN,
    },
    rolling: true,
}))
app.use(cors({ origin: [/\.vercel\.app$/, 'https://test-web-concepts.vercel.app'], methods: ['POST']}))

app.use('/user/', require('./routes/user'));
app.get('/', (req, res) => {
    res.send("Server is Up. Send POST to /user/login to set cookie.");
})

app.listen(process.env.PORT);
