const express = require('express');
const router = express.Router();
const path = require('path');

// Defult page route
router.get('/', (req, res) => {
    if (req.session.user) {
        res.redirect('/home');
    } else {
        res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
    }
});

// Home route
router.get('/home', (req, res) => {
    if (req.session.user) {
        res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
    } else {
        res.redirect('/');
    }
});

module.exports = router;