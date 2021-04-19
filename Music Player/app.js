
let poster = document.getElementById('poster');
let musicTitle = document.getElementById('title');
let musicAudio = document.getElementById('musicAudio');

const playBtn = document.querySelector('.play');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const playIcon = document.querySelector('#playButton');
let progressBar = document.querySelector('.progress');

let index = 0;
let musicPlaylist = ['saiyaanji', 'firstKiss', 'loca', 'Makhna'];
let playlistLength = musicPlaylist.length;
loadSong(musicPlaylist[index]);

playBtn.addEventListener('click', () => {

    const isPlaying = playIcon.classList.contains('fa-pause');
    if (isPlaying) {
        pauseSong();

    } else {
        playSong();
    }

})

function loadSong(song) {

    musicTitle.innerText = song;
    poster.src = `thumbnail/${song}.jpg`;
    let folder = 'music/';
    let musicFileSrc = folder + musicPlaylist[index] + ".mp3";
    musicAudio.src = musicFileSrc;   
}

function playSong() {
   
    playIcon.classList.replace('fa-play', 'fa-pause');
    musicAudio.play();
}

function pauseSong() {

    playIcon.classList.replace('fa-pause', 'fa-play');
    musicAudio.pause();

}

function prevSong() {
    index--;
    if (index < 0) {
        index = playlistLength - 1;
    }
    loadSong(musicPlaylist[index]);
}

function nextSong() {

    index++;
    if (index > playlistLength - 1) {
        index = 0;
    }

    loadSong(musicPlaylist[index]);
}


nextBtn.addEventListener('click', () => {
    nextSong();
    playSong();
});

prevBtn.addEventListener('click', () => {
    prevSong();
    playSong();
});

musicAudio.addEventListener('timeupdate',getProgress);


function getProgress(e) {

  const {currentTime,duration} = e.srcElement;
  let percentage =  (currentTime/duration) * 100;
  progressBar.value = percentage;
}