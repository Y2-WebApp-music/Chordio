export default class Chord {
    constructor(chord_id, title, postdate, img_chord, img_note, artist , song_key, Bpm, url, img, likes, username, type, country) {
        this.chord_id = chord_id;
        this.title = title;
        this.postdate = postdate;
        this.img_chord = img_chord;
        this.img_note = img_note;
        this.artist = artist;
        this.song_key = song_key;
        this.Bpm = Bpm;
        this.url = url;
        this.img = img; 
        this.likes = likes; 
        this.username = username;
        this.type = type;
        this.country = country;
    }

    createChordElement() {
        const chordDiv = $('<div>')

        chordDiv.html(`
            <div class="chord" id="${this.chord_id}"
                style="background-image: linear-gradient(rgba(80, 71, 88, 0.267), #25243b), url(data:image/png;base64,${this.img})">
                <div class="chord-top">
                    <p>${this.title}</p>
                </div>
                <div class="chord-down">
                    <div class="chord-text-down-grid">
                        <p class="chord-text-down prevent-select">Artist:</p>
                        <p class="chord-text-down-get">${this.artist}</p>
                    </div>
                    <div class="chord-text-down-grid">
                        <p class="chord-text-down prevent-select">Key:</p>
                        <p class="chord-text-down-get">${this.song_key}</p>
                    </div>
                    <div class="chord-text-down-grid">
                        <p class="chord-text-down prevent-select">Type:</p>
                        <p class="chord-text-down-get">${this.type}</p>
                    </div>
                    <div class="chord-text-down-grid">
                        <p class="chord-text-down prevent-select">nationality:</p>
                        <p class="chord-text-down-get">${this.country}</p>
                    </div>
                    <div class="chord-text-down-grid">
                        <p class="chord-text-down prevent-select">Create By :</p>
                        <p class="chord-text-down-get">${this.username}</p>
                    </div>
                </div>
            </div>
        `)
        return chordDiv;
    }

    createMyChordElement() {
        const chordDiv = $('<div>')

        chordDiv.html(`
            <div class="your-chord">
                <img src="data:image/png;base64,${this.img}" alt="">
                <div class="your-chord-imformation">
                    <div class="your-chord-top">
                        <p>${this.title}</p>
                    </div>
                    <div class="your-chord-down">
                        <div class="your-chord-down-grid">
                            <p class="your-chord-text-down">Artist:</p>
                            <p class="your-chord-text-down-get">${this.artist}</p>
                        </div>
                        <div class="your-chord-down-grid">
                            <p class="your-chord-text-down">Key:</p>
                            <p class="your-chord-text-down-get">${this.song_key}</p>
                        </div>
                    </div>
                </div>
                <div class="hover-chord">
                    <div class="edit-chord">
                        <svg xmlns="http://www.w3.org/2000/svg" class="edit-icon" height="1.7em" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                        <p>Edit</p>
                    </div>
                    <div></div>
                    <div class="delete-chord">
                        <svg xmlns="http://www.w3.org/2000/svg" class="delete-icon" height="1.7em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                        <p>Delete</p>
                    </div>
                </div>
            </div>
        `)
        return chordDiv;
    }

    createMyChordElement() {
        const chordDiv = $('<div>')

        chordDiv.html(`
            <div class="your-chord">
                <img src="data:image/png;base64,${this.img}" alt="">
                <div class="your-chord-imformation">
                    <div class="your-chord-top">
                        <p>${this.title}</p>
                    </div>
                    <div class="your-chord-down">
                        <div class="your-chord-down-grid">
                            <p class="your-chord-text-down">Artist:</p>
                            <p class="your-chord-text-down-get">${this.artist}</p>
                        </div>
                        <div class="your-chord-down-grid">
                            <p class="your-chord-text-down">Key:</p>
                            <p class="your-chord-text-down-get">${this.song_key}</p>
                        </div>
                    </div>
                </div>
                <div class="hover-chord">
                    <div class="edit-chord">
                        <svg xmlns="http://www.w3.org/2000/svg" class="edit-icon" height="1.7em" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                        <p>Edit</p>
                    </div>
                    <div></div>
                    <div class="delete-chord">
                        <svg xmlns="http://www.w3.org/2000/svg" class="delete-icon" height="1.7em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                        <p>Delete</p>
                    </div>
                </div>
            </div>
        `)
        return chordDiv;
    }

    createHomeChordElement() {
        const chordDiv = $('<div>')

        chordDiv.html(`
            <div class="chord">
                <img src="data:image/png;base64,${this.img}" alt="">
                <div class="chord-imformation">
                    <div class="chord-top">
                        <p>${this.title}</p>
                    </div>
                    <div class="chord-down">
                        <div class="chord-down-grid">
                            <p class="chord-text-down">Artist:</p>
                            <p class="chord-text-down-get">${this.artist}</p>
                        </div>
                        <div class="chord-down-grid">
                            <p class="chord-text-down">Key:</p>
                            <p class="chord-text-down-get">${this.song_key}</p>
                        </div>
                    </div>
                </div>
            </div>
        `)
        return chordDiv;
    }

    deleteChordSubmit() {
        const deleteDiv = $('<div>').addClass('delete-fill')
        
        deleteDiv.html(`
            <div class="delete-container">
                <div class="del-bg">
                    <p> 🥺Do you want to delete This?🥺</p>
                    <div class="btn-contain">
                        <button type="submit" class="btn-no" id="notdel-btn"> No I don't want Delete it. </button>
                        <button type="submit" class="btn-delete" id="del-btn"> Yes Delete it. </button>
                    </div>
                </div>
            </div>
        `)
        return deleteDiv;
    }
}