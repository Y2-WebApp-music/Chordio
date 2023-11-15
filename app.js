const express = require('express');
const cookieSession = require('cookie-session');


const app = express();
app.use(express.urlencoded({ extended: true }));


// Middleware
app.use(
    cookieSession({
        name: 'session',
        keys: ['your-secret-key'],
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
    })
);


// Serve static files (CSS, JavaScript, etc.)
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


// Import route files
const authRoutes = require('./routes/auth');
const logoutRoutes = require('./routes/logout');

const homeRoutes = require('./routes/home');
const songRoutes = require('./routes/song');

const fetchPosts = require('./routes/fetch-post');
const fetchChords = require('./routes/fetch-chord');

const curUser = require('./routes/cur-user');

const createPost = require('./routes/create-post');

const deleteChord = require('./routes/delete-chord');

const chordView = require('./routes/fetch-chord-view');




// Use route files
app.use('/', authRoutes);
app.use('/', logoutRoutes);

app.use('/', homeRoutes);
app.use('/', songRoutes);

app.use('/', fetchPosts);
app.use('/', fetchChords);

app.use('/', createPost);

app.use('/', deleteChord);

app.use('/', chordView);

app.use('/', curUser);




// Testing other page
app.get('/song', (req, res) => {
    res.sendFile(__dirname + '/views/song.html')
})
app.get('/userprofile', (req, res) => {
    res.sendFile(__dirname + '/views/userprofile.html')
})
app.get('/chordview', (req, res) => {
    res.sendFile(__dirname + '/views/chordview.html')
})
app.get('/chordcreate', (req, res) => {
    res.sendFile(__dirname + '/views/chordcreate.html')
})
app.get('/chordsave', (req, res) => {
    res.sendFile(__dirname + '/views/chordsave.html')
})
app.get('/postsave', (req, res) => {
    res.sendFile(__dirname + '/views/postsave.html')
})
app.get('/userchord', (req, res) => {
    res.sendFile(__dirname + '/views/userchord.html')
})
app.get('/setting', (req, res) => {
    res.sendFile(__dirname + '/views/setting.html')
})
app.get('/otheruserprofile', (req, res) => {
    res.sendFile(__dirname + '/views/otheruserprofile.html')
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});