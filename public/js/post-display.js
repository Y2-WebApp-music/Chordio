// Check image in post have 3 image
const postImagesContainers = document.querySelectorAll('.post-img');
postImagesContainers.forEach(container => {
    const dataImages = container.querySelectorAll('img[src="data:image/png;base64,null"]');
    const otherImages = container.querySelectorAll('img:not([src="data:image/png;base64,null"])');

    if (dataImages.length === 1 && otherImages.length > 0) {
        otherImages[0].classList.add('post-img-1');
    }
    if (dataImages.length === 3 && otherImages.length > 0) {
        otherImages[0].classList.add('post-img-1');
    }
});

// ================================================================
// ================================================================
// =================== Comment Button Pop-Up ======================
// ================================================================
// ================================================================
document.addEventListener("DOMContentLoaded", function () {
    // Add click event listener to all comment buttons
    const commentButtons = document.querySelectorAll(".comment-show");
    
    commentButtons.forEach(commentButton => {
        commentButton.addEventListener("click", function (event) {
            console.log("This view show Comment");
            // Get the target post ID from the data attribute
            const postID = event.currentTarget.dataset.target;
            const commentFill = document.getElementById(postID);

            // Display the corresponding comment section
            commentFill.style.display = "flex";
        });
    });

    // Add click event listener to close comment sections
    const closeCommentButtons = document.querySelectorAll(".close-comment");
    
    closeCommentButtons.forEach(closeCommentButton => {
        closeCommentButton.addEventListener("click", function (event) {
            const postID = event.currentTarget.dataset.target;
            let commentFill = document.querySelector(".comment-fill");

            commentFill.style.display = "none";
        });

        closeCommentButton.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                let commentFill = document.querySelector(".comment-fill");
        
                commentFill.style.display = "none";
            }
        });
    });

    // Add click event listener to close comment sections when clicking outside
    const commentFills = document.querySelectorAll(".comment-fill");
    
    commentFills.forEach(commentFill => {
        commentFill.addEventListener("click", function (e) {
            if (e.target === commentFill) {
                commentFill.style.display = "none";
            }
        });
    });
});


// ================================================================
// ================================================================
// ======= Fix tag and Category of Post =========
// ================================================================
// ================================================================
// Get the select box and current elements
const selectBox = document.getElementById("mySelectBox");
const currentElement = selectBox.querySelector(".select-box__current");

currentElement.addEventListener("focus", () => {
    selectBox.style.borderRadius = "20px 20px 0px 0px";
});
currentElement.addEventListener("blur", () => {
    selectBox.style.borderRadius = "20px 20px 20px 20px";
});

// Get the select box and current elements
const selectPost = document.getElementById("PostTag");
const boxBellow = selectPost.querySelector(".select-post_current");

boxBellow.addEventListener("focus", () => {
    selectPost.style.borderRadius = "20px 20px 0px 0px";
});
boxBellow.addEventListener("blur", () => {
    selectPost.style.borderRadius = "20px 20px 20px 20px";
});

// ================================================================
// ================================================================
// Setting Button of Post In there userProfile page of user
// ================================================================
// ================================================================
// Get all the post elements
const posts = document.querySelectorAll('.post');

// Loop through each post and add event listeners
posts.forEach((post) => {
    const settingBtn = post.querySelector('.setting-btn');
    const setting = post.querySelector('.setting');
    
    settingBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setting.classList.toggle('active');
    });
    
    document.body.addEventListener('click', () => {
        setting.classList.remove('active');
    });
    
    setting.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

// ================================================================
// ======= "Like" and "save" interact button =========
// ================================================================
const likeButtons = document.querySelectorAll(".like-button");

// Add a click event listener to each like button
likeButtons.forEach((button) => {
    button.addEventListener("click", function(e) {
        e.preventDefault();
        this.classList.toggle("active");
        this.classList.add("animated");
        generateClones(this);
    });
});

const saveButtons = document.querySelectorAll(".save-button");

// Add a click event listener to each like button
saveButtons.forEach((button) => {
    button.addEventListener("click", function(e) {
        e.preventDefault();
        this.classList.toggle("active");
        this.classList.add("animated");
        generateClones(this);
    });
});

function generateClones(button) {
        let removeClassTimeout = setTimeout( function() {
            button.classList.remove("animated")
        }, 600);
}