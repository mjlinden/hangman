'use strict'
const words = ['tanja','ersoy',
'marcel','mark','esther','kees','gijs','maud','wieger','sapna','muchahid','lara','nagity','fadime','ritchie'];

let selectedWord;
let correctLetters;
let wrongLetters;
let gameActive;

function initModel() {
    setGameActive();
    correctLetters = [];
    wrongLetters = [];
    selectedWord = words[Math.floor(Math.random() * words.length)];
    console.log(selectedWord);
}

function getGameActive() {
    return gameActive;
}

function setGameActive() {
    gameActive = true;
}

function setGameInActive() {
    gameActive = false;
}

function isWinner() {
    let selectedWordArray = selectedWord.split('');
    for (let i = 0; i < selectedWordArray.length; i++) {
        if (!correctLetters.includes(selectedWordArray[i])) {
            return false;
        }
    }
    return true;
}

function isLosser() {
    if(wrongLetters.length===7)
        return true;
     else
        return false;
}

function checkLetter(letter)
{

    console.log(letter);
    //controlleer of letter nog niet gekozenis
    if(correctLetters.indexOf(letter) === -1 && wrongLetters.indexOf(letter) === -1){
        //controlleer of letter in het te raden woord zit
        if(selectedWord.indexOf(letter) === -1) {
            wrongLetters.push(letter);
            return false;
        } else {
            correctLetters.push(letter);
            showWord(selectedWord, correctLetters);
            return true;
        }
    }
    return false;
}

function getSelectedWord() {
    return selectedWord;
}

function getNumberOfWrongCharacters(){
    return wrongLetters.length;
}