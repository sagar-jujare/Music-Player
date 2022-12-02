const music = new Audio('audio/Mehabooba.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `Mehabooba<br> 
        <div class="subtitle">Ananya Bhat</div>`,
        poster: "images/img-1.jpg",
    },

    {
        id: 2,
        songName: `Tum Hi Anna<br> 
        <div class="subtitle">B Praak</div>`,
        poster: "images/img-2.jpg",
    },

    {
        id: 3,
        songName: `Filhall<br> 
        <div class="subtitle">B Praak</div>`,
        poster: "images/img-3.webp",
    },

    {
        id: 4,
        songName: `Lovely<br> 
        <div class="subtitle">Billie Eilish</div>`,
        poster: "images/img-4.jpg",
    },

    {
        id: 5,
        songName: `Tequila<br> 
        <div class="subtitle">Chandan Shetty`,
        poster: "images/img-5.jpg",
    },

    {
        id: 6,
        songName: `Kaun Tujhe<br> 
        <div class="subtitle">Palak Muchhal</div>`,
        poster: "images/img-6.jpg",
    },


    {
        id: 7,
        songName: `Vaaste<br> 
        <div class="subtitle">Dhavani Bhanushali</div>`,
        poster: "images/img-7.jpg",
    },


    {
        id: 8,
        songName: `Manike<br> 
        <div class="subtitle">Yohani</div>`,
        poster: "images/img-8.avif",
    },


    {
        id: 9,
        songName: `On My Way <br> 
        <div class="subtitle">Neha Kakkar</div>`,
        poster: "images/img-9.webp",
    },

    {
        id: 10,
        songName: `Laila Main Laila<br> 
        <div class="subtitle">Pawni Pandey</div>`,
        poster: "images/img-10.jpg",
    }
]


// Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
//     e.getElementsByTagName('img')[0].src = songs[i].poster;
//     e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
// });

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }

    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-duotone fa-pause');
    }
})


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click',()=>{
    item.scrollLeft += 330;
});

pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -= 330;
});


let index = 0;


Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',() =>{
        index = el.target.id;
        console.log(abc);
    })
})
