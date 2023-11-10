const express = require('express');
const router = express.Router();
const path = require('path');

let homeValue;

// Song route
router.get('/song', (req, res) => {
    if (req.session.user) {
        res.sendFile(path.join(__dirname, '..', 'views', 'song.html'));
    } else {
        res.redirect('/');
    }
});

module.exports = router;
