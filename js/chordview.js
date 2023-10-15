document.addEventListener("DOMContentLoaded", function() {
    const chordContainer = document.querySelector(".chord-container");
    const image = chordContainer.querySelector("img");

    chordContainer.addEventListener("click", function() {
        image.classList.toggle("fullscreen-image");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const noteContainer = document.querySelector(".note-container");
    const image = noteContainer.querySelector("img");

    noteContainer.addEventListener("click", function() {
        image.classList.toggle("fullscreen-image");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const chordTypeButton = document.getElementById("chord-type");
    const noteTypeButton = document.getElementById("note-type");
    const chordContainer = document.querySelector(".chord-container");
    const noteContainer = document.querySelector(".note-container");

    chordTypeButton.addEventListener("click", function() {
        chordContainer.style.display = "flex";
        noteContainer.style.display = "none";
        chordTypeButton.classList.add("chose");
        noteTypeButton.classList.remove("chose");
    });

    noteTypeButton.addEventListener("click", function() {
        chordContainer.style.display = "none";
        noteContainer.style.display = "flex";
        noteTypeButton.classList.add("chose");
        chordTypeButton.classList.remove("chose");
    });
});