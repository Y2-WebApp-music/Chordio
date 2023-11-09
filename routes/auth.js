const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const fs = require('fs');

const db = require('./db');


// Login route
router.post('/login', (req, res) => {
    const { user_email, user_pass } = req.body;
  
    db.query('SELECT user_id, email, password FROM users WHERE email = ?', [user_email], (err, results) => {
        if (err) throw err;
    
        if (results.length > 0) {
            const user = results[0];
            bcrypt.compare(user_pass, user.password, (err, isMatch) => {
            if (isMatch) {
                req.session.user = user;
                res.redirect('/home');
            } else {
                res.send('Incorrect password');
                ////////////////////////////
            }
            });
        } else {
            res.send('User not found');
            ////////////////////////////
        }
    });
});


// Register route
router.post('/register', (req, res) => {
    const { user_name, user_email, user_pass } = req.body;
    const registrationDate = new Date();

    const imagePath = 'public/img/circletest.png';

    const imageData = fs.readFileSync(imagePath);
    
    db.query('SELECT email FROM users WHERE email = ?', [user_email], (err, results) => {
        if (err) {
            throw err;
        }

        if (results.length > 0) {
            // The email is already registered; handle the error here
            res.status(400).send('Email address is already in use.');
            ////////////////////////////
        } else {
            bcrypt.hash(user_pass, 12, (err, hash) => {
                if (err) throw err;
                
                db.query('INSERT INTO users (username, email, password, reg_date, profile_image) VALUES (?, ?, ?, ?, ?)', [user_name, user_email, hash, registrationDate, imageData], (err, results) => {
                    if (err) throw err;
                
                    res.redirect('/');
                });
            });
        }
    });
});


module.exports = router;