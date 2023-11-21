import { RegularPost } from './regularPost.js';

import { getCurrentUser } from '../user-display/user-display.js';

let id;

function fetchPosts(user) {
    let save = false;
    if (homeValue === null) {
        id = user.user_id // Assign user's ID to 'id'
    } else if (homeValue === 'save') {
        id = 'all'; // Assign 'all' to 'id'
        save = true;
    } else if (homeValue) {
        id = 'all'; // Assign 'all' to 'id'
    }

    $.ajax({
        url: `/fetchpost/${id}`,
        method: 'GET',
        success: function (data) {
            displayPosts(data, save);
        },
        error: function (error) {
            console.error('Error fetching posts:', error);
        }
    });
}


// Function to display posts in the HTML
function displayPosts(posts, save) {
    const regularPost = posts.map(post => {
        if(save) {
            const savePost = post.isSave
            ? new RegularPost(
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
                post.tag,
                post.isLike,
                post.isSave
            )
            : null;

            return savePost;
        } else {
            return new RegularPost(
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
                post.tag,
                post.isLike,
                post.isSave
            );
        }        
    });

    regularPost.forEach(post => {
        if(post) {
            post.fetchPost();
        }
    });


    const postend = $('<div>').addClass('end-of-post');
    postend.html(`<p>Create by : Guy and Guy</p>`)
    $('.mid-container').append(postend);
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