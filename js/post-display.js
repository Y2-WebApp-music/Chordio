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

// Check all no slide-img check to comment only text
const slideImages = document.querySelectorAll('.Slide-img');
let allImagesEmpty = true;
slideImages.forEach(slideContainer => {
    const imagesInContainer = slideContainer.querySelectorAll('img');
    const imagesEmpty = Array.from(imagesInContainer).every(img => img.getAttribute('src') === 'data:image/png;base64,null');
    if (!imagesEmpty) {
        allImagesEmpty = false;
    }
});
if (allImagesEmpty) {
    const comLeft = document.querySelector('.com-left');
    const commentContainer = document.querySelector('.comment-container');
    const commentBackground = document.querySelector('.comment-background');

    comLeft.classList.add('no-photos');
    commentContainer.classList.add('no-photos');
    commentBackground.classList.add('no-photos');
}
// Remove Slide-img when img is null
const slideContainers = document.querySelectorAll('.Slide-img');
slideContainers.forEach(slideContainer => {
    const imagesInContainer = slideContainer.querySelectorAll('img');

    const imagesEmpty = Array.from(imagesInContainer).every(img => img.getAttribute('src') === 'data:image/png;base64,null');
    if (imagesEmpty) {
        slideContainer.remove();
    }
});
// Update hide next,prev button in comment when have 1 image
const slideButtons = document.querySelector('.slide-button');
const checkslide = document.querySelectorAll('.Slide-img');
if (checkslide.length <= 1) {
    slideButtons.style.display = 'none';
}

// Comment slide Photo
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var x = document.querySelectorAll(".Slide-img");
    if (x.length === 0) {
        // No elements with class .Slide-img found, do nothing or handle this case as needed.
        return;
    }

    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    var showCommentBtn = document.querySelector(".comment-show");
    var showImage = document.querySelector(".img-show");
    var commentFill = document.querySelector(".comment-fill");

    showCommentBtn.addEventListener("click", function () {
        commentFill.style.display = "flex";
    });
    showImage.addEventListener("click", function () {
        commentFill.style.display = "flex";
    });

    commentFill.addEventListener("click", function (e) {
        if (e.target === commentFill) {
            commentFill.style.display = "none";
        }
    });
    var closeCommentBtn = document.querySelector(".close-commment");
    closeCommentBtn.addEventListener("click", function () {
        commentFill.style.display = "none";
    });
});
