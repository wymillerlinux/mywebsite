// custom video player, used when YouTube isn't available
// written by Wyatt J. Miller

var videoContainer = document.getElementsById("video-container");
var videoControls = document.getElementById("video-controls");
var video = document.getElementsById("video");

var supportsVideo = !!document.createElement("video").canPlayType;
if (supportsVideo){
    // if supportsVideo is true, setting variables using DOM
    var playPause = document.getElementsById("play-pause");
    var rewind = document.getElementById("rewind");
    var rewindBeginning = document.getElementById("rewind-beginning");
    var mute = document.getElementsById("mute");
    var volUp = document.getElementsById("vol-up");
    var volDown = document.getElementsById("vol-down");
    var progress = document.getElementById("progress");
    var progressBar = document.getElementById("progress-bar");
}
// hide browser's default controls
video.controls = false;

// displays custom controls
videoControls.style.display = "block";

function changeVolume(x){
    var currentVol = Math.floor(video.volume * 10) / 10;

    if (x === "+") {
        if (currentVol < 1) video.volume += 0.1;
    } else if (x === "-") {
        if (currentVol > 0) video.volume -= 0.1;
    }
}

playPause.addEventListener("click", function(e){
    if (video.paused || video.ended) video.play;
    else video.pause;
});

mute.addEventListener("click", function(e){
    video.muted = !video.muted;
});

volUp.addEventListener("click", function(e){
    changeVolume("+");
});

volDown.addEventListener("click", function(e){
    changeVolume("-");
});

rewind.addEventListener("click", function(e){
    // code goes here
    // rewind event is supposed to rewind the video a bit
});

rewindBeginning.addEventListener("click", function(e){
    video.pause;
    video.currentTime = 0;
    progress.value = 0;
    video.play;
});