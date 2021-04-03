const player = document.querySelector('.player');
const video = document.querySelector('.video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const speed = document.querySelector('.player-speed');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');
const fullscreenBtn = document.querySelector('.fullscreen');

// Play & Pause ----------------------------------- //
function showPlayIcon() {
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
  }



function togglePlay()
{
    if(video.paused){
        video.play()
        playBtn.classList.replace('fa-play', 'fa-pause');
         playBtn.setAttribute('title', 'Pause');
    }else {
        video.pause()
        showPlayIcon();

    }
}

function displayTime(time){
 let   timeInMinutes = Math.floor(time/60)
   let timeInSecond = Math.floor(time % 60)
timeInMinutes=  timeInMinutes > 9 ?timeInMinutes : `0${timeInMinutes}`
timeInSecond=  timeInSecond > 9 ?timeInSecond : `0${timeInSecond}`
return `${timeInMinutes}:${timeInSecond}`
}

function updateProgress(){
    progressBar.style.width = `${(video.currentTime/video.duration)*100}%`
currentTime.textContent =`${displayTime(video.currentTime)}`
duration.textContent= `${displayTime(video.duration)}`
}

// Progress Bar ---------------------------------- //

function setProgress(e){

const newTime = e.offsetX / progressRange.offsetWidth;
console.log(newTime)
progressBar.style.width = `${newTime*100}%`
video.currentTime = newTime * video.duration


}
let lastVolume = 1;

function toggleVolume(){
    volumeIcon.className = '';

        if(video.volume){
            lastVolume = video.volume;
            video.volume = 0;
            volumeIcon.classList.add('fas','fa-volume-mute');
        volumeIcon.setAttribute('title','Unmute');
        volumeBar.style.width = 0;
        }else{
        video.volume = lastVolume;
        volumeIcon.classList.add('fas','fa-volume-up');
        volumeIcon.setAttribute('title','Mute');

            volumeBar.style.width = `${lastVolume*100}%`;

        }



}





function setVolume(e){
    let volume = e.offsetX / volumeRange.offsetWidth;
    // Rounding volume up or down
    if (volume < 0.1) {
      volume = 0;
    }
    if (volume > 0.9) {
      volume = 1;
    }
    volumeBar.style.width = `${volume * 100}%`;
    video.volume = volume;
    // Change icon depending on volume
    volumeIcon.className = '';
    if (volume > 0.7) {
      volumeIcon.classList.add('fas', 'fa-volume-up');
    } else if (volume < 0.7 && volume > 0) {
      volumeIcon.classList.add('fas', 'fa-volume-down');
    } else if (volume === 0) {
      volumeIcon.classList.add('fas', 'fa-volume-off');
    }
    lastVolume = volume;
}

//  Controls --------------------------- //



// Change Playback Speed -------------------- //
function changeSpeed(){
    video.playbackRate = speed.value;

}


// Fullscreen ------------------------------- //
/* View in fullscreen */
function openFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      /* IE/Edge */
      element.msRequestFullscreen();
    }
    video.classList.add('video-fullscreen');
  }
  
  /* Close fullscreen */
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
    video.classList.remove('video-fullscreen');
  }
  
  let fullscreen = false;
  
  // Toggle fullscreen
  function toggleFullscreen() {
    if (!fullscreen) {
      openFullscreen(player);
    } else {
      closeFullscreen();
    }
    fullscreen = !fullscreen;
  }
//event listners
playBtn.addEventListener('click',togglePlay)
video.addEventListener('click',togglePlay)
video.addEventListener('ended',showPlayIcon)
video.addEventListener('canplay',updateProgress)
video.addEventListener('timeupdate',updateProgress)
progressRange.addEventListener('click',setProgress)

volumeRange.addEventListener('click',setVolume)
volumeIcon.addEventListener('click',toggleVolume)
speed.addEventListener('click',changeSpeed)
fullscreenBtn.addEventListener('click', toggleFullscreen);
