// User Icon Click
const usergobtn = document.getElementById('user-go-btn');
usergobtn.addEventListener('click',() => {
    if (window.location.href !=='./userprofile'){
        window.location.href='./userprofile'
    }
    else {}
});

const chordview = document.getElementById('chord-1');
chordview.addEventListener('click',() => {
    if (window.location.href !=='./chordview'){
        window.location.href='./chordview'
    }
    else {}
});

const chordcreate = document.getElementById('cr-chord');
chordcreate.addEventListener('click',() => {
    if (window.location.href !=='./chordcreate'){
        window.location.href='./chordcreate'
    }
    else {}
});

// Get all elements with the "chord" class
const chordElements = document.querySelectorAll('.chord');

// Loop through the elements and set the background image based on the data attribute
chordElements.forEach((element) => {
    const backgroundImage = element.getAttribute('data-background-image');
    element.style.backgroundImage = `linear-gradient(rgba(80, 71, 88, 0.267), #25243b), url(${backgroundImage})`;
});

// ================================================================
// =================== Delete Pop-Up ======================
// ================================================================
// ================================================================
document.addEventListener("DOMContentLoaded", function () {
    // Add click event listener to all comment buttons
    const delButtons = document.querySelectorAll(".delete-show");

    delButtons.forEach(delButton => {
        delButton.addEventListener("click", function (event) {
            // Get the target post ID from the data attribute
            const postID = event.currentTarget.dataset.target;
            const delFill = document.querySelector(".delete-fill");

            // Display the corresponding comment section
            delFill.style.display = "flex";
        });
    });

    // Add click event listener to close comment sections
    const closedelFills = document.querySelectorAll(".btn-delete");

    closedelFills.forEach(closedelFill => {
        closedelFill.addEventListener("click", function (event) {
            let delFill = document.querySelector(".delete-fill");

            delFill.style.display = "none";
        });
    });

    // Add click event listener to close comment sections when clicking outside
    const deleteFills = document.querySelectorAll(".delete-fill");

    deleteFills.forEach(deleteFill => {
        deleteFill.addEventListener("click", function (e) {
            if (e.target === deleteFill) {
                deleteFill.style.display = "none";
            }
        });
    });
});
