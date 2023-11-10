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
}