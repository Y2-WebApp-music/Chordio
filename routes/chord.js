const express = require('express');
const router = express.Router();
const path = require('path');


// Create chord route
router.get('/chordcreate', (req, res) => {
    if (req.session.user) {
        res.sendFile(path.join(__dirname, '..', 'views', 'chordcreate.html'));
    } else {
        res.redirect('/');
    }
});

module.exports = router;
