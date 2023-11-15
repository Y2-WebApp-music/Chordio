import Post from './post-class.js';

import { getCurrentUser } from '../user-display/user-display.js';

let id;

function fetchPosts(user) {
    if (typeof homeValue === 'undefined') {
        id = user.user_id // Assign user's ID to 'id'
    } else if (homeValue) {
        id = 'all'; // Assign 'all' to 'id'
    }

    $.ajax({
        url: `/fetchpost/${id}`,
        method: 'GET',
        success: function (data) {
            displayPosts(data);
        },
        error: function (error) {
            console.error('Error fetching posts:', error);
        }
    });
}

// Function to display posts in the HTML
function displayPosts(posts) {
    const postContainer = $('.mid-container');

    const popContainer = $('.pop-post-container');

    for (const post of posts) {

        const postClass = new Post(
            post.post_id,
            post.title,
            post.content,
            post.img1,
            post.img2,
            post.img3,
            post.img4,
            post.postdate,
            post.likes,
            post.user_id,
            post.username,
            post.profile_image,
            post.category,
            post.tag
        );

        const popElement = postClass.createPopPostElement();
        popContainer.append(popElement);
        
        popElement.find('.close-comment').on('click', function() {
            popElement.hide();
        });
        popElement.hide();

        const postElement = postClass.createPostElement();

        postContainer.append(postElement);

        postElement.find('.comment-show').on('click', function() {
            popElement.toggle();
        });
    }
    const postend = $('<div>').addClass('end-of-post');
    postend.html(`<p>Create by : Guy and Guy</p>`)
    postContainer.append(postend);
}


// Call the fetchPosts function to load posts when the page loads
$(document).ready(function () {
    getCurrentUser()
    .then(function(user) {
        fetchPosts(user);
    })
    .catch(function(error) {
        console.error(error);
    });;
});