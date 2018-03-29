/*******************
* Global variables *
*******************/
const startScreen = document.getElementById('overlay');
const startButton = document.getElementsByClassName('btn__reset')[0];
const qwertyKeyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = document.querySelector('ul');
let missed = 0;
let totalHearts = document.getElementsByClassName('tries');



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
          } else {
               li.className = 'space';
          }
          ul.appendChild(li);
     }
}

// Check to see if letter clicked is a correct guess
function checkLetter (buttonClicked) {
     let squaresWithLetters = document.getElementsByClassName('letter');
     let matchingLetter = null;
     for (let i = 0; i < squaresWithLetters.length; i += 1) {
          if (squaresWithLetters[i].textContent === buttonClicked.textContent) {
               squaresWithLetters[i].className += ' show';
               matchingLetter = buttonClicked.textContent;
          } else if (squaresWithLetters[i].textContent === buttonClicked.textContent.toUpperCase()) {
               squaresWithLetters[i].className += ' show';
               matchingLetter = buttonClicked.textContent.toUpperCase();
          }
     }
     return matchingLetter;
}

// Check to see if player is winning or losing
function checkWin () {
     let squaresGuessedCorrectly = document.getElementsByClassName('show');
     if (squaresWithLetters.length === squaresGuessedCorrectly.length) {
          startScreen.className = 'win';
          startScreen.style.display = 'flex';
     } else if (missed >= 5) {
          startScreen.className = 'lose';
          startScreen.style.display = 'flex';
     }
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
          e.target.className = 'chosen';
          e.target.disabled = 'true';
          let letterFound = checkLetter(e.target);
          let currentHeart = totalHearts[totalHearts.length - missed];
          if (letterFound === null) {
               missed += 1;
               currentHeart.getElementsByTagName('img')[0].src = 'images/lostHeart.png';
          }
          checkWin();
     }
});
