const express = require('express');
const router = express.Router();

const db = require('./db');


// Middleware to check if the user is authenticated
const requireLogin = (req, res, next) => {
    if (!req.session.user) {
        return res.status(401).json({ message: 'You are not logged in.' });
    }
    next();
};


// Route to get the current user's information
router.get('/user/info', requireLogin, (req, res) => {
    db.query('SELECT * FROM users WHERE email = ?', [req.session.user.email], (err, results) => {
        if (err) {
            console.error('Error fetching posts:', err);
            res.status(500).json({ error: 'Error fetching posts' });
        } else {
            const data = results.map((row) => {
                const profile_image = row.profile_image ? row.profile_image.toString('base64') : null;
                return {
                    user_id: row.user_id,
                    username: row.username,
                    email: row.email,
                    reg_date: row.reg_date,
                    lastlogin: row.lastlogin,
                    profile_image: profile_image,
                };
            });
            res.json(data);
        };      
    });
});


module.exports = router;