
// Pop-Up listener
const usericon = document.getElementById('usericon');
const popup = document.getElementById("userPopup");

usericon.addEventListener("click", () => {
    if( popup.style.visibility === "visible"){
        popup.style.visibility = "hidden";
    }
    else{
        popup.style.visibility = "visible";
    }
});

// Close the popup when clicking outside of it
document.addEventListener("click", (event) => {
    if (popup.style.visibility === "visible" && !userPopup.contains(event.target) && event.target !== usericon) {
        popup.style.visibility = "hidden";
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
