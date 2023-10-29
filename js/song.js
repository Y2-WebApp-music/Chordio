// User Icon Click
const usergobtn = document.getElementById('user-go-btn');
usergobtn.addEventListener('click',() => {
    if (window.location.href !=='./userprofile.html'){
        window.location.href='./userprofile.html'
    }
    else {}
});

const chordview = document.getElementById('chord-1');
chordview.addEventListener('click',() => {
    if (window.location.href !=='./chordview.html'){
        window.location.href='./chordview.html'
    }
    else {}
});

const chordcreate = document.getElementById('cr-chord');
chordcreate.addEventListener('click',() => {
    if (window.location.href !=='./chordcreate.html'){
        window.location.href='./chordcreate.html'
    }
    else {}
});

// Get all elements with the "chord" class
const chordElements = document.querySelectorAll('.chord');

// Loop through the elements and set the background image based on the data attribute
chordElements.forEach((element) => {
    const backgroundImage = element.getAttribute('data-background-image');
    element.style.backgroundImage = `linear-gradient(rgba(80, 71, 88, 0.267), #25243b), url(${backgroundImage})`;
});
