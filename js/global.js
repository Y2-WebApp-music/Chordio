
const usericon = document.getElementById('usericon');
const popup = document.getElementById("userPopup");

usericon.addEventListener("click", () => {
    popup.classList.toggle('visible');
});

// Close the popup when clicking outside of it
document.addEventListener("click", (event) => {
    if (popup.classList.contains('visible') && !popup.contains(event.target) && event.target !== usericon) {
        popup.classList.remove('visible');
    }
});

// Close the popup when clicking outside of it
document.addEventListener("click", (event) => {
    if (popup.style.transform === "translate(0, 0)" && !userPopup.contains(event.target) && event.target !== usericon) {
        console.log("test4");
        popup.style.transform = "translate(100%, 0)";
    }
});

// App Icon Click
const appicon = document.getElementById('appicon');
appicon.addEventListener('click',() => {
    window.location.href='./home.html'
});

// Song Icon Click
const songpage = document.getElementById('song-page-btn');
songpage.addEventListener('click',() => {
    if (window.location.href !=='./song.html'){
        window.location.href='./song.html'
    }
    else {}
});

// Home Icon Click
const homepage = document.getElementById('home-page-btn');
homepage.addEventListener('click',() => {
    if (window.location.href !=='./home.html'){
        window.location.href='./home.html'
    }
    else {}
});

// User Icon Click
const userpage = document.getElementById('user-page-btn');
userpage.addEventListener('click',() => {
    if (window.location.href !=='./userprofile.html'){
        window.location.href='./userprofile.html'
    }
    else {}
});

//=====================================================================
//=====================================================================
//=====================================================================
//=====================================================================
//=====================================================================
// Get all elements with the class "userchord"
const userchord = document.querySelectorAll('.userchord');

// Add a click event listener to each element
userchord.forEach((element) => {
    element.addEventListener('click', () => {
        if (window.location.href !== './userchord.html') {
            window.location.href = './userchord.html';
        }
    });
});

// Get all elements with the class "chordsave"
const chordSaveElements = document.querySelectorAll('.chordsave');

// Add a click event listener to each element
chordSaveElements.forEach((element) => {
    element.addEventListener('click', () => {
        if (window.location.href !== './chordsave.html') {
            window.location.href = './chordsave.html';
        }
    });
});

// Get all elements with the class "userchord"
const postsave = document.querySelectorAll('.postsave');

// Add a click event listener to each element
postsave.forEach((element) => {
    element.addEventListener('click', () => {
        if (window.location.href !== './postsave.html') {
            window.location.href = './postsave.html';
        }
    });
});
