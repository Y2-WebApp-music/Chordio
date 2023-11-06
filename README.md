# Chordio
This repository is use for year 2 semester 1 for Web, DataBase and OOP subject

## 📝แก้ไรไปบ้าง :
  - 👉🏻 Login page in index.html `also add CSS of index` (not finish, press login to go to homepage)
  - 👉🏻 Update Create post in Uesrprofile page  `CSS HTML`
  - 👉🏻 Your-chrord:hover in userprofile and song page `CSS HTML`
  - 👉🏻 Update Setting Of Post in Userprofile page
  - 👉🏻 Post Comment Update `post-display.js, post-display.css, home.html, userprofile.html`
  - 👉🏻 Update index page `HTML CSS`
  - 👉🏻 Logout button update
  - 👉🏻 delete post,chord Update
  - 👉🏻 Otheruserprofile `HTML JS CSS`
  - 👉🏻 save,like toggle button `HTML CSS JS -> post-display`
  - 🔧 Create new directory structure 
  - 🔧 Update all `CSS JS` file path
  - 🔧 Add `JS` `JQuery` and `user-display` in `HTML`
  - 🔧 Add class for display user image profile, name and email in `HTML`
  - 🔧 Create Server side
  - 🔧 MySQL `CREATE SCHEMA` and `CREATE TABLE`
  - 🔧 Database connection `./routes/db.js`
  - 🔧 Login and Register system `./routes/auth.js` Logout `./routes/logout.js`
  - 🔧 Check user session `./routes/home.js`
  - 🔧 Fetch post `./routes/fetch-post.js` working with `./public/js/post`
  - 🔧 User display `./routes/cur-user.js` working with `./public/js/user-display`
  - 🔧 Database `development.sql`


### In post Update Comment like this
Have data-target for each post that unique of post This in html structure
``` ruby
<div class="post-interact-btn comment-show" data-target="post1">
    <svg xmlns="http://www.w3.org/2000/svg" .......
    <p>Comment</p>
</div>

<!--  Pop-Up-Comment/Post   -->
    <div class="comment-fill" id="post1">
```
This in JS `post-display`
``` ruby
const postID = event.currentTarget.dataset.target;
const commentFill = document.getElementById(postID);
```

### chord View IMAGE Cover in `song` and `userchord` page
have this structure in each chord 
``` ruby
data-background-image="img/img-post2.png"
```
In js file `userchord` and `song`
``` ruby
const chordElements = document.querySelectorAll('.chord');

chordElements.forEach((element) => {
    const backgroundImage = element.getAttribute('data-background-image');
    element.style.backgroundImage = `linear-gradient(rgba(80, 71, 88, 0.267), #25243b), url(${backgroundImage})`;
});
```

### New directory structure
A quick look at the top-level files and directories
```
.
├── public
      ├── css
      ├── img
      ├── js
          ├── post
          ├── user-display
          ├── other JS files
├── routes
├── views
      ├── HTML files
├── app.js
├── package.json
```

### Environment Variable
`DB_HOST` - the base URL of your database.<br>
`DB_USER` - the database user name.<br>
`DB_PASSWORD` - the database user password.<br>
`DB_DATABASE` - the database name.

### node package requirement 
``` ruby
npm i bcrypt cookie-session dotenv express mysql2 nodemon
```
Run server using
``` ruby
npm start
```
The server running on port 3000

### Static Web
[Web Demo Static](https://y2-webapp-music.github.io/Chordio/)

`Work in nodeJS, Vanila CSS, Vanila HTML`

## All Front-end progress
- [ ] 🟨 Index.html
- [x] 🟩 home.html
- [x] 🟩 song.html
- [x] 🟨 userprofile.html
- [x] 🟩 chordview.html
- [ ] 🟩 chordcreate.html
- [ ] 🟩 userchord.html
- [ ] 🟩 chordsave.html
- [ ] 🟩 postsave.html
- [ ] 🟨 setting.html
