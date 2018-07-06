// Libs
import express from 'express';
import bodyParser from 'body-parser';

import mongoose from 'mongoose';
import './server/models/User';

import passport from 'passport';
import LocalStrategy from 'passport-local';
import passportLocalMongoose from 'passport-local-mongoose';

import * as db from './server/utils/DatabaseUtils';

// API connect
import MainAPIRouter from './server/api';


db.setupConnection();

const app = express();
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended:true}) );
app.set('view engine', 'ejs');

// Auth
app.use(passport.initialize());
app.use(passport.session());

const User = mongoose.model('User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());

app.use(require('express-session')({
    secret: "Foods App Secret",
    resave: false,
    saveUninitialized: false
}));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/login', (req, res) => {
    res.sendFile( __dirname + '/public/login.html');
});

app.get('/register', (req, res) => {
    res.sendFile( __dirname + '/public/register.html');
});

app.post('/register', (req, res) => {
    User.register(
        new User({ username: req.body.username }),
        req.body.password,
        (err, user) => {
            if(err) {
                console.log(err);
                return res.sendFile(__dirname + '/public/register.html');
            }

            passport.authenticate("local")(req, res, () => {
                res.redirect("/dashboard");
            });
        }
    );
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}));

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect('/login');
});

app.use('/api', MainAPIRouter );

/*
 * vendors
 * foods
 * customers
 * employers
 *
 *
 */

app.listen(8080, () => {
    console.log('App started on http://localhost:8080/');
});