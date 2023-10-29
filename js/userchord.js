const goProfile = document.getElementById('goProfile');
goProfile.addEventListener('click',() => {
    if (window.location.href !=='./userprofile.html'){
        window.location.href='./userprofile.html'
    }
    else {}
});

const crChord = document.getElementById('cr-Chord');
crChord.addEventListener('click',() => {
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
