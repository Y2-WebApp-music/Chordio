export default class Post {
    constructor(post_id, title, content, img1, img2, img3, img4, postdate, likes , userid, username, profile_image, category, tag) {
        this.post_id = post_id;
        this.title = title;
        this.content = content;
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.img4 = img4;
        this.postdate = postdate;
        this.likes = likes;
        this.userid = userid;
        this.username = username;
        this.profile_image = profile_image;
        this.category = category;
        this.tag = tag;
    }

    // Function to create a post element
    createPostElement() {
        const postDiv = $('<div>').addClass('post');
        postDiv.html(`
            <div class="post-user-information">
                <img
                 src="data:image/png;base64,${this.profile_image}" class="user-icon-post prevent-select">
                <div class="post-user-text">
                    <p class="post-username">${this.username}</p>
                    <p class="post-date">${this.postdate}</p>
                </div>
            </div>
            <div class="post-content">
                <div class="post-title">${this.title}</div>
                <div class="post-detail-text">${this.content}</div>
                <div class="post-img prevent-select">
                    <img src="data:image/png;base64,${this.img1}" alt="Image 1">
                    <img src="data:image/png;base64,${this.img2}" alt="Image 2">
                    <img src="data:image/png;base64,${this.img3}" alt="Image 3">
                    <img src="data:image/png;base64,${this.img4}" alt="Image 4">
                </div>
            </div>
            <div class="post-interact prevent-select">
                <div class="post-interact-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" id="like-icon" height="1.3em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                    <p> Like </p>
                </div>
                <div class="post-interact-btn comment-show" data-target="post1">
                    <svg xmlns="http://www.w3.org/2000/svg" id="comment-icon" height="1.3em" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
                    <p>Comment</p>
                </div>
                <div class="post-interact-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" id="save" height="1.3em" viewBox="0 0 384 512"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/></svg>
                    <p> Save </p>
                </div>
            </div>
            `)
        return postDiv;
    }
    
    // Function to create a popup post element
    createPopPostElement() {
        const postDiv = $('<div>').addClass('comment-fill').attr('id', this.post_id);
            postDiv.html(`
            <div class="comment-container">
                <div class="comment-background">
                    <div class="com-left prevent-select">
                        <div class="com-post-img">
                            <div class="post-img">
                                <div class="Slide-img">
                                    <img src="data:image/png;base64,${this.img1}">
                                </div>
                                <div class="Slide-img">
                                    <img src="data:image/png;base64,${this.img2}">
                                </div>
                                <div class="Slide-img">
                                    <img src="data:image/png;base64,${this.img3}">
                                </div>
                                <div class="Slide-img">
                                    <img src="data:image/png;base64,${this.img4}">
                                </div>
                            </div>
                    </div>
                    <div class="slide-button">
                        <svg class="slide-left" xmlns="http://www.w3.org/2000/svg" height="2.4em" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                        <svg class="slide-right" xmlns="http://www.w3.org/2000/svg" height="2.4em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                    </div>
                </div>
                <div class="com-right">
                    <div class="com-post-own">
                        <img src="data:image/png;base64,${this.profile_image}"" class="com-own-icon prevent-select">
                        <div class="com-own-icon-text">
                            <p class="com-own-username">${this.username}</p>                                    <p class="com-own-date prevent-select">${this.postdate}</p>
                        </div>
                    </div>
                    <div class="scroll-com">
                        <div class="com-post-title">${this.title}</div>
                        <div class="com-post-detail">
                            ${this.content}    
                        </div>
                        <div class="post-interact prevent-select">
                            <div class="post-interact-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" id="like-icon" height="1.3em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                <p> Like </p>
                            </div>
                            <div class="post-interact-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" id="save" height="1.3em" viewBox="0 0 384 512"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/></svg>
                                <p> Save </p>
                            </div>
                        </div>
                        <div class="comment-container"></div>
                    </div>
                    <div class="com-user-input prevent-select">
                        <img src="data:image/png;base64,${this.profile_image}" class="com-user-icon">
                        <input type="text" class="com-input" placeholder="Write something..." maxlength="120">
                        <svg xmlns="http://www.w3.org/2000/svg" class="send-com-btn" height="1.6em" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="close-comment"  height="2em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </div>
            `)

        const allImagesNull = postDiv.find('.Slide-img img').toArray().every(img => $(img).attr('src') === 'data:image/png;base64,null');
        
        if (allImagesNull) {
            // Add class 'no-photos' to the specified elements
            postDiv.find('.com-left, .comment-container, .comment-background').addClass('no-photos');
    
            // Remove .Slide-img
            postDiv.find('.Slide-img').remove();
    
            // Set display of .slide-button to none
            postDiv.find('.slide-button').css('display', 'none');
        }

        postDiv.find('.Slide-img img').each(function() {
            if ($(this).attr('src') === 'data:image/png;base64,null') {
            // Remove the parent .Slide-img element
            $(this).closest('.Slide-img').remove();
            }
        });

        // Comment slide Photo
        var slideIndex = 1;
        showDivs(slideIndex);

        function plusDivs(n) {
            showDivs((slideIndex += n));
        }

        function showDivs(n) {
            var i;
            var x = postDiv.find('.Slide-img').toArray();
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

        const nextImage = postDiv.find('.slide-right').on('click', function() {
            plusDivs(1)
        });

        const prevImage = postDiv.find('.slide-left').on('click', function() {
            plusDivs(-1)
        });

        return postDiv;
    }
}