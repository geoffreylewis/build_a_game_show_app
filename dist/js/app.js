/*******************
* Global variables *
*******************/
const startScreen = document.getElementById('overlay');
const startButton = document.getElementsByClassName('btn__reset')[0];
const qwertyKeyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = document.querySelector('ul');
let missed = 0;



/*******************
* Phrases to guess *
*******************/
const phrases = ['A state of society where men may not speak their minds cannot long endure',
                 'I like a man who grins when he fights',
                 'History is written by the victors',
                 'Great and good are seldom the same man',
                 'Difficulties mastered are opportunities won'];



/************
* Functions *
************/
// Randomly choose any phrase and split it
function getRandomPhraseAsArray(phr) {
     const randomPhrase = phr[Math.floor(Math.random()*phr.length)];
     const splitRandomPhrase = randomPhrase.split("");
     return splitRandomPhrase;
}

// Add random phrase to the game board display as empty boxes
function addPhraseToDisplay(arr) {
     for (let i = 0; i < arr.length; i += 1) {
          let li = document.createElement('li');
          li.textContent = arr[i];
          if (li.textContent != " ") {
               li.className = 'letter';
          }
          ul.appendChild(li);
     }
}

//
function checkLetter (buttonClicked) {
     let squaresWithLetters = document.getElementsByClassName('letter');
     let matchingLetter = null;
     for (let i = 0; i < squaresWithLetters.length; i += 1) {
          if (squaresWithLetters[i].textContent === buttonClicked.textContent) {
               squaresWithLetters[i].className += ' show';
               let matchingLetter = buttonClicked.textContent;
          }
     }
     return matchingLetter;
}



/**************
* Actual Game *
**************/
// Hides start screen overlay when player clicks the start button
startButton.addEventListener('click', () => {
     startScreen.style.display = 'none';
});

// Randomly choose a phrase and put it on the board as empty boxes
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// Pays attention to the letters that are clicked on the keyboard by the player
qwertyKeyboard.addEventListener('click', (e) => {
     if (e.target.tagName === 'BUTTON') {
          e.target.className += ' chosen';
          e.target.disabled = 'true';
          checkLetter(e.target);
     }
})
