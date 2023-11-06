const express = require('express');
const router = express.Router();


// Logout route
router.get('/logout', (req, res) => {
    // Clear the session data and redirect to the login page
    req.session = null;
    res.redirect('/');
});

module.exports = router;