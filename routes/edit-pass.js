const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('./db');


router.post('/edit-pass', (req, res) => {
    const user = req.session.user;
    const { npassword, password, cpassword } = req.body;

    bcrypt.compare(npassword, user.password, (err, isMatch) => {
        if(isMatch) {
            if(password === cpassword) {
                const query = 'UPDATE users SET password = ? WHERE user_id = ?'
                bcrypt.hash(password, 12, (err, hash) => {
                    if (err) throw err;

                    const data = [hash, user.user_id];

                    db.query(query, data, err => {
                        if (err) throw err;
                        
                        res.redirect('/setting');
                    });
                });
            }
        }
    });
});


module.exports = router;