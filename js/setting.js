const goProfile = document.getElementById('goProfile');
goProfile.addEventListener('click',() => {
    if (window.location.href !=='./userprofile.html'){
        window.location.href='./userprofile.html'
    }
    else {}
});

// Get references to the title-set elements
const informationButton = document.getElementById("information");
const followedButton = document.getElementById("Followed");
const followerButton = document.getElementById("Follower");

// Get references to the content containers
const userinfoContainer = document.querySelector(".userinfo-container");
const followedContainer = document.querySelector(".Followed-container");
const followerContainer = document.querySelector(".Follower-container");

// Function to set initial styles for informationButton
function setInitialStylesForInformation() {
    // Set styles for informationButton
    informationButton.style.backgroundColor = "var(--color-lightgray)";
    informationButton.querySelector("p").style.color = "var(--color-text)";
    informationButton.querySelector("svg").style.fill = "var(--color-text)";

    // Reset styles for other buttons
    followedButton.style.backgroundColor = "";
    followedButton.querySelector("p").style.color = "var(--color-textgray)";
    followedButton.querySelector("svg").style.fill = "var(--color-gray17)";
    followerButton.style.backgroundColor = "";
    followerButton.querySelector("p").style.color = "var(--color-textgray)";
    followerButton.querySelector("svg").style.fill = "var(--color-gray17)";
}

// Add click event listeners to the title-set elements
informationButton.addEventListener("click", () => {
    // Show the user information content
    userinfoContainer.style.display = "block";
    followedContainer.style.display = "none";
    followerContainer.style.display = "none";

    // Update styles for informationButton
    setInitialStylesForInformation();
});

followedButton.addEventListener("click", () => {
    // Show the followed users content
    userinfoContainer.style.display = "none";
    followedContainer.style.display = "block";
    followerContainer.style.display = "none";

    // Reset styles for informationButton
    informationButton.style.backgroundColor = "";
    informationButton.querySelector("p").style.color = "var(--color-textgray)";
    informationButton.querySelector("svg").style.fill = "var(--color-gray17)";

    // Update styles for followedButton
    followedButton.style.backgroundColor = "var(--color-lightgray)";
    followedButton.querySelector("p").style.color = "var(--color-text)";
    followedButton.querySelector("svg").style.fill = "var(--color-text)";

    // Reset styles for followerButton
    followerButton.style.backgroundColor = "";
    followerButton.querySelector("p").style.color = "var(--color-textgray)";
    followerButton.querySelector("svg").style.fill = "var(--color-gray17)";
});

followerButton.addEventListener("click", () => {
    // Show the followers content
    userinfoContainer.style.display = "none";
    followedContainer.style.display = "none";
    followerContainer.style.display = "block";

    // Reset styles for informationButton
    informationButton.style.backgroundColor = "";
    informationButton.querySelector("p").style.color = "var(--color-textgray)";
    informationButton.querySelector("svg").style.fill = "var(--color-gray17)";

    // Reset styles for followedButton
    followedButton.style.backgroundColor = "";
    followedButton.querySelector("p").style.color = "var(--color-textgray)";
    followedButton.querySelector("svg").style.fill = "var(--color-gray17)";

    // Update styles for followerButton
    followerButton.style.backgroundColor = "var(--color-lightgray)";
    followerButton.querySelector("p").style.color = "var(--color-text)";
    followerButton.querySelector("svg").style.fill = "var(--color-text)";
});

// Set initial styles for informationButton on page load
setInitialStylesForInformation();
