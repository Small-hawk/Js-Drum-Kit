'use strict';

function alertMsg(){
    alert('Please push one of the keys belows in your keyboard!');
}

function playDrum(theKey = ""){
    let audio = document.querySelector(`audio[data-key *= "${theKey.toUpperCase()}"]`);
    if (!audio){
        alertMsg();
        return;
    }
    showEffect(theKey);
    audio.play();
    audio.currentTime = 0;
}

function showEffect(theKey = ""){
    let effect = document.querySelector(`div[data-key *= ${theKey.toUpperCase()}]`);
    effect.classList.add('playing');
}

function removeTransition(theKey){
    if (!theKey.propertyName.includes('transform')){
        return;
    }
    this.classList.remove('playing');
}

document.addEventListener('keydown', evt => playDrum(evt.key));

const keys = document.querySelectorAll('.key');
keys.forEach(x => {x.addEventListener('transitionend', removeTransition)});
