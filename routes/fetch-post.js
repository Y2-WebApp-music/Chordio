const express = require('express');
const router = express.Router();

const db = require('./db');


router.get('/fetchpost/:id', (req, res) => {
    if(req.params.id == 'all') {
        query = 'SELECT *, DATE_FORMAT(post_date, "%d %b %Y %h:%i") as postdate FROM post JOIN users USING(user_id) ORDER BY post_id DESC';
    } else {
        query = `SELECT *, DATE_FORMAT(post_date, "%d %b %Y %h:%i") as postdate FROM post JOIN users USING(user_id) WHERE user_id=${req.params.id} ORDER BY post_id DESC`;
    }

    db.query(query, (err, results) => {
        if (err) {
            throw err;
        } else {
            const data = results.map((row) => {
                const img1 = row.img1 ? row.img1.toString('base64') : null;
                const img2 = row.img2 ? row.img2.toString('base64') : null;
                const img3 = row.img3 ? row.img3.toString('base64') : null;
                const img4 = row.img4 ? row.img4.toString('base64') : null;
                const profile_image = row.profile_image ? row.profile_image.toString('base64') : null;
                return {
                    user_id: row.user_id,
                    post_id: row.post_id,
                    title: row.title,
                    postdate: row.postdate,
                    content: row.content,
                    img1: img1,
                    img2: img2,
                    img3: img3,
                    img4: img4,
                    likes: row.likes,
                    category: row.category,
                    tag: row.tag,
                    username: row.username,
                    profile_image: profile_image,
                };
            });
            res.json(data);
        }
    });
});


module.exports = router;