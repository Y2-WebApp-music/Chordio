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
