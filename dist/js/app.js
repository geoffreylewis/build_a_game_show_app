// Variables
const startScreen = document.getElementById('overlay');
const startButton = document.getElementsByClassName('btn__reset')[0];
const qwertyKeyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;


// Hides start screen overlay when start button is clicked
startButton.addEventListener('click', () => {
     startScreen.style.display = 'none';
})


//  Phrases to guess
const phrases = ['A state of society where men may not speak their minds cannot long endure',
                 'I like a man who grins when he fights',
                 'History is written by the victors',
                 'Great and good are seldom the same man',
                 'Difficulties mastered are opportunities won'];


// Randomly choose any phrase and split it
getRandomPhraseAsArray(arr) {
     let randomPhrase = arr[Math.floor(Math.random()*arr.length)];
     let randomPhraseArray = specificPhrase.split("");
     return randomPhraseArray;
}

getRandomPhraseAsArray(phrases);
