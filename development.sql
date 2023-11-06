create schema musics;
use music;

create table users (
	user_id int not null primary key auto_increment,
    username varchar(100) not null,
    password varchar(100) not null,
    email varchar(100) not null,
    reg_date datetime not null,
    lastlogin datetime,
    profile_image longblob
);

create table category (
	category_id int not null primary key auto_increment,
    category_name varchar(100) not null
);

create table tag (
	tag_id int not null primary key auto_increment,
    tag_name varchar(100) not null
);

create table post (
	post_id int not null primary key auto_increment,
    title varchar(100) not null,
    post_date datetime not null,
    content varchar(1000),
    img1 longblob,
    img2 longblob,
    img3 longblob,
    img4 longblob,
    likes int,
    
    user_id int not null,
    category_id int,
    tag_id int,
    
    foreign key(user_id) references users(user_id),
    foreign key(category_id) references category(category_id),
    foreign key(tag_id) references tag(tag_id)
);

create table music_type (
	type_id int not null primary key auto_increment,
	type_name varchar(100) not null
);

create table country (
	country_id int not null primary key auto_increment,
	country_name varchar(100) not null
);

create table chord (
	chord_id int not null primary key auto_increment,
    title varchar(100) not null,
    post_date datetime not null,
    img_chord longblob,
    img_note longblob,
    artist varchar(100),
    song_key varchar(10),
    Bpm int,
    url varchar(100),
    img longblob,
    likes int,
    
    user_id int,
	type_id int,
    country_id int,
    
    foreign key(user_id) references users(user_id),
    foreign key(type_id) references music_type(type_id),
    foreign key(country_id) references country(country_id)
);

create table comments (
	comment_id int not null primary key auto_increment,
    context varchar(100) not null,
    comment_date datetime not null,
    
    user_id int not null,
    post_id int not null,
    
    foreign key(user_id) references users(user_id),
    foreign key(post_id) references post(post_id)
);

create table follower (
	followed_id int not null,
    follower_id int not null,
    
    primary key(followed_id, follower_id),
    foreign key(followed_id) references users(user_id),
    foreign key(follower_id) references users(user_id)
);

create table post_tag (
	post_id int not null,
    tag_id int not null,
    
	primary key(post_id, tag_id),
    foreign key(post_id) references post(post_id),
    foreign key(tag_id) references tag(tag_id)
);

create table save_post (
    user_id int not null,
	post_id int not null,
	
	primary key(user_id, post_id),
    foreign key(user_id) references users(user_id),
    foreign key(post_id) references post(post_id)
);

create table like_post (
    user_id int not null,
	post_id int not null,
	
	primary key(user_id, post_id),
    foreign key(user_id) references users(user_id),
    foreign key(post_id) references post(post_id)
);

create table save_chord (
    user_id int not null,
	chord_id int not null,
	
	primary key(user_id, chord_id),
    foreign key(user_id) references users(user_id),
    foreign key(chord_id) references chord(chord_id)
);

create table like_chord (
    user_id int not null,
	chord_id int not null,
	
	primary key(user_id, chord_id),
    foreign key(user_id) references users(user_id),
    foreign key(chord_id) references chord(chord_id)
);

create table comment_by (
	user_id int not null,
    comment_id int not null,
    
    primary key(user_id, comment_id),
    foreign key(user_id) references users(user_id),
    foreign key(comment_id) references comments(comment_id)
);
