import Chord from "./chord-class.js";

import { getCurrentUser } from '../user-display/user-display.js';

let id;

function fetchChords(user) {
    if (typeof homeValue === 'undefined') {
        id = user.user_id // Assign user's ID to 'who'
    } else if (homeValue) {
        id = 'all'; // Assign 'all' to 'who'
    }

    $.ajax({
        url: `/fetchchord/${id}`,
        method: 'GET',
        success: function (data) {
            displayChords(data);
        },
        error: function (error) {
            console.error('Error fetching posts:', error);
        }
    });
}

// Function to display chords in the HTML
function displayChords(chords) {
    const chordContainer = $('.chord-display');

    for (const chord of chords) {

        const chordElement = new Chord(
            chord.chord_id,
            chord.title,
            chord.postdate,
            chord.img_chord,
            chord.img_note,
            chord.artist,
            chord.song_key,
            chord.Bpm,
            chord.url,
            chord.img,
            chord.likes,
            chord.username,
            chord.type,
            chord.country
        ).createChordElement();

        chordElement.on("click", function(){
            window.location.href='./chordview/'+chord.chord_id
        });

        chordContainer.append(chordElement);
    }
}


// Call the fetchPosts function to load posts when the page loads
$(document).ready(function () {
    getCurrentUser()
    .then(function(user) {
        fetchChords(user);
    })
    .catch(function(error) {
        console.error(error);
    });; 
});
