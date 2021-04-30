var rideSound;
var kickSound;
var boomSound;
var hihatSound;
var openhat;
var snareSound;
var tomSound;
var tinkSound;
var clapSound;
appStart();
var sound = {
    'q': function () {
        play(rideSound);
    },
    'w': function () {
        play(kickSound);
    },
    'e': function () {
        play(boomSound);
    },
    'r': function () {
        play(hihatSound);
    },
    't': function () {
        play(openhat);
    },
    'y': function () {
        play(snareSound);
    },
    'u': function () {
        play(tomSound);
    },
    'i': function () {
        play(tinkSound);
    },
    'o': function () {
        play(clapSound);
    }
};
function play(audio) {
    audio.currentTime = 0;
    audio.play();
}
function appStart() {
    document.body.addEventListener('keypress', onKeyDown);
    getSounds();
}
function getSounds() {
    rideSound = document.querySelector('[data-sound="ride"]');
    kickSound = document.querySelector('[data-sound="kick"]');
    boomSound = document.querySelector('[data-sound="boom"]');
    hihatSound = document.querySelector('[data-sound="hihat"]');
    openhat = document.querySelector('[data-sound="openhat"]');
    snareSound = document.querySelector('[data-sound="snare"]');
    tomSound = document.querySelector('[data-sound="tom"]');
    tinkSound = document.querySelector('[data-sound="tink"]');
    clapSound = document.querySelector('[data-sound="clap"]');
}
function onKeyDown(ev) {
    console.log(ev);
    var key = ev.key;
    var timeStamp = ev.timeStamp;
    playSoundFor(key);
}
function playSoundFor(key) {
    sound[key]();
}
