const express = require('express');
const router = express.Router();
const db = require('./db');


router.post('/edit-user', (req, res) => {
    const user_id = req.session.user.user_id;
    const { username, email } = req.body;
    const query = 'UPDATE users SET username = ?, email = ? WHERE user_id = ?'
    const data = [username, email, user_id];

    db.query(query, data, err => {
        if (err) {
            console.error(err);
            return;
        }
        res.redirect('/setting');
    });
});


module.exports = router;