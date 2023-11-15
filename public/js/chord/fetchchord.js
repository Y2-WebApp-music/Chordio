import Chord from "./chord-class.js";

import { getCurrentUser } from '../user-display/user-display.js';

let id;

function fetchChords(user) {
    if (typeof homeValue === 'undefined') {
        id = user.user_id // Assign user's ID to 'id'
    } else if (homeValue) {
        id = 'all'; // Assign 'all' to 'id'
    }

    $.ajax({
        url: `/fetchchord/${id}`,
        method: 'GET',
        success: function (data) {
            displayChords(data, '.chord-display');
            displayChords(data, '.chord-list');
        },
        error: function (error) {
            console.error('Error fetching posts:', error);
        }
    });

    id = user.user_id;

    $.ajax({
        url: `/fetchchord/${id}`,
        method: 'GET',
        success: function (data) {
            displayChords(data, '.your-chord-list');
        },
        error: function (error) {
            console.error('Error fetching posts:', error);
        }
    });
}

// Function to display chords in the HTML
function displayChords(chords, type) {
    const chordContainer = $(type);

    for (const chord of chords) {

        const c = new Chord(
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
        );

        if (type == '.chord-display') {
            const chordElement = c.createChordElement();

            chordContainer.append(chordElement);

            chordElement.on("click", function(){
                window.location.href='./chordview/'+chord.chord_id
            });
        } else if (type == '.your-chord-list') {
            const chordElement = c.createMyChordElement();

            chordContainer.append(chordElement);

            chordElement.find('.delete-chord').on('click', function(){
                window.location.href='./chordDelete/'+chord.chord_id
                /////////////// add delete
                return false;
            });

            chordElement.on("click", function(){
                window.location.href='./chordview/'+chord.chord_id
            });
        } else if (type == '.chord-list') {
            const chordElement = c.createHomeChordElement();

            chordContainer.append(chordElement);

            chordElement.on("click", function(){
                window.location.href='./chordview/'+chord.chord_id
            });
        }
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
