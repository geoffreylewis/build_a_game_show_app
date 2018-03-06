const startScreen = document.getElementById('overlay');
const startButton = document.getElementsByClassName('btn__reset')[0];
const qwertyKeyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

startButton.addEventListener('click', () => {
     startScreen.style.display = 'none';
})
