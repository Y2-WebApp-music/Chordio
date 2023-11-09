import Post from './post-class.js';

import { getCurrentUser } from '../user-display/user-display.js';

let who;

function fetchPosts(user) {
    if (typeof homeValue === 'undefined') {
        who = user.user_id // Assign user's ID to 'who'
    } else if (homeValue) {
        who = 'all'; // Assign 'all' to 'who'
    }

    $.ajax({
        url: `/post/get?who=${who}`,
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

    for (const post of posts) {

        const postElement = new Post(
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
            post.category_id,
            post.tag_id
        ).createPostElement();

        postContainer.append(postElement);
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