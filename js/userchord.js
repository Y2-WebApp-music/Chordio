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