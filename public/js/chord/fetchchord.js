import Chord from "./chord-class.js";

import { getCurrentUser } from '../user-display/user-display.js';

let id;

function fetchChords(user) {
    let like = false;
    if (homeValue === null) {
        id = user.user_id // Assign user's ID to 'id'
    } else if (homeValue === 'like') {
        id = 'all'; // Assign 'all' to 'id'
        like = true;
    } else if (homeValue) {
        id = 'all'; // Assign 'all' to 'id'
    }

    $.ajax({
        url: `/fetchchord/${id}`,
        method: 'GET',
        success: function (data) {
            displayChords(data, '.chord-display', like);
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
            displayChords(data, '.your-chord-list', like);
        },
        error: function (error) {
            console.error('Error fetching posts:', error);
        }
    });
}

// Function to display chords in the HTML
function displayChords(chords, type, like) {
    const chordContainer = $(type);
    const body = $('body');

    for (const chord of chords) {

        let c;
        if (like) {
            c = chord.isLike
            ? new Chord(
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
                chord.country,
                chord.isLike
            )
            : null;

        } else {
            c = new Chord(
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
                chord.country,
                chord.isLike
            );
        }

        if(c) {
            if (type == '.chord-display') {
                const chordElement = c.createChordElement();
    
                chordContainer.append(chordElement);
    
                chordElement.on("click", function(){
                    window.location.href='./chordview/'+chord.chord_id
                });
            } else if (type == '.your-chord-list') {
                const chordElement = c.createMyChordElement();
                const deleteSubmit = c.deleteChordSubmit();
    
                chordContainer.append(chordElement);
                body.append(deleteSubmit);
    
                deleteSubmit.hide();
    
                chordElement.find('.delete-chord').on('click', function() {
                    deleteSubmit.attr('style', 'display: flex');
                });
    
                deleteSubmit.find('.btn-delete').on('click', function() {
                    const chordId = chord.chord_id;
    
                    $.ajax({
                        type: 'POST',
                        url: `/chordDelete/${chordId}`,
                        success: function (response) {
                            console.log('Chord deleted successfully:', response);
                            window.location.reload();
                        },
                        error: function (error) {
                            console.error('Error deleting chord:', error);
                        }
                    });
    
                    return false;
                });
    
                deleteSubmit.find('.btn-no').on('click', function() {
                    deleteSubmit.hide();
                });
    
                deleteSubmit.on('click', function() {
                    deleteSubmit.hide();
                });
    
                chordElement.find('.hover-chord-center').on("click", function(){
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
