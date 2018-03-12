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
function getRandomPhraseAsArray(arr) {
     const randomPhrase = arr[Math.floor(Math.random()*arr.length)];
     const splitRandomPhrase = randomPhrase.split("");
     return splitRandomPhrase;
}

const phraseArray = getRandomPhraseAsArray(phrases);


// Add random phrase to the game board display
function addPhraseToDisplay(arr) {
     const ul = document.querySelector('ul');
     for (let i = 0; i < arr.length; i += 1) {
          let li = document.createElement('li');
          li.textContent = arr[i];
          if (li.textContent != " ") {
               li.className = 'letter';
          }
          ul.appendChild(li);
     }
}

addPhraseToDisplay(phraseArray);
