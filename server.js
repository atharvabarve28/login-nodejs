const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const app = express();
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

const router = require('./router');

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

//app.use('/static',express.static(path.join(__dirname,'public')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extende: true }));

app.use(session({
    secret: uuidv4(), // '1b9d6bcd-bbfd-4b2-9b5d-ab8dfbbd4bed'
    resave: false,
    saveUninitialized: true
}));

app.use('/route', router);

//home route
app.get('/', (req, res) => {
    res.render('base', { title: "Login System" });
});

app.listen(port, () => {
    console.log("Listening to the server on http://localhost:3000")
});