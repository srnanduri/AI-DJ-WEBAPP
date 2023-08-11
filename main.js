
song = "";

function preload() {
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.play();
    document.getElementById("stop").style.display = "inline-block";
}

function stop() {
    song.stop();
    document.getElementById("stop").style.display = "none";
}