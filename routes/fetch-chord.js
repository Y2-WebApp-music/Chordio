const express = require('express');
const router = express.Router();

const db = require('./db');


router.get('/fetchchord/:id', (req, res) => {
    const userId = req.params.id;
    const chordId = req.query.chord_id;
    
    let query;

    if (userId == 'all') {
        if (chordId) {
            query = `SELECT *, DATE_FORMAT(post_date, "%d %b %Y %h:%i") as postdate FROM chord JOIN users USING(user_id) WHERE chord_id = ${chordId} ORDER BY likes DESC`;
        }
        else {
            query = `SELECT *, DATE_FORMAT(post_date, "%d %b %Y %h:%i") as postdate FROM chord JOIN users USING(user_id) ORDER BY likes DESC`;
        }
    }
    else {
        if (chordId) {
            query = `SELECT *, DATE_FORMAT(post_date, "%d %b %Y %h:%i") as postdate FROM chord JOIN users USING(user_id) WHERE user_id=${userId} AND chord_id = ${chordId} ORDER BY likes DESC`;
        }
        else {
            query = `SELECT *, DATE_FORMAT(post_date, "%d %b %Y %h:%i") as postdate FROM chord JOIN users USING(user_id) WHERE user_id=${userId} ORDER BY likes DESC`;
        }
    }

    db.query(query, (err, results) => {
        if (err) {

        } else {
            const data = results.map((row) => {
                const img_chord = row.img_chord ? row.img_chord.toString('base64') : null;
                const img_note = row.img_note ? row.img_note.toString('base64') : null;
                const img = row.img ? row.img.toString('base64') : null;
                return {
                    user_id: row.user_id,
                    chord_id: row.chord_id,
                    title: row.title,
                    postdate: row.postdate,
                    img_chord: img_chord,
                    img_note: img_note,
                    img: img,
                    artist: row.artist,
                    song_key: row.song_key,
                    Bpm: row.Bpm,
                    url: row.url,
                    likes: row.likes,
                    username: row.username,
                    type: row.type,
                    country: row.country,
                };
            });
            res.json(data);
        }
    });
});


module.exports = router;