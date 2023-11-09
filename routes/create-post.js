const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const multer = require("multer");
const db = require('./db');

// Configure Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 } });

// Handle file uploads
router.post('/upload', upload.array('images', 4), (req, res) => {
    // Check if files were uploaded
    const imagePaths = req.files ? req.files.map((file) => file.buffer) : [];

    // Get text inputs
    const { cr_post_title, cr_post_detail } = req.body;

    const id = req.session.user.user_id;

    const date = new Date();

    // Create an object to hold the data for insertion
    const insertData = [cr_post_title, date, cr_post_detail, imagePaths[0] || null, imagePaths[1] || null, imagePaths[2] || null, imagePaths[3] || null, id];
    
    // Insert data into the database
    const sql = 'INSERT INTO post (title, post_date, content, img1, img2, img3, img4, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, insertData, (err) => {

    });
    res.redirect('/');
});


module.exports = router;