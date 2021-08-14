let rideSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let boomSound: HTMLAudioElement;
let hihatSound: HTMLAudioElement;
let openhat: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let clapSound: HTMLAudioElement;

appStart();

var sound = {

    'q': function () {
        play(rideSound)
    },
    'w': function () {
        play(kickSound)
    },
    'e': function () {
        play(boomSound)
    },
    'r': function () {
        play(hihatSound)
    },
    't': function () {
        play(openhat)
    },
    'y': function () {
        play(snareSound)
    },
    'u': function () {
        play(tomSound)
    },
    'i': function () {
        play(tinkSound)
    },
    'o': function () {
        play(clapSound)
    }
};

function play(audio: HTMLAudioElement): void {
    audio.currentTime = 0
    audio.play()
}

function appStart(): void {
    document.body.addEventListener('keypress', onKeyDown);
    getSounds();

}

function getSounds(): void {
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

function onKeyDown(ev: KeyboardEvent): void {
    console.log(ev);
    const key = ev.key;
    const timeStamp = ev.timeStamp;
    playSoundFor(key);

}

function playSoundFor(key: string): void {
    sound[key]();
}
