const express = require('express');
const router = express.Router();
const db = require('./db');


router.post('/likes/chord', (req, res) => {
    const chord_id = req.body.chord_id;
    const isIncrementing = req.body.isIncrementing === '1';
    const user_id = req.session.user.user_id;
    
    const insertQuery = isIncrementing
        ? 'INSERT INTO like_chord (user_id, chord_id) VALUES (?, ?)'
        : 'DELETE FROM like_chord WHERE user_id = ? AND chord_id = ?';
        
    db.query(insertQuery, [user_id, chord_id], (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
});


module.exports = router;