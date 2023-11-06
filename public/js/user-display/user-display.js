import User from './user-class.js';

function getCurrentUser() {
    $.ajax({
        url: '/user/info',
        method: 'GET',
        success: function (data) {
            displayUser(data);
        },
        error: function (error) {
            console.error('Error fetching posts:', error);
        }
    });
}


function displayUser(data) {
    const i = data[0];

    const user = new User(i.user_id, i.username, i.email, i.profile_image);

    if (user.profile_image != null) {
        if (document.querySelector('.user-img')) {
            const userprofileElement = document.querySelectorAll('.user-img');

            const base64Image = 'data:image/png;base64,' + user.profile_image;

            userprofileElement.forEach(function(userprofileElement) {
                userprofileElement.src = base64Image;
            });
        }
    }

    if (user.profile_image != null) {
        if (document.querySelector('.my-img') && document.querySelector('.user-icon')) {
            const userprofileIconElement = document.querySelector('.user-icon');
            const userprofileElement = document.querySelector('.my-img');

            const base64Image = 'data:image/png;base64,' + user.profile_image;

            userprofileIconElement.src = base64Image;
            userprofileElement.src = base64Image;
        }
    }

    if (document.querySelector('.user-information>a')) {
        const usernameElement = document.querySelector('.user-information>a');
        usernameElement.textContent = user.username;
    }

    if (document.querySelector('.user-information>p')) {
        const userIdElement = document.querySelector('.user-information>p');
        userIdElement.textContent = user.user_id;
    }

    if (document.querySelector('.me')) {
        const usernameElement = document.querySelector('.me');
        usernameElement.textContent = user.username;
    }

    if (document.querySelector('.id')) {
        const userIdElement = document.querySelector('.id');
        userIdElement.textContent = user.user_id;
    }

    if (document.querySelector('.email')) {
        const userIdElement = document.querySelector('.email');
        userIdElement.textContent = user.email;
    }


    if(document.querySelector('.user-input username') && document.querySelector('.user-input email')) {
        const inputUsernameElement = document.querySelector('input[class="user-input username"]'); 
        const inputUserIdElement = document.querySelector('input[class="user-input email"]');
    
        inputUsernameElement.value = "user.username"; 
        inputUserIdElement.value = user.email;
    }
}

// Call the getCurrentUser function when the page loads
$(document).ready(function () {
    getCurrentUser();
});